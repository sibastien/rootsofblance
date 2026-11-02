'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  DatabaseSchema,
  Booking,
  AcademyApplication,
  AcademyModule,
  CoachingService,
  BlogPost,
  Inquiry,
  Subscriber
} from '@/lib/db';
import {
  Calendar,
  GraduationCap,
  Users,
  DollarSign,
  Mail,
  CheckCircle2,
  Clock,
  Settings,
  Edit3,
  Trash2,
  Plus,
  LogOut,
  RefreshCw,
  Search,
  Filter,
  Eye,
  FileText,
  UserCheck
} from 'lucide-react';

interface Props {
  initialData: DatabaseSchema;
}

export default function AdminDashboardClient({ initialData }: Props) {
  const router = useRouter();
  const [data, setData] = useState<DatabaseSchema>(initialData);
  const [activeTab, setActiveTab] = useState<'overview' | 'appointments' | 'academy' | 'content' | 'leads'>('overview');
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  // Editable Bio State
  const [bioHeadline, setBioHeadline] = useState(data.profile.bioHeadline);
  const [coachPhone, setCoachPhone] = useState(data.profile.phone);
  const [coachLocation, setCoachLocation] = useState(data.profile.location);

  // New Module Modal state
  const [newModTitle, setNewModTitle] = useState('');
  const [newModSubtitle, setNewModSubtitle] = useState('');
  const [newModDesc, setNewModDesc] = useState('');
  const [showAddMod, setShowAddMod] = useState(false);

  // New Blog Post state
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostSlug, setNewPostSlug] = useState('');
  const [newPostCat, setNewPostCat] = useState('Holistic Wellness');
  const [newPostExcerpt, setNewPostExcerpt] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [showAddPost, setShowAddPost] = useState(false);

  const showNotification = (msg: string) => {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  };

  // Appointment Status Updater
  const updateBookingStatus = async (id: string, status: Booking['status']) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/bookings/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      if (res.ok) {
        const result = await res.json();
        setData((prev) => ({
          ...prev,
          bookings: prev.bookings.map((b) => (b.id === id ? result.booking : b)),
        }));
        showNotification(`Booking #${result.booking.bookingRef} updated to "${status}".`);
      }
    } finally {
      setLoading(false);
    }
  };

  // Academy Application Status Updater
  const updateAppStatus = async (id: string, status: AcademyApplication['status']) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/academy/applications/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      if (res.ok) {
        const result = await res.json();
        setData((prev) => ({
          ...prev,
          academyApplications: prev.academyApplications.map((a) => (a.id === id ? result.application : a)),
        }));
        showNotification(`Application #${result.application.applicationRef} updated to "${status}". Notification dispatched.`);
      }
    } finally {
      setLoading(false);
    }
  };

  // Create Module
  const handleCreateModule = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newModTitle || !newModDesc) return;
    setLoading(true);
    try {
      const res = await fetch('/api/academy/modules', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: newModTitle,
          subtitle: newModSubtitle,
          description: newModDesc,
          durationWeeks: 2,
          learningObjectives: ['Core module practice and peer coaching'],
        }),
      });
      if (res.ok) {
        const result = await res.json();
        setData((prev) => ({
          ...prev,
          academyModules: [...prev.academyModules, result.module],
        }));
        setNewModTitle('');
        setNewModSubtitle('');
        setNewModDesc('');
        setShowAddMod(false);
        showNotification('Academy curriculum module added successfully.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Delete Module
  const handleDeleteModule = async (id: string) => {
    if (!confirm('Are you sure you want to remove this module from the curriculum?')) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/academy/modules/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setData((prev) => ({
          ...prev,
          academyModules: prev.academyModules.filter((m) => m.id !== id),
        }));
        showNotification('Module deleted.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Save Profile Updates
  const handleSaveProfile = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          bioHeadline,
          phone: coachPhone,
          location: coachLocation,
        }),
      });
      if (res.ok) {
        showNotification('Coach profile and contact details updated successfully.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Create Blog Post
  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostTitle || !newPostContent) return;
    setLoading(true);
    try {
      const res = await fetch('/api/content/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: newPostTitle,
          slug: newPostSlug || newPostTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
          category: newPostCat,
          excerpt: newPostExcerpt,
          content: newPostContent,
          featuredImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
          authorName: data.profile.coachName,
          authorRole: 'Founder, Roots of Balance',
          readingTimeMinutes: 5,
          metaTitle: newPostTitle,
          metaDesc: newPostExcerpt,
          published: true,
        }),
      });
      if (res.ok) {
        const result = await res.json();
        setData((prev) => ({
          ...prev,
          blogPosts: [result.post, ...prev.blogPosts],
        }));
        setShowAddPost(false);
        setNewPostTitle('');
        setNewPostSlug('');
        setNewPostExcerpt('');
        setNewPostContent('');
        showNotification('New article published to the blog.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Metrics Calculations
  const totalBookings = data.bookings.length;
  const upcomingBookings = data.bookings.filter((b) => b.status === 'confirmed' || b.status === 'pending').length;
  const totalApplications = data.academyApplications.length;
  const enrolledStudents = data.academyApplications.filter((a) => a.status === 'enrolled' || a.status === 'accepted').length;
  const totalInquiries = data.inquiries.length;
  const totalSubscribers = data.subscribers.length;
  const estimatedRevenue = data.bookings.reduce((acc, b) => {
    const s = data.services.find((svc) => svc.id === b.serviceId);
    return acc + (s ? s.price : 150);
  }, 0) + (enrolledStudents * 3200);

  return (
    <div className="min-h-screen bg-sand-100/50 pb-20">
      {/* Admin Subheader & Navigation */}
      <div className="bg-sand-50 border-b border-sand-300 px-4 sm:px-8 py-4 sticky top-12 z-40 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-[11px] uppercase tracking-widest text-sage-700 font-semibold block">
            Executive Control Center
          </span>
          <h1 className="font-serif text-2xl text-earth-950 font-normal">
            Roots of Balance Business Management
          </h1>
        </div>

        {/* Action Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview', icon: CheckCircle2 },
            { id: 'appointments', label: `Appointments (${upcomingBookings})`, icon: Calendar },
            { id: 'academy', label: `Academy (${totalApplications})`, icon: GraduationCap },
            { id: 'content', label: 'Website CMS', icon: Edit3 },
            { id: 'leads', label: `Leads & Inquiries (${totalInquiries})`, icon: Mail },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium flex items-center gap-1.5 whitespace-nowrap transition ${
                  isActive
                    ? 'bg-sage-700 text-white shadow-sm'
                    : 'bg-sand-100 text-earth-700 hover:bg-sand-200 border border-sand-300'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}

          <button
            onClick={handleLogout}
            className="p-2 rounded-xl text-earth-600 hover:text-terracotta-700 hover:bg-terracotta-50 transition border border-sand-300 ml-2"
            title="Sign Out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Floating Success Pill */}
      {successMsg && (
        <div className="max-w-xl mx-auto mt-4 px-4">
          <div className="bg-sage-700 text-white px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-lg animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-sage-200 shrink-0" />
            <span>{successMsg}</span>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* TAB 1: OVERVIEW & KEY PERFORMANCE INDICATORS */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
              <div className="bg-sand-50 border border-sand-300 rounded-2xl p-4 space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-earth-500 font-medium block">
                  Total Bookings
                </span>
                <span className="font-serif text-3xl text-earth-950 font-normal">{totalBookings}</span>
                <span className="text-[10px] text-sage-700 block font-medium">Personal Sessions</span>
              </div>

              <div className="bg-sand-50 border border-sand-300 rounded-2xl p-4 space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-earth-500 font-medium block">
                  Active Schedule
                </span>
                <span className="font-serif text-3xl text-sage-800 font-normal">{upcomingBookings}</span>
                <span className="text-[10px] text-sage-700 block font-medium">Pending/Confirmed</span>
              </div>

              <div className="bg-sand-50 border border-sand-300 rounded-2xl p-4 space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-earth-500 font-medium block">
                  Academy Apps
                </span>
                <span className="font-serif text-3xl text-terracotta-800 font-normal">{totalApplications}</span>
                <span className="text-[10px] text-earth-500 block">Candidate Cohort</span>
              </div>

              <div className="bg-sand-50 border border-sand-300 rounded-2xl p-4 space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-earth-500 font-medium block">
                  Enrolled Students
                </span>
                <span className="font-serif text-3xl text-earth-950 font-normal">{enrolledStudents}</span>
                <span className="text-[10px] text-sage-700 block font-medium">Academy Trainees</span>
              </div>

              <div className="bg-sand-50 border border-sand-300 rounded-2xl p-4 space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-earth-500 font-medium block">
                  Newsletter Leads
                </span>
                <span className="font-serif text-3xl text-earth-950 font-normal">{totalSubscribers}</span>
                <span className="text-[10px] text-earth-500 block">Free Guide Readers</span>
              </div>

              <div className="bg-sand-50 border border-sand-300 rounded-2xl p-4 space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-earth-500 font-medium block">
                  Est. Pipeline
                </span>
                <span className="font-serif text-3xl text-earth-950 font-normal">
                  ${estimatedRevenue.toLocaleString()}
                </span>
                <span className="text-[10px] text-earth-500 block">USD Total Value</span>
              </div>
            </div>

            {/* Recent Activity Dual Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Recent Bookings Box */}
              <div className="bg-sand-50 border border-sand-300 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg text-earth-900 font-medium flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-sage-700" />
                    <span>Recent Client Bookings</span>
                  </h3>
                  <button
                    onClick={() => setActiveTab('appointments')}
                    className="text-xs text-sage-800 font-medium hover:underline"
                  >
                    View All Calendar
                  </button>
                </div>

                <div className="space-y-3">
                  {data.bookings.slice(0, 4).map((bk) => (
                    <div
                      key={bk.id}
                      className="p-3.5 rounded-xl border border-sand-200 bg-sand-100/50 flex items-center justify-between text-xs"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-earth-900">{bk.clientName}</span>
                          <span className="font-mono text-[10px] text-earth-500">#{bk.bookingRef}</span>
                        </div>
                        <span className="text-earth-600 block">{bk.serviceTitle}</span>
                        <span className="text-earth-500 text-[11px]">
                          {bk.date} at {bk.timeSlot} ({bk.format})
                        </span>
                      </div>
                      <div className="text-right">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider block mb-1 ${
                          bk.status === 'confirmed' ? 'bg-sage-100 text-sage-900' :
                          bk.status === 'pending' ? 'bg-amber-100 text-amber-900' : 'bg-sand-200 text-earth-700'
                        }`}>
                          {bk.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Academy Applicants Box */}
              <div className="bg-sand-50 border border-sand-300 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg text-earth-900 font-medium flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-terracotta-700" />
                    <span>Recent Academy Applicants</span>
                  </h3>
                  <button
                    onClick={() => setActiveTab('academy')}
                    className="text-xs text-terracotta-800 font-medium hover:underline"
                  >
                    Manage Academy
                  </button>
                </div>

                <div className="space-y-3">
                  {data.academyApplications.slice(0, 4).map((app) => (
                    <div
                      key={app.id}
                      className="p-3.5 rounded-xl border border-sand-200 bg-sand-100/50 flex items-center justify-between text-xs"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-earth-900">{app.fullName}</span>
                          <span className="font-mono text-[10px] text-earth-500">#{app.applicationRef}</span>
                        </div>
                        <span className="text-earth-600 block">{app.occupation}</span>
                        <span className="text-earth-500 text-[11px] line-clamp-1 max-w-xs font-light">
                          &quot;{app.motivation}&quot;
                        </span>
                      </div>
                      <div className="text-right">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider block mb-1 ${
                          app.status === 'accepted' || app.status === 'enrolled' ? 'bg-sage-100 text-sage-900' :
                          app.status === 'pending' ? 'bg-amber-100 text-amber-900' : 'bg-sand-200 text-earth-700'
                        }`}>
                          {app.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: APPOINTMENTS & CALENDAR MANAGEMENT */}
        {activeTab === 'appointments' && (
          <div className="space-y-6">
            <div className="bg-sand-50 border border-sand-300 rounded-2xl p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="font-serif text-xl text-earth-900 font-medium">
                    Client Coaching Schedule & Bookings
                  </h2>
                  <p className="text-xs text-earth-500 font-light">
                    Review incoming session requests, change status, and prevent scheduling conflicts.
                  </p>
                </div>
                <div className="text-xs text-earth-600 bg-sand-100 border border-sand-300 px-3 py-1.5 rounded-xl">
                  Working Hours: {data.profile.workingHours.startTime} – {data.profile.workingHours.endTime} EST
                </div>
              </div>

              {/* Bookings Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-earth-800">
                  <thead className="bg-sand-100/80 border-b border-sand-200 text-[11px] uppercase tracking-wider text-earth-600">
                    <tr>
                      <th className="p-3">Ref</th>
                      <th className="p-3">Client</th>
                      <th className="p-3">Service</th>
                      <th className="p-3">Date & Time</th>
                      <th className="p-3">Format</th>
                      <th className="p-3">Status</th>
                      <th className="p-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sand-200">
                    {data.bookings.map((bk) => (
                      <tr key={bk.id} className="hover:bg-sand-100/40 transition">
                        <td className="p-3 font-mono font-semibold text-sage-900">{bk.bookingRef}</td>
                        <td className="p-3">
                          <span className="font-medium text-earth-900 block">{bk.clientName}</span>
                          <span className="text-earth-500 text-[11px]">{bk.clientEmail} • {bk.clientPhone}</span>
                        </td>
                        <td className="p-3 font-medium">{bk.serviceTitle}</td>
                        <td className="p-3">
                          <span className="block font-medium">{bk.date}</span>
                          <span className="text-earth-500 text-[11px]">{bk.timeSlot}</span>
                        </td>
                        <td className="p-3">{bk.format}</td>
                        <td className="p-3">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                            bk.status === 'confirmed' ? 'bg-sage-100 text-sage-900' :
                            bk.status === 'pending' ? 'bg-amber-100 text-amber-900' :
                            bk.status === 'completed' ? 'bg-blue-100 text-blue-900' : 'bg-sand-200 text-earth-700'
                          }`}>
                            {bk.status}
                          </span>
                        </td>
                        <td className="p-3 text-right space-x-1.5">
                          {bk.status !== 'confirmed' && (
                            <button
                              onClick={() => updateBookingStatus(bk.id, 'confirmed')}
                              className="px-2.5 py-1 rounded-lg bg-sage-700 hover:bg-sage-800 text-white text-[10px] font-medium"
                            >
                              Approve
                            </button>
                          )}
                          {bk.status !== 'completed' && bk.status === 'confirmed' && (
                            <button
                              onClick={() => updateBookingStatus(bk.id, 'completed')}
                              className="px-2.5 py-1 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-[10px] font-medium"
                            >
                              Complete
                            </button>
                          )}
                          {bk.status !== 'cancelled' && (
                            <button
                              onClick={() => updateBookingStatus(bk.id, 'cancelled')}
                              className="px-2.5 py-1 rounded-lg border border-sand-300 hover:bg-terracotta-50 hover:text-terracotta-800 text-[10px] font-medium text-earth-700"
                            >
                              Cancel
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: ACADEMY MANAGEMENT & CURRICULUM */}
        {activeTab === 'academy' && (
          <div className="space-y-8">
            {/* Applications List */}
            <div className="bg-sand-50 border border-sand-300 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-serif text-xl text-earth-900 font-medium">
                    Training Academy Applications
                  </h2>
                  <p className="text-xs text-earth-500 font-light">
                    Review applicant background, motivations, and manage admissions statuses.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {data.academyApplications.map((app) => (
                  <div
                    key={app.id}
                    className="p-5 rounded-2xl border border-sand-300 bg-sand-100/50 space-y-3 text-xs"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-serif text-base font-medium text-earth-900">{app.fullName}</span>
                          <span className="font-mono text-[10px] bg-sand-200 px-2 py-0.5 rounded text-earth-700">
                            #{app.applicationRef}
                          </span>
                        </div>
                        <span className="text-earth-600 text-xs">
                          {app.email} • {app.phone} • {app.occupation}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                          app.status === 'accepted' ? 'bg-sage-100 text-sage-900' :
                          app.status === 'enrolled' ? 'bg-blue-100 text-blue-900' :
                          app.status === 'rejected' ? 'bg-terracotta-100 text-terracotta-900' : 'bg-amber-100 text-amber-900'
                        }`}>
                          {app.status}
                        </span>

                        {app.status !== 'accepted' && app.status !== 'enrolled' && (
                          <button
                            onClick={() => updateAppStatus(app.id, 'accepted')}
                            className="px-3 py-1 rounded-lg bg-sage-700 hover:bg-sage-800 text-white text-[11px] font-medium"
                          >
                            Accept Candidate
                          </button>
                        )}
                        {app.status === 'accepted' && (
                          <button
                            onClick={() => updateAppStatus(app.id, 'enrolled')}
                            className="px-3 py-1 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-[11px] font-medium"
                          >
                            Mark Enrolled
                          </button>
                        )}
                        {app.status !== 'rejected' && app.status !== 'enrolled' && (
                          <button
                            onClick={() => updateAppStatus(app.id, 'rejected')}
                            className="px-2.5 py-1 rounded-lg border border-sand-300 hover:bg-terracotta-50 hover:text-terracotta-800 text-[11px] text-earth-700"
                          >
                            Reject
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="bg-sand-50 p-3.5 rounded-xl border border-sand-200 space-y-1.5">
                      <p className="text-earth-700 font-light">
                        <strong>Motivation:</strong> {app.motivation}
                      </p>
                      <p className="text-earth-600 font-light text-[11px]">
                        <strong>Previous Experience:</strong> {app.previousExperience}
                      </p>
                      <p className="text-earth-500 font-light text-[11px]">
                        <strong>Preferred Format:</strong> {app.preferredFormat} | <strong>Availability:</strong> {app.availability}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dynamic Curriculum Modules Manager */}
            <div className="bg-sand-50 border border-sand-300 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-xl text-earth-900 font-medium">
                    Academy Curriculum & Modules ({data.academyModules.length} Modules)
                  </h3>
                  <p className="text-xs text-earth-500 font-light">
                    Add, edit, or manage the course modules displayed on the public academy page.
                  </p>
                </div>
                <button
                  onClick={() => setShowAddMod(!showAddMod)}
                  className="px-4 py-2 rounded-full bg-sage-700 hover:bg-sage-800 text-white text-xs font-medium flex items-center gap-1.5 transition"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{showAddMod ? 'Cancel' : 'Add Module'}</span>
                </button>
              </div>

              {/* Add Module Inline Form */}
              {showAddMod && (
                <form onSubmit={handleCreateModule} className="bg-sand-100 border border-sand-300 rounded-2xl p-5 space-y-3 text-xs">
                  <h4 className="font-serif text-base text-earth-900 font-medium">Create New Module</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Module Title"
                      value={newModTitle}
                      onChange={(e) => setNewModTitle(e.target.value)}
                      className="bg-sand-50 border border-sand-300 rounded-xl px-3.5 py-2 text-earth-900"
                    />
                    <input
                      type="text"
                      placeholder="Subtitle / Focus"
                      value={newModSubtitle}
                      onChange={(e) => setNewModSubtitle(e.target.value)}
                      className="bg-sand-50 border border-sand-300 rounded-xl px-3.5 py-2 text-earth-900"
                    />
                  </div>
                  <textarea
                    rows={2}
                    required
                    placeholder="Description of skills covered"
                    value={newModDesc}
                    onChange={(e) => setNewModDesc(e.target.value)}
                    className="w-full bg-sand-50 border border-sand-300 rounded-xl p-3 text-earth-900 resize-none"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-full bg-sage-700 text-white font-medium hover:bg-sage-800 transition"
                  >
                    Save & Publish Module
                  </button>
                </form>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.academyModules.map((m) => (
                  <div
                    key={m.id}
                    className="p-4 rounded-xl border border-sand-300 bg-sand-100/50 flex flex-col justify-between text-xs space-y-2"
                  >
                    <div>
                      <div className="flex items-center justify-between text-earth-500 mb-1">
                        <span className="font-bold text-sage-800 uppercase tracking-wider text-[10px]">
                          Module {m.moduleNumber}
                        </span>
                        <span>{m.durationWeeks} Weeks</span>
                      </div>
                      <h4 className="font-serif text-sm font-medium text-earth-900">{m.title}</h4>
                      <p className="text-earth-600 text-[11px] line-clamp-2 font-light mt-1">{m.description}</p>
                    </div>

                    <div className="pt-2 border-t border-sand-200 flex justify-end">
                      <button
                        onClick={() => handleDeleteModule(m.id)}
                        className="text-terracotta-700 hover:text-terracotta-900 text-[11px] flex items-center gap-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: WEBSITE CMS (BIO, SERVICES, BLOG) */}
        {activeTab === 'content' && (
          <div className="space-y-8">
            {/* Bio Editor */}
            <div className="bg-sand-50 border border-sand-300 rounded-2xl p-6 space-y-4 text-xs">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-xl text-earth-900 font-medium">
                    Coach Profile & Bio Editor
                  </h3>
                  <p className="text-earth-500 font-light">
                    Update your headline, studio base, and contact details displayed across the website.
                  </p>
                </div>
                <button
                  onClick={handleSaveProfile}
                  disabled={loading}
                  className="px-4 py-2 rounded-full bg-sage-700 hover:bg-sage-800 text-white font-medium transition"
                >
                  Save Profile
                </button>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-earth-700 font-medium block mb-1">Bio Headline</label>
                  <input
                    type="text"
                    value={bioHeadline}
                    onChange={(e) => setBioHeadline(e.target.value)}
                    className="w-full bg-sand-100 border border-sand-300 rounded-xl px-3.5 py-2 text-earth-900"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-earth-700 font-medium block mb-1">Phone</label>
                    <input
                      type="text"
                      value={coachPhone}
                      onChange={(e) => setCoachPhone(e.target.value)}
                      className="w-full bg-sand-100 border border-sand-300 rounded-xl px-3.5 py-2 text-earth-900"
                    />
                  </div>
                  <div>
                    <label className="text-earth-700 font-medium block mb-1">Location Base</label>
                    <input
                      type="text"
                      value={coachLocation}
                      onChange={(e) => setCoachLocation(e.target.value)}
                      className="w-full bg-sand-100 border border-sand-300 rounded-xl px-3.5 py-2 text-earth-900"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Post Publisher */}
            <div className="bg-sand-50 border border-sand-300 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-xl text-earth-900 font-medium">
                    Blog Articles Manager ({data.blogPosts.length} Published)
                  </h3>
                  <p className="text-xs text-earth-500 font-light">
                    Publish educational articles for SEO authority and thought leadership.
                  </p>
                </div>
                <button
                  onClick={() => setShowAddPost(!showAddPost)}
                  className="px-4 py-2 rounded-full bg-sage-700 hover:bg-sage-800 text-white text-xs font-medium flex items-center gap-1.5 transition"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{showAddPost ? 'Cancel' : 'Write New Article'}</span>
                </button>
              </div>

              {showAddPost && (
                <form onSubmit={handleCreatePost} className="bg-sand-100 border border-sand-300 rounded-2xl p-5 space-y-3 text-xs">
                  <h4 className="font-serif text-base text-earth-900 font-medium">Draft Article</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Article Title"
                      value={newPostTitle}
                      onChange={(e) => setNewPostTitle(e.target.value)}
                      className="bg-sand-50 border border-sand-300 rounded-xl px-3.5 py-2 text-earth-900"
                    />
                    <select
                      value={newPostCat}
                      onChange={(e) => setNewPostCat(e.target.value)}
                      className="bg-sand-50 border border-sand-300 rounded-xl px-3.5 py-2 text-earth-900"
                    >
                      <option value="Holistic Wellness">Holistic Wellness</option>
                      <option value="Mindfulness">Mindfulness</option>
                      <option value="Personal Growth">Personal Growth</option>
                      <option value="Coaching Education">Coaching Education</option>
                      <option value="Professional Development">Professional Development</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    placeholder="Short Excerpt / Meta Description"
                    value={newPostExcerpt}
                    onChange={(e) => setNewPostExcerpt(e.target.value)}
                    className="w-full bg-sand-50 border border-sand-300 rounded-xl px-3.5 py-2 text-earth-900"
                  />
                  <textarea
                    rows={6}
                    required
                    placeholder="Full Article Content (paragraphs, bullet points, headers)"
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    className="w-full bg-sand-50 border border-sand-300 rounded-xl p-3 text-earth-900 resize-none font-mono"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-full bg-sage-700 text-white font-medium hover:bg-sage-800 transition"
                  >
                    Publish to Website
                  </button>
                </form>
              )}

              <div className="space-y-3">
                {data.blogPosts.map((p) => (
                  <div
                    key={p.id}
                    className="p-3.5 rounded-xl border border-sand-200 bg-sand-100/50 flex items-center justify-between text-xs"
                  >
                    <div>
                      <span className="font-semibold text-earth-900 block">{p.title}</span>
                      <span className="text-earth-500 text-[11px]">{p.category} • Published {p.publishedAt}</span>
                    </div>
                    <span className="text-sage-800 font-medium">Live on Site</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: LEADS & INQUIRIES */}
        {activeTab === 'leads' && (
          <div className="space-y-8">
            {/* Contact Inquiries */}
            <div className="bg-sand-50 border border-sand-300 rounded-2xl p-6 space-y-4">
              <h2 className="font-serif text-xl text-earth-900 font-medium">
                Website Enquiries ({data.inquiries.length})
              </h2>

              <div className="space-y-3">
                {data.inquiries.map((inq) => (
                  <div
                    key={inq.id}
                    className="p-4 rounded-xl border border-sand-300 bg-sand-100/50 text-xs space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-earth-900">{inq.name} ({inq.email})</span>
                      <span className="text-[10px] text-earth-500">{new Date(inq.createdAt).toLocaleDateString()}</span>
                    </div>
                    <p className="font-medium text-sage-900">{inq.subject}</p>
                    <p className="text-earth-700 font-light bg-sand-50 p-2.5 rounded-lg border border-sand-200">
                      {inq.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Subscribers */}
            <div className="bg-sand-50 border border-sand-300 rounded-2xl p-6 space-y-4">
              <h3 className="font-serif text-xl text-earth-900 font-medium">
                Newsletter Subscribers ({data.subscribers.length})
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-earth-800">
                  <thead className="bg-sand-100 text-[11px] uppercase tracking-wider text-earth-600">
                    <tr>
                      <th className="p-3">Subscriber Email</th>
                      <th className="p-3">Source</th>
                      <th className="p-3">Date Subscribed</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sand-200">
                    {data.subscribers.map((sub) => (
                      <tr key={sub.id}>
                        <td className="p-3 font-medium text-earth-900">{sub.email}</td>
                        <td className="p-3 text-earth-600">{sub.source}</td>
                        <td className="p-3 text-earth-500">{new Date(sub.subscribedAt).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

