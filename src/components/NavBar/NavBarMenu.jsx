import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBarMenu = () => {
  return (
    <Menu>
      <MenuButton className="flex justify-start w-32 bg-white shadow-xl rounded-b-lg">Categories</MenuButton>
      <MenuList>
        <MenuItem className="flex flex-col list-none bg-white shadow-xl rounded-b-lg p-2">
          <li className="hover:underline decoration-pink-500">
            <Link to="/1">Link 1</Link>
          </li>
          <li className="hover:underline decoration-pink-500">
            <Link to="/2">Link 2</Link>
          </li>
          <li className="hover:underline decoration-pink-500">
            <Link to="/3">Link 3</Link>
          </li>
          <li className="hover:underline decoration-pink-500">
            <Link to="/4">Link 4</Link>
          </li>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
/*

export default NavBarMenu
const NavBarMenu = () => {
  return (
    <nav>
      <ul className="flex flex-row gap-2 pt-2">
        <li>
          <Link to="/" className="hover:underline decoration-pink-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="hover:underline decoration-pink-500">
            Products
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline decoration-pink-500">
            About us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline decoration-pink-500">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
*/

export default NavBarMenu;
