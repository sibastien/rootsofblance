import { NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/auth';
import { db } from '@/lib/db';

export async function GET() {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  const profile = db.getProfile();
  return NextResponse.json({
    authenticated: true,
    user: {
      username: 'admin',
      coachName: profile.coachName,
      brandName: profile.brandName
    }
  });
}

