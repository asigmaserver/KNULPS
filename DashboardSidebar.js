import Link from 'next/link';
import { useRouter } from 'next/router';

const navLinks = [
  { href: '/dashboard', label: 'Home' },
  { href: '/dashboard/servers', label: 'Servers' },
  { href: '/dashboard/roles', label: 'Roles' },
  { href: '/dashboard/verification', label: 'Verification' },
  { href: '/dashboard/audit-logs', label: 'Audit Logs' },
  { href: '/dashboard/support', label: 'Support' },
];

export default function DashboardSidebar() {
  const router = useRouter();
  return (
    <aside className="w-60 bg-gray-100 h-screen p-6">
      <div className="mb-8 font-bold text-2xl text-blue-600">Bloxify</div>
      <nav>
        <ul>
          {navLinks.map(link => (
            <li key={link.href} className={`mb-3 ${router.pathname === link.href ? 'font-bold text-blue-600' : ''}`}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}