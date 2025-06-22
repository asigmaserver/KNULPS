import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
      <div className="text-xl font-bold text-blue-600">
        <Link href="/">Bloxify</Link>
      </div>
      <div>
        <Link href="/dashboard" className="text-blue-600 px-3">Dashboard</Link>
        <Link href="/auth" className="ml-4 bg-blue-600 text-white px-4 py-2 rounded">Login</Link>
      </div>
    </nav>
  );
}