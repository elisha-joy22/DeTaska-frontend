import { useNavigate } from "react-router-dom";

const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-4">
      <h2 className="text-gray-700 text-xl font-bold mb-4">Quick Actions</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        onClick={() => navigate("/tasks/create")}
      >
        + Create New Task
      </button>
    </div>
  );
};

export default QuickActions;
