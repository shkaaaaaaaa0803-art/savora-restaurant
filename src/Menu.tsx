import { Link } from "react-router-dom";
import { Leaf, ArrowLeft, Utensils } from "lucide-react";

// Local Assets Imports
import dish3 from "./assets/dish-3.jpg";
import dish2 from "./assets/dish-2.jpg"; 
import veg3 from "./assets/veg-3.jpg";
import veg4 from "./assets/veg-4.jpg";
import veg5 from "./assets/veg-5.jpg";
import veg6 from "./assets/veg-6.jpg";
import veg7 from "./assets/veg-7.jpg";
import veg8 from "./assets/veg-8.jpg";
import veg9 from "./assets/veg-9.jpg";
import veg10 from "./assets/veg-10.jpg";

import nonveg1 from "./assets/nonveg-1.jpg";
import nonveg2 from "./assets/nonveg-2.jpg";
import nonveg3 from "./assets/nonveg-3.jpg";
import nonveg4 from "./assets/nonveg-4.jpg";
import nonveg5 from "./assets/nonveg-5.jpg";
import nonveg6 from "./assets/nonveg-6.jpg";
import nonveg7 from "./assets/nonveg-7.jpg";
import nonveg8 from "./assets/nonveg-8.jpg";

import bev1 from "./assets/bev-1.jpg";
import bev2 from "./assets/bev-2.jpg";
import bev3 from "./assets/bev-3.jpg";
import bev4 from "./assets/bev-4.jpg";
import bev5 from "./assets/bev-5.jpg";
import bev6 from "./assets/bev-6.jpg";
import bev7 from "./assets/bev-7.jpg";
import bev8 from "./assets/bev-8.jpg";
import bev9 from "./assets/bev-9.jpg";
import bev10 from "./assets/bev-10.jpg";

import des2 from "./assets/des-2.jpg";
import des3 from "./assets/des-3.jpg";
import des4 from "./assets/des-4.jpg";
import des5 from "./assets/des-5.jpg";
import des6 from "./assets/des-6.jpg";
import des7 from "./assets/des-7.jpg";
import des8 from "./assets/des-8.jpg";
import des9 from "./assets/des-9.jpg";
import des10 from "./assets/des-10.jpg";

export default function Menu() {
  const vegDishes = [
    { name: "Classic Veg Cheese Pizza", price: "$16", desc: "Loaded with melted mozzarella and fresh basil", img: dish3 },
    { name: "Wild Mushroom Flatbread", price: "$18", desc: "Truffle oil, parmesan, and thyme", img: dish2 }, // veg-2 replaced with dish3
    { name: "Creamy Paneer Tikka", price: "$15", desc: "Marinated cottage cheese grilled to perfection", img: veg3 },
    { name: "Truffle Cream Gnocchi", price: "$20", desc: "Handmade potato gnocchi with wild mushrooms", img: veg4 },
    { name: "Crispy Brussels Sprouts", price: "$11", desc: "Tossed in a sweet chili glaze and roasted peanuts", img: veg5 },
    { name: "Roasted Garlic Hummus", price: "$10", desc: "Served with warm stone-baked pita and olive oil", img: veg6 },
    { name: "Eggplant Parmesan Stack", price: "$16", desc: "Layered with marinara, mozzarella, and fresh basil", img: veg7 },
    { name: "Butternut Squash Risotto", price: "$19", desc: "Arborio rice, roasted squash, and sage butter", img: veg8 },
    { name: "Spicy Tofu Lettuce Wraps", price: "$13", desc: "Crispy tofu, water chestnuts, and peanut sauce", img: veg9 },
    { name: "Margherita Flatbread", price: "$16", desc: "San Marzano tomatoes, fresh mozzarella, and basil leaves", img: veg10 },
  ];

  const nonVegDishes = [
    { name: "Herb-Crusted Grilled Salmon", price: "$24", desc: "Served with lemon-herb butter and asparagus", img: nonveg1 },
    { name: "Slow-Braised Lamb Shank", price: "$28", desc: "Tender lamb served over creamy mashed potatoes", img: nonveg2 },
    { name: "Classic Truffle Burger", price: "$18", desc: "Wagyu beef patty, sharp cheddar, and truffle aioli", img: nonveg3 },
    { name: "Pan-Seared Duck Breast", price: "$26", desc: "Served with a sweet cherry reduction sauce", img: nonveg4 },
    { name: "Garlic Butter Prawns", price: "$22", desc: "Sautéed jumbo prawns in white wine and garlic sauce", img: nonveg5 },
    { name: "Crispy Skin Pork Belly", price: "$21", desc: "Served with apple puree and micro-greens", img: nonveg6 },
    { name: "Lemon Rosemary Chicken", price: "$19", desc: "Juicy roasted chicken breast with seasonal vegetables", img: nonveg7 },
    { name: "Smoky BBQ Beef Ribs", price: "$27", desc: "Slow-smoked ribs brushed with house BBQ sauce", img: nonveg8 },
    { name: "Spicy Garlic Shrimp Pasta", price: "$23", desc: "Linguine tossed with shrimp, chili flakes, and parsley", img: nonveg1 },
    { name: "Steak Frites", price: "$29", desc: "Prime flank steak served with hand-cut fries and chimichurri", img: nonveg2 },
  ];

  const beverages = [
    { name: "Artisanal Mint Lemonade", price: "$6", desc: "Fresh lemons, crushed mint, and sparkling water", img: bev1 },
    { name: "Berry Hibiscus Iced Tea", price: "$7", desc: "Brewed hibiscus tea infused with mixed berries", img: bev2 },
    { name: "Classic Espresso", price: "$4", desc: "Rich, bold, and freshly extracted single shot", img: bev3 },
    { name: "Vanilla Bean Cold Brew", price: "$6", desc: "Slow-steeped cold brew with a hint of vanilla cream", img: bev4 },
    { name: "Matcha Green Tea Latte", price: "$7", desc: "Ceremonial grade matcha with steamed oat milk", img: bev5 },
    { name: "Tropical Passion Punch", price: "$8", desc: "Passionfruit, orange juice, and a splash of ginger ale", img: bev6 },
    { name: "Spiced Apple Cider", price: "$6", desc: "Warm pressed apple juice with cinnamon and cloves", img: bev7 },
    { name: "Cucumber Basil Cooler", price: "$7", desc: "Refreshing cucumber juice, fresh basil, and lime", img: bev8 },
    { name: "Hot Chocolate Supreme", price: "$6", desc: "Rich dark chocolate topped with whipped cream", img: bev9 },
    { name: "Sparkling Mineral Water", price: "$5", desc: "Chilled premium sparkling water with a twist of lime", img: bev10 },
  ];

  const desserts = [
    { name: "New York Style Cheesecake", price: "$9", desc: "Rich and creamy cheesecake with a graham crust", img: des2 },
    { name: "Chocolate Lava Cake", price: "$12", desc: "Warm gooey chocolate cake with a melting center", img: des3 },
    { name: "Classic Tiramisu", price: "$10", desc: "Ladyfingers dipped in espresso, layered with mascarpone", img: des4 },
    { name: "Mango Passionfruit Panna Cotta", price: "$11", desc: "Silky Italian cream dessert with tropical fruit coulis", img: des5 },
    { name: "Warm Apple Crumble", price: "$10", desc: "Baked apples with an oat crisp topping and vanilla ice cream", img: des6 },
    { name: "Matcha Crepe Cake", price: "$12", desc: "Delicate layered crepes with green tea cream filling", img: des7 },
    { name: "Rich Fudge Brownie Sundae", price: "$9", desc: "Warm brownie topped with hot fudge and vanilla bean gelato", img: des8 },
    { name: "Lemon Meringue Tart", price: "$10", desc: "Tangy lemon curd in a buttery crust with toasted meringue", img: des9 },
    { name: "Salted Caramel Cheesecake", price: "$11", desc: "Decadent cheesecake drizzled with house caramel sauce", img: des10 },
    { name: "Affogato al Caffè", price: "$8", desc: "A scoop of vanilla gelato drowned in a shot of hot espresso", img: des2 },
  ];

  return (
    <div className="min-h-screen bg-stone-900 text-white">
      {}
      <nav className="fixed top-0 left-0 w-full z-50 bg-stone-950/80 backdrop-blur-md px-8 py-4 shadow-sm flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-orange-500 font-bold text-xl tracking-wider">
          <Leaf /> SAVORA
        </Link>
        <div className="flex gap-4 items-center">
          <Link to="/" className="flex items-center gap-1 text-stone-300 hover:text-white transition">
            <ArrowLeft size={18} /> Back to Home
          </Link>
          <Link to="/reserve" className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition">
            Reserve Table
          </Link>
        </div>
      </nav>

      {}
      <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif mb-4 flex items-center justify-center gap-3">
            <Utensils className="text-orange-500" /> Our Complete Menu
          </h1>
          <p className="text-stone-400 text-lg">Explore our rich selection of vegetarian, non-vegetarian, beverages, and desserts.</p>
        </div>

        {}
        <section className="mb-20">
          <h2 className="text-3xl font-serif text-orange-400 border-b border-stone-800 pb-3 mb-8">🌱 Vegetarian Specials</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {vegDishes.map((item, index) => (
              <div key={index} className="flex gap-4 items-center bg-stone-800/40 p-4 rounded-xl border border-stone-800/80">
                <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded-lg flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <span className="text-orange-500 font-bold">{item.price}</span>
                  </div>
                  <p className="text-xs text-stone-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {}
        <section className="mb-20">
          <h2 className="text-3xl font-serif text-orange-400 border-b border-stone-800 pb-3 mb-8">🍖 Non-Vegetarian Specials</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {nonVegDishes.map((item, index) => (
              <div key={index} className="flex gap-4 items-center bg-stone-800/40 p-4 rounded-xl border border-stone-800/80">
                <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded-lg flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <span className="text-orange-500 font-bold">{item.price}</span>
                  </div>
                  <p className="text-xs text-stone-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {}
        <section className="mb-20">
          <h2 className="text-3xl font-serif text-orange-400 border-b border-stone-800 pb-3 mb-8">🍹 Beverages & Drinks</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {beverages.map((item, index) => (
              <div key={index} className="flex gap-4 items-center bg-stone-800/40 p-4 rounded-xl border border-stone-800/80">
                <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded-lg flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <span className="text-orange-500 font-bold">{item.price}</span>
                  </div>
                  <p className="text-xs text-stone-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {}
        <section>
          <h2 className="text-3xl font-serif text-orange-400 border-b border-stone-800 pb-3 mb-8">🍰 Sweet Desserts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {desserts.map((item, index) => (
              <div key={index} className="flex gap-4 items-center bg-stone-800/40 p-4 rounded-xl border border-stone-800/80">
                <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded-lg flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <span className="text-orange-500 font-bold">{item.price}</span>
                  </div>
                  <p className="text-xs text-stone-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {}
      <footer className="text-center py-8 bg-stone-950 text-stone-500 text-sm border-t border-stone-800">
        &copy; 2026 Savora Restaurant. All rights reserved.
      </footer>
    </div>
  );
}