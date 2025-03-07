import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar({ links, close }) {
  const location = useLocation();

  return (
    <div className="sidebar show">
      <button className="close-btn" onClick={close}>X</button>
      {links.map((link) => (
        <Link 
          to={link.path} 
          className={location.pathname === link.path ? "sidebar-link active" : "sidebar-link"}  
          key={link.name}
          onClick={close} // Close sidebar on link click
        >
          <FontAwesomeIcon icon={link.icon} />
          {link.name}
        </Link>
      ))}
    </div>
  );
}
