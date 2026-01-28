import { Link } from "react-router-dom";




export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-cover bg-center from-white to-gray-100 overflow-hidden ">

<div style={{ width: '100%', height: '700px', position: 'relative', backgroundImage: "url('/Eagle_Plane4.png')" }}>


      <div className="container mx-auto px-36 py-20 grid md:grid-cols-2 items-center gap-10">

        {/* LEFT CONTENT */}
        <div className="mt-57">
          <h1 className="text-5xl font-bold leading-tight">
            <span className="text-blue-600">Book</span> Your <br />
            <span className="text-red-700">Eagle</span> <span className="text-blue-600">Flights</span> <br />
            Now!
          </h1>

          <p className="text-gray-500 mt-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur. Felis tristique pretium leo
            nisi at risus ac enim.
          </p>

          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow">
            <Link to="/booking">Book Now</Link>
            
          </button>
        </div>

        {/* RIGHT CONTENT */}
        {/* <div className="relative">

    

          Airplane Image
          <img
            src="./plane.png"
            alt="Airplane"
            className="w-full max-w-xlg relative z-10"
          />
         
        </div> */}
      </div>
      </div>
    </section>
  );
}
