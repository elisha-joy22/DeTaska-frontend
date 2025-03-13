const RecentTasks = () => {
  const tasks = [
    { id: 1, title: "Fix Navbar Bug", status: "In Progress" },
    { id: 2, title: "Deploy API", status: "Completed" },
    { id: 3, title: "Design Landing Page", status: "Pending" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-[1.02]">
      <h2 className="text-gray-800 text-xl font-semibold mb-4">Recent Tasks</h2>
      <table className="w-full">
        <thead>
          <tr className="text-left border-b text-gray-600">
            <th className="py-3">Task</th>
            <th className="py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-b hover:bg-gray-100">
              <td className="py-3">{task.title}</td>
              <td className="py-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    task.status === "Completed"
                      ? "bg-green-200 text-green-800"
                      : task.status === "In Progress"
                      ? "bg-yellow-200 text-yellow-800"
                      : "bg-red-200 text-red-800"
                  }`}
                >
                  {task.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default RecentTasks;
