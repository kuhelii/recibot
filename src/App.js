import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Recibot from "./pages/Recibot";
import Settings from "./pages/Settings";
import Mealinfo from "./components/Mealinfo";
import SearchResults from "./pages/SearchResults"; // ✅ New page for search results

function App() {
  return (
    <>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Recipes" element={<Recipes />} /> {/* ✅ Recipes Page */}
          <Route path="/search" element={<SearchResults />} /> {/* ✅ Search Results Page */}
          <Route path="/meal/:mealid" element={<Mealinfo />} /> {/* ✅ Meal Info Page */}
          <Route path="/Recibot" element={<Recibot />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;



