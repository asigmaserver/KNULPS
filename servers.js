import DashboardSidebar from '../../components/DashboardSidebar';

export default function Servers() {
  return (
    <div className="flex">
      <DashboardSidebar />
      <main className="flex-1 p-10">
        <h1 className="text-2xl font-bold mb-4">Servers</h1>
        <p className="mb-8">List and manage your connected servers here.</p>
        <div className="bg-white rounded shadow p-6">
          <p className="text-gray-500">[Server list placeholder]</p>
        </div>
      </main>
    </div>
  );
}