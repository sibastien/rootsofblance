import { db } from '@/lib/db';
import HomePageClient from './HomePageClient';

export default function HomePage() {
  const profile = db.getProfile();
  const services = db.getServices();
  const modules = db.getAcademyModules();
  const blogPosts = db.getBlogPosts().slice(0, 3);
  const testimonials = db.getTestimonials();

  return (
    <HomePageClient
      profile={profile}
      services={services}
      modules={modules}
      blogPosts={blogPosts}
      testimonials={testimonials}
    />
  );
}
