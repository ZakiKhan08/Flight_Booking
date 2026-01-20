export default function Hero() {
  return (
    <section className="relative bg-blue-200 from-white to-gray-100 overflow-hidden">
      <div className="container mx-auto px-36 py-20 grid md:grid-cols-2 items-center gap-10">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-5xl font-bold leading-tight">
            <span className="text-blue-600">Book</span> Your <br />
            Dream <span className="text-blue-600">Flights</span> <br />
            Now!
          </h1>

          <p className="text-gray-500 mt-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur. Felis tristique pretium leo
            nisi at risus ac enim.
          </p>

          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow">
            Book Now
          </button>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative">

    

          {/* Airplane Image */}
          <img
            src="./plane.png"
            alt="Airplane"
            className="w-full max-w-xlg relative z-10"
          />
         
        </div>
      </div>
    </section>
  );
}
