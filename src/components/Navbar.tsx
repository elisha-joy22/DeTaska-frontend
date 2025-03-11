import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">DeTaska</Link>
        <div>
          <Link to="/dashboard" className="mx-4">Dashboard</Link>
          <Link to="/tasks" className="mx-4">Tasks</Link>
          <Link to="/login" className="mx-4">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
