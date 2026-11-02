import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { isAuthenticated } from '@/lib/auth';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const all = searchParams.get('all') === 'true';

  if (all) {
    const authed = await isAuthenticated();
    if (!authed) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return NextResponse.json({ posts: db.getAllBlogPosts() });
  }

  return NextResponse.json({ posts: db.getBlogPosts() });
}

export async function POST(req: Request) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const newPost = db.createBlogPost(body);
    return NextResponse.json({ success: true, post: newPost });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Create post failed';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

