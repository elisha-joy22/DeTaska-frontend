import DashboardWidgets from "../components/DashboardWidgets";
import RecentTasks from "../components/RecentTasks";
import QuickActions from "../components/QuickActions";

const Dashboard = () => {
  return (
    <div className="p-4">
      <DashboardWidgets />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <RecentTasks />
        <QuickActions />
      </div>
    </div>
  );
};
export default Dashboard;

