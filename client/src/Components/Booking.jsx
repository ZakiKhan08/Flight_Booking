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

  const [errors, setErrors] = useState({});

  // 🔹 Load saved data
  useEffect(() => {
    const savedData = localStorage.getItem("bookingData");
    if (savedData) {
      setForm(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!form.from.trim()) {
      newErrors.from = "From location is required";
    }

    if (!form.to.trim()) {
      newErrors.to = "To location is required";
    }

    if (form.from && form.to && form.from === form.to) {
      newErrors.to = "From and To cannot be same";
    }

    if (!form.departure) {
      newErrors.departure = "Departure date is required";
    }

    if (form.return && form.departure && form.return < form.departure) {
      newErrors.return = "Return date cannot be before departure";
    }

    if (form.travellers < 1) {
      newErrors.travellers = "At least 1 traveller required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    localStorage.setItem("bookingData", JSON.stringify(form));
    alert("Booking Confirmed ✅");
  };

  const swapCities = () => {
    setForm({ ...form, from: form.to, to: form.from });
  };

  return (
    <div className="w-full bg-white shadow-md rounded-xl p-6">

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
          {errors.from && (
            <p className="text-red-500 text-xs">{errors.from}</p>
          )}
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
          {errors.to && (
            <p className="text-red-500 text-xs">{errors.to}</p>
          )}
        </div>

        {/* DATES */}
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
            {errors.departure && (
              <p className="text-red-500 text-xs">{errors.departure}</p>
            )}
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
            {errors.return && (
              <p className="text-red-500 text-xs">{errors.return}</p>
            )}
          </div>
        </div>

        {/* TRAVELLERS */}
        <div className="p-4">
          <p className="text-xs text-gray-500">Travellers & Class</p>
          <input
            type="number"
            min="1"
            max="10"
            name="travellers"
            value={form.travellers}
            onChange={handleChange}
            className="text-xl font-bold w-full outline-none"
          />
          {errors.travellers && (
            <p className="text-red-500 text-xs">{errors.travellers}</p>
          )}

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
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg"
      >
        Book
      </button>
    </div>
  );
}

export default Booking;