import { db } from '@/lib/db';
import HomePageClient from './HomePageClient';

export default function HomePage() {
  const profile = db.getProfile();
  const services = db.getServices().slice(0, 3);
  const modules = db.getAcademyModules().slice(0, 4);
  const testimonials = db.getTestimonials();

  return (
    <HomePageClient
      profile={profile}
      services={services}
      modules={modules}
      testimonials={testimonials}
    />
  );
}
