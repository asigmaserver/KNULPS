import DashboardSidebar from '../../components/DashboardSidebar';

export default function DashboardHome() {
  return (
    <div className="flex">
      <DashboardSidebar />
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-4">Welcome to your Dashboard</h1>
        <p className="text-gray-700 mb-8">
          Here you can manage your servers, roles, verification settings, and more.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="font-semibold text-xl mb-2">Servers</h2>
            <p>Manage your connected Discord/Roblox servers.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h2 className="font-semibold text-xl mb-2">Recent Activity</h2>
            <p>See the latest verification and admin actions.</p>
          </div>
        </div>
      </main>
    </div>
  );
}