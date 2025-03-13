import { useNavigate } from "react-router-dom";

const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transition hover:shadow-xl">
      <h2 className="text-gray-800 text-xl font-semibold mb-4">Quick Actions</h2>
      <button
        className="bg-blue-500 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all"
        onClick={() => navigate("/tasks/create")}
      >
        + Create New Task
      </button>
    </div>
  );
};

export default QuickActions;
