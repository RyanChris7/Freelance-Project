import LogoBlack from "../../Assets/images/Logo.svg";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

function index() {
  return (
    <>
      <div className="navigation-bar">
        <div>
          <img src={LogoBlack} alt="Logo" className="nav-logo" />
        </div>
        <div>
          <ul className="nav-menu">
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.url}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="horizontal-line"></div>
      </div>
    </>
  );
}

export default index;
