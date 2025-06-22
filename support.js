import DashboardSidebar from '../../components/DashboardSidebar';

export default function Support() {
  return (
    <div className="flex">
      <DashboardSidebar />
      <main className="flex-1 p-10">
        <h1 className="text-2xl font-bold mb-4">Support & Documentation</h1>
        <p className="mb-8">Find help, guides, and contact support.</p>
        <div className="bg-white rounded shadow p-6">
          <ul className="list-disc ml-6">
            <li><a href="#" className="text-blue-600">Getting Started Guide</a></li>
            <li><a href="#" className="text-blue-600">FAQ</a></li>
            <li><a href="#" className="text-blue-600">Contact Support</a></li>
          </ul>
        </div>
      </main>
    </div>
  );
}