import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { isAuthenticated } from '@/lib/auth';

export async function GET() {
  const modules = db.getAcademyModules();
  return NextResponse.json({ modules });
}

export async function POST(req: Request) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { moduleNumber, title, subtitle, description, learningObjectives, durationWeeks } = body;

    if (!title || !description) {
      return NextResponse.json({ error: 'Title and description required' }, { status: 400 });
    }

    const currentModules = db.getAcademyModules();
    const newModule = db.createAcademyModule({
      moduleNumber: moduleNumber || currentModules.length + 1,
      title,
      subtitle: subtitle || '',
      description,
      learningObjectives: Array.isArray(learningObjectives) ? learningObjectives : [],
      durationWeeks: durationWeeks || 2
    });

    return NextResponse.json({ success: true, module: newModule });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to create module';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

