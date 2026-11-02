import Link from 'next/link';
import Image from 'next/image';
import { db } from '@/lib/db';
import { Clock, Calendar, ArrowRight, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Blog & Educational Insights | Roots of Balance',
  description: 'Articles and essays on holistic wellness, somatic bodywork, nervous system regulation, and professional coaching education by Alia Alblooki.',
};

export default function BlogIndexPage() {
  const posts = db.getBlogPosts();

  const categories = [
    'Holistic Wellness',
    'Mindfulness',
    'Personal Growth',
    'Lifestyle and Wellbeing',
    'Coaching Education',
    'Professional Development'
  ];

  return (
    <div className="space-y-16 pb-24">
      {/* Page Header */}
      <section className="bg-sand-100/70 border-b border-sand-300/60 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-sage-700 font-semibold block">
              Knowledge & Reflections
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-earth-950 font-normal leading-tight">
              The Roots of Balance Journal
            </h1>
            <p className="text-base sm:text-lg text-earth-700 font-light leading-relaxed">
              Thoughtful writings on somatic regulation, relational dynamics, habit psychology, and the art of professional coaching.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-sand-50 rounded-2xl border border-sand-300 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-[16/9] relative overflow-hidden bg-sand-200">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-sand-50/90 backdrop-blur-md text-earth-900 text-[11px] font-medium tracking-wide">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-earth-500">
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

                  <h2 className="font-serif text-xl text-earth-950 font-medium group-hover:text-sage-800 transition leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-earth-600 font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-sand-200/60 flex items-center justify-between text-xs">
                <span className="text-earth-500 font-light">{post.authorName}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-medium text-sage-800 hover:text-sage-900 inline-flex items-center gap-1 underline underline-offset-4"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

