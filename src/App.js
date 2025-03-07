import{
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom"

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Recibot from "./pages/Recibot";
import Settings from "./pages/Settings";

function App() {
  return (
  <Router>
  <Navbar/>
   <div className="container main"> 
<Routes>
  < Route path="/" element={<Home/>}/>
  < Route path="/Recipes" element={<Recipes/>}/>
  < Route path="/Recibot" element={<Recibot/>}/>
  < Route path="/Settings" element={<Settings/>}/>
</Routes>
   </div>
   <Footer/>
  </Router>


  );
}

export default App;
