import crypto from 'crypto';
import { cookies } from 'next/headers';
import { db } from './db';

const SESSION_COOKIE_NAME = 'rob_admin_session';
const SESSION_SECRET = 'roots-of-balance-secure-salt-2026';

export function hashPassword(password: string): string {
  return crypto
    .createHash('sha256')
    .update(password + SESSION_SECRET)
    .digest('hex');
}

export function generateSessionToken(username: string): string {
  const timestamp = Date.now();
  const signature = crypto
    .createHmac('sha256', SESSION_SECRET)
    .update(`${username}:${timestamp}`)
    .digest('hex');
  return Buffer.from(`${username}:${timestamp}:${signature}`).toString('base64');
}

export function verifySessionToken(token: string): boolean {
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    const [username, timestampStr, signature] = decoded.split(':');
    if (!username || !timestampStr || !signature) return false;

    const timestamp = parseInt(timestampStr, 10);
    // Token valid for 7 days
    if (Date.now() - timestamp > 7 * 24 * 60 * 60 * 1000) {
      return false;
    }

    const expectedSignature = crypto
      .createHmac('sha256', SESSION_SECRET)
      .update(`${username}:${timestamp}`)
      .digest('hex');

    return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature));
  } catch {
    return false;
  }
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME);
  if (!sessionCookie?.value) {
    return false;
  }
  return verifySessionToken(sessionCookie.value);
}

export { SESSION_COOKIE_NAME };

