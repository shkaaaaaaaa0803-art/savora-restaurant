import { useState } from "react";
import { Link } from "react-router-dom";
import { Leaf, ArrowLeft } from "lucide-react";

export default function Reserve() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col justify-between">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md px-8 py-4 shadow-sm flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-orange-600 font-bold text-xl tracking-wider">
          <Leaf /> SAVORA
        </Link>
        <Link to="/" className="flex items-center gap-1 text-stone-700 hover:text-orange-600 font-medium transition">
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </nav>

      {/* Reservation Form */}
      <div className="py-32 px-6 flex items-center justify-center flex-1">
        <div className="max-w-md w-full bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-stone-200">
          <h2 className="text-3xl font-serif font-bold text-center mb-2 text-stone-900">Book a Table</h2>
          <p className="text-stone-500 text-center mb-8 text-sm">Secure your spot for an unforgettable dining experience.</p>

          {submitted ? (
            <div className="bg-emerald-50 text-emerald-700 p-6 rounded-xl text-center font-medium border border-emerald-200">
              🎉 <strong className="block text-lg mb-1">Table Reserved Successfully!</strong> We look forward to seeing you.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">Your Name</label>
                <input type="text" required className="w-full border border-stone-300 rounded-xl p-3 outline-none focus:border-orange-500 transition" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">Date</label>
                <input type="date" required className="w-full border border-stone-300 rounded-xl p-3 outline-none focus:border-orange-500 transition" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">Number of Guests</label>
                <select className="w-full border border-stone-300 rounded-xl p-3 outline-none focus:border-orange-500 transition bg-white">
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>4 People</option>
                  <option>6+ People</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-orange-600 text-white py-3.5 rounded-xl font-medium hover:bg-orange-700 transition shadow-lg shadow-orange-600/20">
                Confirm Reservation
              </button>
            </form>
          )}
        </div>
      </div>

      <footer className="text-center py-6 bg-stone-950 text-stone-500 text-sm">
        &copy; 2026 Savora Restaurant. All rights reserved.
      </footer>
    </div>
  );
}