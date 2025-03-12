import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
