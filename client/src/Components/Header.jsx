import { Link } from "react-router-dom";

 const Header=()=> {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center  bg-gray-800 py-4 px-6">
        <Link to="/" className="text-xl font-bold text-amber-50">MyWebsite</Link>

        <ul className="flex space-x-6 text-amber-50">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/sign-up">SignUp</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header