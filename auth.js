import Navbar from '../components/Navbar';

export default function Auth() {
  return (
    <div>
      <Navbar />
      <main className="max-w-lg mx-auto mt-24 p-8 bg-white rounded shadow text-center">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <p className="mb-4">Authenticate with your Discord or Roblox account to access the dashboard.</p>
        <button className="w-full bg-blue-600 text-white py-3 rounded mb-4 font-semibold">Login with Discord</button>
        <button className="w-full bg-gray-800 text-white py-3 rounded font-semibold">Login with Roblox</button>
        <p className="mt-6 text-gray-500 text-sm">This is a placeholder. Add real OAuth authentication logic here.</p>
      </main>
    </div>
  );
}