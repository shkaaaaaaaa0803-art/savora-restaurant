import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Leaf, Utensils, Calendar } from "lucide-react";
import heroImg from "./assets/hero.jpg";
import interiorImg from "./assets/interior.jpg";
import dish1 from "./assets/dish-1.jpg";
import dish2 from "./assets/dish-2.jpg";
import dish3 from "./assets/dish-3.jpg";
import MenuPage from "./Menu";
import ReservePage from "./Reserve";


function Home() {
  const bestDishes = [
    { name: "New York Style Cheesecake", price: "$9", img: dish1, desc: "Rich and creamy cheesecake with a graham crust" },
    { name: "Wild Mushroom Flatbread", price: "$18", img: dish2, desc: "Truffle oil, parmesan, and thyme" },
    { name: "Classic Veg Cheese Pizza", price: "$16", img: dish3, desc: "Loaded with melted mozzarella and fresh basil" },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      {}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md px-8 py-4 shadow-sm flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-orange-600 font-bold text-xl tracking-wider">
          <Leaf /> SAVORA
        </Link>
        <div className="flex gap-6 font-medium text-stone-700 items-center">
          <Link to="/" className="hover:text-orange-600 transition">Home</Link>
          <Link to="/menu" className="hover:text-orange-600 transition">Menu</Link>
          <Link to="/reserve" className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition shadow-md">
            Reserve Table
          </Link>
        </div>
      </nav>

      {}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-3xl text-white">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-wide drop-shadow-md">
            Fine Dining, Reimagined
          </h1>
          <p className="text-lg md:text-xl text-stone-200 mb-8 max-w-xl mx-auto drop-shadow">
            Experience culinary excellence with organic ingredients and world-class ambiance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/menu"
              className="bg-orange-600 text-white px-8 py-3.5 rounded-xl font-medium hover:bg-orange-700 transition flex items-center gap-2 shadow-lg"
            >
              <Utensils size={20} /> View Full Menu
            </Link>
            <Link
              to="/reserve"
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-3.5 rounded-xl font-medium hover:bg-white hover:text-stone-900 transition flex items-center gap-2 shadow-lg"
            >
              <Calendar size={20} /> Reserve a Table
            </Link>
          </div>
        </div>
      </section>

      {}
      <section className="py-24 px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Our Best Food & Specialties</h2>
          <p className="text-stone-600 max-w-xl mx-auto">Handcrafted with passion, using the freshest seasonal ingredients to delight your senses.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {bestDishes.map((dish, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-stone-200 flex flex-col justify-between hover:shadow-xl transition">
              <div className="h-56 overflow-hidden">
                <img src={dish.img} alt={dish.name} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold font-serif">{dish.name}</h3>
                    <span className="text-orange-600 font-bold text-lg">{dish.price}</span>
                  </div>
                  <p className="text-stone-500 text-sm mb-4">{dish.desc}</p>
                </div>
                <Link to="/menu" className="text-orange-600 font-semibold text-sm hover:underline flex items-center gap-1">
                  Explore in menu &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {}
      <section className="py-20 px-8 bg-stone-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6">An Unforgettable Ambiance</h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              Step into a world where modern elegance meets rich culinary tradition. Our space is designed to give you peace, comfort, and a world-class dining experience.
            </p>
            <Link to="/reserve" className="text-orange-600 font-semibold hover:underline">
              Book your experience &rarr;
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl h-[350px]">
            <img src={interiorImg} alt="Interior" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {}
      <footer className="text-center py-8 bg-stone-950 text-stone-500 text-sm">
        &copy; 2026 Savora Restaurant. All rights reserved.
      </footer>
    </div>
  );
}


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reserve" element={<ReservePage />} />
      </Routes>
    </BrowserRouter>
  );
}