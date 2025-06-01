import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to SaaS Booking Platform</h1>
      <p className="mb-6">Manage bookings and projects seamlessly.</p>
      <Link href="/dashboard">
        <button className="px-6 py-2 bg-blue-600 text-white rounded">Go to Dashboard</button>
      </Link>
    </div>
  );
}