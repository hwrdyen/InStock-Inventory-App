import { NavLink } from "react-router-dom";

// Assets
import InStock_Logo from "../../assets/Logo/InStock-Logo.svg";

function NavBar() {
  return (
    <>
      <div>
        <NavLink to={"/"}>
          <img src={InStock_Logo} />
        </NavLink>

        <NavLink to={"/warehouse"}>
          <div>Warehouse</div>
        </NavLink>

        <NavLink to={"/inventory"}>
          <div>Inventory</div>
        </NavLink>
      </div>
    </>
  );
}

export default NavBar;
