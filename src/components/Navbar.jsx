import { NavLink } from "react-router-dom";
import "../styles/Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-div">
        <div className="logo">Expense Tracker</div>

        <div className="nav-links">
          <NavLink to="/" end>
            Dashboard
          </NavLink>
          <NavLink to="/reports">Reports</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
