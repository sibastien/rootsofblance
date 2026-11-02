import { redirect } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth';
import { db } from '@/lib/db';
import AdminDashboardClient from './AdminDashboardClient';

export const metadata = {
  title: 'Executive Dashboard | Roots of Balance',
};

export default async function AdminPage() {
  const authed = await isAuthenticated();
  if (!authed) {
    redirect('/admin/login');
  }

  const initialData = db.get();

  return <AdminDashboardClient initialData={initialData} />;
}

