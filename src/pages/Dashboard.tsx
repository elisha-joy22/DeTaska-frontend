import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-5">
        <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
      </main>
    </div>
  );
};

export default Dashboard;
