import { faHome, faList, faCog, faGhost } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faHome, faList, faCog, faGhost);

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/", icon: faHome },
    { name: "Recipes", path: "/recipes", icon: faList },
    { name: "ReciBot", path: "/recibot", icon: faGhost },
    { name: "Settings", path: "/settings", icon: faCog },
  ];

  function closeSidebar() {
    setShowSidebar(false);
  }

  return (
    <>
      <div className="navbar container">
        <Link to="/" className="logo">
          R <span> eci </span>Bot
        </Link>

        <div className="nav-links">
          {links.map((link) => (
            <Link
              className={location.pathname === link.path ? "active" : ""}
              to={link.path}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Sidebar Toggle Button */}
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className={`sidebar-btn ${showSidebar ? "active" : ""}`}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      {/* Sidebar Component */}
      {showSidebar && <Sidebar close={closeSidebar} links={links} />}
    </>
  );
}


