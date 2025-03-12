import { FaTasks, FaCheckCircle } from "react-icons/fa";

const DashboardWidgets = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
        <FaTasks className="text-blue-500 text-3xl mr-4" />
        <div>
          <h2 className="text-gray-700 text-xl font-bold">Total Tasks</h2>
          <p className="text-gray-500 text-lg">20</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
        <FaCheckCircle className="text-green-500 text-3xl mr-4" />
        <div>
          <h2 className="text-gray-700 text-xl font-bold">Completed Tasks</h2>
          <p className="text-gray-500 text-lg">12</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardWidgets;
