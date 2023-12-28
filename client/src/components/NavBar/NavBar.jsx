import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div>
        <NavLink to={"/"}>
          <div>InStock</div>
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
