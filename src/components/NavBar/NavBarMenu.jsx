import { Link } from "react-router-dom";
const NavBarMenu = () => {
  return (
    <nav>
      <ul className="flex flex-row gap-2 pt-2">
        <li>
          <Link to="/" className="hover:underline decoration-pink-500">Home</Link>
        </li>
        <li>
          <Link to="/products" className="hover:underline decoration-pink-500">Products</Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline decoration-pink-500">About us</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline decoration-pink-500">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarMenu;
