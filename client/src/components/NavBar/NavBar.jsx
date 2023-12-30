import "./NavBar.scss";
import { NavLink } from "react-router-dom";

// Assets
import InStock_Logo from "../../assets/Logo/InStock-Logo.svg";

function NavBar() {
  return (
    <div className="NavBar__Container">
      <NavLink to={"/"} className="NavBar__LogoLink">
        <img src={InStock_Logo} className="NavBar__LogoImg" />
      </NavLink>

      <div className="NavBar__Container--tab">
        <NavLink to={"/warehouse"} className="NavBar__ButtonLink">
          <button className="NavBar__Button">Warehouse</button>
        </NavLink>

        <NavLink to={"/inventory"} className="NavBar__ButtonLink">
          <button className="NavBar__Button">Inventory</button>
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
