import DashboardSidebar from '../../components/DashboardSidebar';

export default function AuditLogs() {
  return (
    <div className="flex">
      <DashboardSidebar />
      <main className="flex-1 p-10">
        <h1 className="text-2xl font-bold mb-4">Audit Logs</h1>
        <p className="mb-8">Track all verification and admin actions.</p>
        <div className="bg-white rounded shadow p-6">
          <p className="text-gray-500">[Logs table placeholder]</p>
        </div>
      </main>
    </div>
  );
}