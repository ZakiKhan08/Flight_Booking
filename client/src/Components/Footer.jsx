import React from 'react';
import { Link } from "react-router-dom";
import { FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
      const linkStyle = "hover:text-blue-600 transition";

  return (

    <footer className="bg-gray-300 border-t ">
      <div className="container mx-auto px-10 pl-30 py-12 grid md:grid-cols-3 gap-10">

        {/* COLUMN 1 */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-600">
            <li><Link to="/about" className={linkStyle}>Customer Support</Link></li>
            <li><Link to="/guarantee" className={linkStyle}>Service Guarantee</Link></li>
            <li><Link to="/more-services" className={linkStyle}>More Service Info</Link></li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6 text-gray-600">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"
              className="p-2 bg-amber-50 rounded-full hover:bg-blue-500 hover:text-white cursor-pointer">
              <FaFacebookF />
            </a>

            <a href="https://twitter.com" target="_blank" rel="noreferrer"
              className="p-2 bg-amber-50 rounded-full hover:bg-black hover:text-white cursor-pointer">
              <FaXTwitter />
            </a>

            <a href="https://www.youtube.com/results?search_query=flight" target="_blank" rel="noreferrer"
              className="p-2 bg-amber-50 rounded-full hover:bg-red-500 hover:text-white cursor-pointer">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h3 className="font-semibold text-lg mb-4">About</h3>
          <ul className="space-y-3 text-gray-600">
            <li><Link to="/about" className={linkStyle}>About Trip.com</Link></li>
            <li><Link to="/guarantee" className={linkStyle}>News</Link></li>
            <li><Link to="/more-services" className={linkStyle}>Careers</Link></li>
            <li><Link to="/about" className={linkStyle}>Terms & Conditions</Link></li>
            <li><Link to="/guarantee" className={linkStyle}>Privacy Statement</Link></li>
            <li><Link to="/about" className={linkStyle}>Accessibility Statement</Link></li>
            <li><Link to="/more-services" className={linkStyle}>About Trip.com Group</Link></li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Other Services</h3>
          <ul className="space-y-3 text-gray-600">
            <li><Link to="/guarantee" className={linkStyle}>Investor Relations</Link></li>
            <li><Link to="/about" className={linkStyle}>Trip.com Rewards</Link></li>
            <li><Link to="/more-services" className={linkStyle}>Affiliate Programme</Link></li>
            <li><Link to="/guarantee" className={linkStyle}>List Your Property</Link></li>
            <li><Link to="/more-services" className={linkStyle}>All Hotels</Link></li>
            <li><Link to="/about" className={linkStyle}>Security</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t text-center py-4 text-gray-500 text-sm">
        © 2026 EagleFlights. All rights reserved.
      </div>
    </footer>
  
  )
}

export default Footer