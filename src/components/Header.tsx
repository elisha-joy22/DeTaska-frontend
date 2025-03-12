const Header = () => {
    return (
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <span className="text-gray-700">Hello, User</span>
          <button className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
        </div>
      </header>
    );
  };
  
  export default Header;
  