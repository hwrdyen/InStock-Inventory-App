import "./Home.scss";
import { NavLink } from "react-router-dom";

// Components
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

// Assets
import HomeIcon from "../assets/Icons/HomeIcon.gif";
import TrendUpIcon from "../assets/Icons/trending_up_black_24dp.svg";
import ManageAccountIcon from "../assets/Icons/manage_accounts_black_24dp.svg";
import TravelExploreIcon from "../assets/Icons/travel_explore_black_24dp.svg";
import RuleIcon from "../assets/Icons/rule_black_24dp.svg";
import SettingsIcon from "../assets/Icons/settings_black_24dp.svg";
import WarehouseIcon from "../assets/Icons/warehouse_black_24dp.svg";

function Home() {
  return (
    <>
      <NavBar />
      <div className="Home__Container">
        <div className="Home__Container--introsection">
          <div className="Home__Container--titlecontainer">
            <div className="Home__Container--title">
              Inventory management software for growing businesses.
            </div>
            <div className="Home__Container--description">
              Increase your sales and keep track of every unit with our powerful
              stock management, order fulfillment, and inventory control
              software.
            </div>
            <div className="Home__Container--buttoncontainer">
              <NavLink
                to={"/warehouse"}
                className="Home__Container--buttonlink"
              >
                <button className="Home__Container--button">WAREHOUSE</button>
              </NavLink>
              <NavLink
                to={"/inventory"}
                className="Home__Container--buttonlink"
              >
                <button className="Home__Container--button">INVENTORY</button>
              </NavLink>
            </div>
          </div>
          <img
            src={HomeIcon}
            alt="Home Icon"
            className="Home__Container--icon"
          />
        </div>

        <div className="Home__Container--functionsection">
          {/* Increase Sales */}
          <div className="Home__Container--functionblock">
            <img
              className="Home__Container--functionicon"
              src={TrendUpIcon}
              alt="TrendUp Icon"
            />
            <div className="Home__Container--functiontitle">Increase Sales</div>
            <div className="Home__Container--functiondescription">
              Expand your business online with our multi-channel inventory
              management system. Set up and integrate your Amazon, eBay, Etsy,
              or Shopify account, and start selling your merchandise.
            </div>
          </div>

          {/* Manage Orders */}
          <div className="Home__Container--functionblock">
            <img
              className="Home__Container--functionicon"
              src={ManageAccountIcon}
              alt="ManageAccount Icon"
            />
            <div className="Home__Container--functiontitle">Manage Orders</div>
            <div className="Home__Container--functiondescription">
              Manage your offline and online orders with our efficient order
              management system. Also, you can create purchase orders,
              backorders and drop shipments, all in a single inventory
              management application.
            </div>
          </div>

          {/* End-to-End Tracking */}
          <div className="Home__Container--functionblock">
            <img
              className="Home__Container--functionicon"
              src={TravelExploreIcon}
              alt="TravelExplore Icon"
            />
            <div className="Home__Container--functiontitle">
              End-to-End Tracking
            </div>
            <div className="Home__Container--functiondescription">
              Track every item or batch in your inventory with serial number and
              batch tracking feature. This way, you can either always keep a
              track on the movement of the items or have better control over the
              expiry of each batch.
            </div>
          </div>

          {/* Shipping Integrations */}
          <div className="Home__Container--functionblock">
            <img
              className="Home__Container--functionicon"
              src={RuleIcon}
              alt="Rule Icon"
            />
            <div className="Home__Container--functiontitle">
              Shipping Integrations
            </div>
            <div className="Home__Container--functiondescription">
              Get real-time shipping rates and in-transit details of major
              shipping carriers and choose a shipping partner for your business,
              wisely. A much-needed feature for a complete inventory management
              system.
            </div>
          </div>

          {/* Accounting and CRM Integrations */}
          <div className="Home__Container--functionblock">
            <img
              className="Home__Container--functionicon"
              src={SettingsIcon}
              alt="Settings Icon"
            />
            <div className="Home__Container--functiontitle">
              Accounting and CRM Integrations
            </div>
            <div className="Home__Container--functiondescription">
              Our seamless integration with Zoho CRM and Zoho Books
              automatically syncs all your contacts, orders and help you manage
              financial data without breaking a sweat.
            </div>
          </div>

          {/* Warehouse Management */}
          <div className="Home__Container--functionblock">
            <img
              className="Home__Container--functionicon"
              src={WarehouseIcon}
              alt="Warehouse Icon"
            />
            <div className="Home__Container--functiontitle">
              Warehouse Management
            </div>
            <div className="Home__Container--functiondescription">
              Check stock level, manage inter-warehouse transfer, and generate
              reports for specific warehouses within seconds. Warehouse
              inventory management, at your fingertips.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
