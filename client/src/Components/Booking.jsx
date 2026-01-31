import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { useState, useEffect } from "react";

function Booking() {
  const [form, setForm] = useState({
    from: "",
    to: "",
    departure: "",
    return: "",
    travellers: 1,
    travelClass: "Economy",
  });

  // 🔹 Load data from localStorage (optional but recommended)
  useEffect(() => {
    const savedData = localStorage.getItem("bookingData");
    if (savedData) {
      setForm(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ SAVE DATA HERE
  const handleSubmit = () => {
    localStorage.setItem("bookingData", JSON.stringify(form));
    alert("Booking Confirmed");
  };

  const swapCities = () => {
    setForm({ ...form, from: form.to, to: form.from });
  };

  return (
    <div className="w-full bg-white shadow-md rounded-xl p-6">
      {/* TRIP TYPE */}
      <div className="flex items-center gap-6 mb-4 text-sm">
        {/* <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="trip" />
          One Way
        </label>

        <label className="flex items-center gap-2 cursor-pointer font-semibold">
          <input type="radio" name="trip" defaultChecked />
          Round Trip
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="trip" />
          Multi City
        </label> */}

        <span className="ml-auto text-gray-600">
          Book International and Domestic Flights
        </span>
      </div>

      {/* SEARCH BAR */}
      <div className="grid grid-cols-5 border rounded-xl overflow-hidden">
        {/* FROM */}
        <div className="p-4 border-r">
          <p className="text-xs text-gray-500">From</p>
          <input
            name="from"
            value={form.from}
            onChange={handleChange}
            className="text-2xl font-bold w-full outline-none"
          />
          <p className="text-xs text-gray-400">City or Airport</p>
        </div>

        {/* SWAP */}
        <div className="flex items-center justify-center border-r">
          <div
            onClick={swapCities}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 cursor-pointer hover:bg-gray-200"
          >
            <HiOutlineSwitchHorizontal size={18} />
          </div>
        </div>

        {/* TO */}
        <div className="p-4 border-r">
          <p className="text-xs text-gray-500">To</p>
          <input
            name="to"
            value={form.to}
            onChange={handleChange}
            className="text-2xl font-bold w-full outline-none"
          />
          <p className="text-xs text-gray-400">City or Airport</p>
        </div>

        {/* DEPART & RETURN */}
        <div className="grid grid-cols-2 border-r">
          <div className="p-4 border-r">
            <p className="text-xs text-gray-500">Departure</p>
            <input
              type="date"
              name="departure"
              value={form.departure}
              onChange={handleChange}
              className="font-semibold outline-none w-full"
            />
          </div>

          <div className="p-4">
            <p className="text-xs text-gray-500">Return</p>
            <input
              type="date"
              name="return"
              value={form.return}
              onChange={handleChange}
              className="font-semibold outline-none w-full"
            />
          </div>
        </div>

        {/* TRAVELLERS */}
        <div className="p-4">
          <p className="text-xs text-gray-500">Travellers & Class</p>
          <input
            type="number"
            min="1"
            name="travellers"
            value={form.travellers}
            onChange={handleChange}
            className="text-xl font-bold w-full outline-none"
          />

          <select
            name="travelClass"
            value={form.travelClass}
            onChange={handleChange}
            className="text-xs text-gray-500 mt-1 outline-none w-full"
          >
            <option>Economy</option>
            <option>Premium Economy</option>
            <option>Business</option>
            <option>First Class</option>
          </select>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg cursor-pointer"
      >
        Book
      </button>
    </div>
  );
}

export default Booking;
