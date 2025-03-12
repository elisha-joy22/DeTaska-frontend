const RecentTasks = () => {
    const tasks = [
      { id: 1, title: "Fix Navbar Bug", status: "In Progress" },
      { id: 2, title: "Deploy API", status: "Completed" },
      { id: 3, title: "Design Landing Page", status: "Pending" },
    ];
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-md mt-4">
        <h2 className="text-gray-700 text-xl font-bold mb-4">Recent Tasks</h2>
        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2">Task</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className="border-b">
                <td className="py-2">{task.title}</td>
                <td className="py-2">{task.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default RecentTasks;
  