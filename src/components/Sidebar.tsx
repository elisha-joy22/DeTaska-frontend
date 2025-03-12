import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-5">
      <h2 className="text-xl font-bold mb-5">DeTaska</h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="/" className="block p-2 rounded hover:bg-gray-700">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/tasks" className="block p-2 rounded hover:bg-gray-700">
              Tasks
            </Link>
          </li>
          <li>
            <Link to="/projects" className="block p-2 rounded hover:bg-gray-700">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
