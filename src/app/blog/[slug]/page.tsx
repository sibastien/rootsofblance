import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { db } from '@/lib/db';
import { Clock, Calendar, ArrowLeft, Share2, ShieldCheck, Calendar as CalendarIcon, GraduationCap } from 'lucide-react';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = db.getBlogPostBySlug(slug);

  if (!post) {
    return { title: 'Article Not Found | Roots of Balance' };
  }

  return {
    title: `${post.title} | Roots of Balance Journal`,
    description: post.metaDesc || post.excerpt,
    openGraph: {
      title: post.title,
      description: post.metaDesc || post.excerpt,
      images: [post.featuredImage],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.authorName],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = db.getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = db.getBlogPosts();
  const relatedPosts = allPosts.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <article className="pb-24 space-y-16">
      {/* Header */}
      <section className="bg-sand-100/70 border-b border-sand-300/60 pt-16 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-earth-600 hover:text-earth-900 font-medium transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to all articles</span>
          </Link>

          <div className="space-y-4">
            <span className="px-3 py-1 rounded-full bg-sage-100 text-sage-900 text-xs font-medium tracking-wide">
              {post.category}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-earth-950 font-normal leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-xs text-earth-600 pt-2 border-t border-sand-300/60">
              <span className="font-medium text-earth-900">{post.authorName}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-sage-700" />
                {post.publishedAt}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-sage-700" />
                {post.readingTimeMinutes} min read
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-xl border border-sand-300 relative bg-sand-200">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Main Body Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-earth max-w-none text-earth-800 leading-relaxed font-light space-y-6 text-base sm:text-lg">
          {post.content.split('\n\n').map((block, i) => {
            if (block.startsWith('### ')) {
              return (
                <h3 key={i} className="font-serif text-2xl text-earth-950 font-normal pt-4">
                  {block.replace('### ', '')}
                </h3>
              );
            }
            if (block.startsWith('* ') || block.startsWith('1. ')) {
              return (
                <div key={i} className="space-y-2 pl-4 border-l-2 border-sage-500 my-4 text-sm sm:text-base">
                  {block.split('\n').map((item, j) => (
                    <p key={j} className="m-0 text-earth-700">{item.replace(/^(\*|\d+\.)\s*/, '')}</p>
                  ))}
                </div>
              );
            }
            return <p key={i} className="leading-relaxed">{block}</p>;
          })}
        </div>

        {/* Author Bio Box */}
        <div className="mt-16 pt-8 border-t border-sand-300 bg-sand-100/60 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-20 h-20 rounded-full overflow-hidden relative shrink-0 border-2 border-sand-300">
            <Image
              src="/images/alia-alblooki.jpg"
              alt={post.authorName}
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-[11px] uppercase tracking-widest text-sage-700 font-semibold block">
              About the Author
            </span>
            <h4 className="font-serif text-xl text-earth-900 font-medium">
              {post.authorName}
            </h4>
            <p className="text-xs text-earth-600 font-light leading-relaxed">
              Founder of Roots of Balance. Holistic Wellness Coach, Psychological Balance Specialist, and Sports Nutrition Consultant dedicated to empowering sustainable health and training professional coaches.
            </p>
          </div>
        </div>

        {/* Dual Journey CTAs */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-sand-50 border border-sand-300 rounded-xl p-5 space-y-2">
            <span className="text-[11px] uppercase tracking-wider text-sage-700 font-semibold block">
              Experience the Work
            </span>
            <h5 className="font-serif text-base text-earth-900 font-medium">Book a Private Session</h5>
            <p className="text-xs text-earth-600 font-light">
              Work 1-on-1 with Alia to dismantle chronic stress and regulate your nervous system.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center gap-1.5 text-xs text-sage-800 font-semibold hover:underline pt-1"
            >
              <span>Schedule Session</span> &rarr;
            </Link>
          </div>

          <div className="bg-sand-50 border border-sand-300 rounded-xl p-5 space-y-2">
            <span className="text-[11px] uppercase tracking-wider text-terracotta-700 font-semibold block">
              Learn the Craft
            </span>
            <h5 className="font-serif text-base text-earth-900 font-medium">Join the Coach Academy</h5>
            <p className="text-xs text-earth-600 font-light">
              Master the 9-module curriculum and build your certified holistic coaching practice.
            </p>
            <Link
              href="/academy"
              className="inline-flex items-center gap-1.5 text-xs text-terracotta-800 font-semibold hover:underline pt-1"
            >
              <span>Explore Academy</span> &rarr;
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

