import DashboardSidebar from '../../components/DashboardSidebar';

export default function Verification() {
  return (
    <div className="flex">
      <DashboardSidebar />
      <main className="flex-1 p-10">
        <h1 className="text-2xl font-bold mb-4">Verification Settings</h1>
        <p className="mb-8">Adjust verification flows, security, and requirements.</p>
        <div className="bg-white rounded shadow p-6">
          <p className="text-gray-500">[Verification settings UI placeholder]</p>
        </div>
      </main>
    </div>
  );
}