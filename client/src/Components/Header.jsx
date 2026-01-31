import { Link, useNavigate } from "react-router-dom";

 const Header=()=> {

   let LoggedIn =   localStorage.getItem("isLoggedIn") === "true";
let navigate = useNavigate()
   let handleLogout = () =>{
        localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('currentUser')
    navigate('/login')
   }

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center  bg-blue-400 py-4 px-6">
        <Link to="/" className="text-xl font-bold text-red-700">Eagle Flights</Link>

        <ul className="flex space-x-6 text-amber-50">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Bookings</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          {!LoggedIn &&(
           <>
            <li><Link to="/sign-up">SignUp</Link></li>
          <li><Link to="/login">Login</Link></li></>
          )}
          {LoggedIn &&(

            <button className="cursor-pointer" onClick={handleLogout}>LogOut</button>
          )}
        </ul>
      </nav>
    </header>
  
  );
}

export default Header