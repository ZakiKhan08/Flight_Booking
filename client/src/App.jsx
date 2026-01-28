import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Service";
import Layout from "./Layout";
import Guarantee from "./Components/Guarantee.jsx";
import MoreServiceInfo from "./Components/MoreServiceInfo.jsx";
import Signup from "./Pages/Signup.jsx";
import Login from "./Pages/Login.jsx";
import AuthLayout from "./AuthLayout.jsx";
import Booking from "./Components/Booking.jsx";

function App() {
  return (
<>

      
      <Routes>
    <Route path="/" element={<Layout/>}>

        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/guarantee" element={<Guarantee />} />
        <Route path="/more-services" element={<MoreServiceInfo />} />

    </Route>

    <Route path="/" element={<AuthLayout />}>
    
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
    
    </Route>

    
      </Routes>
      


</>


  );
}

export default App;
