import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <input type="text" className="search-input"
          placeholder="Search items here" />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons one" />
        </a>

        <a href="#">
          <AiOutlineShoppingCart className="nav-icons two" />
        </a>

        <a href="#">
          <AiOutlineUserAdd className="nav-icons three" />
        </a>
      </div>
    </nav>

  );
}

export default Nav;