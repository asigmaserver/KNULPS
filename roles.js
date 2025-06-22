import DashboardSidebar from '../../components/DashboardSidebar';

export default function Roles() {
  return (
    <div className="flex">
      <DashboardSidebar />
      <main className="flex-1 p-10">
        <h1 className="text-2xl font-bold mb-4">Roles & Ranks</h1>
        <p className="mb-8">Configure automatic role assignment and custom role bindings.</p>
        <div className="bg-white rounded shadow p-6">
          <p className="text-gray-500">[Roles and rank mapping UI placeholder]</p>
        </div>
      </main>
    </div>
  );
}