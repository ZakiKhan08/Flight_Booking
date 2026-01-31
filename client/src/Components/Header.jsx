import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const LoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    navigate("/login");
    setOpen(false);
  };

  return (
    <header className="bg-blue-400 shadow-md">
      <nav className="max-w-7xl mx-auto py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold text-red-700">
          Eagle Flights
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center space-x-6 text-amber-50">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Bookings</Link></li>
          <li><Link to="/contact">Contact</Link></li>

          {!LoggedIn && (
            <>
              <li><Link to="/sign-up">SignUp</Link></li>
              <li><Link to="/login">Login</Link></li>
            </>
          )}

          {LoggedIn && (
            <button onClick={handleLogout} className="cursor-pointer">
              LogOut
            </button>
          )}
        </ul>

        {/* MOBILE MENU ICON */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </div>
      </nav>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-blue-500 px-6 py-4">
          <ul className="flex flex-col space-y-4 text-amber-50">
            <li><Link onClick={() => setOpen(false)} to="/">Home</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/about">About</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/services">Bookings</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/contact">Contact</Link></li>

            {!LoggedIn && (
              <>
                <li><Link onClick={() => setOpen(false)} to="/sign-up">SignUp</Link></li>
                <li><Link onClick={() => setOpen(false)} to="/login">Login</Link></li>
              </>
            )}

            {LoggedIn && (
              <button
                onClick={handleLogout}
                className="text-left cursor-pointer"
              >
                LogOut
              </button>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;