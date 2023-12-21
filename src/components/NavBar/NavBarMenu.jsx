import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCategories } from "../../apis/fake-store";

const NavBarMenu = () => {
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };
    fetchCategories();
  }, []);

  return (
    <Menu className>
      <MenuButton className="flex w-32 bg-white shadow-xl rounded-b-lg">
        Categories
      </MenuButton>
      <MenuList className="w-auto bg-white shadow-xl rounded-b-lg p-2">
        <MenuItem
          className="flex flex-col"
          style={{ alignItems: "flex-start" }}
        >
          {categories &&
            categories.map((category) => (
              <li
                className="hover:underline decoration-pink-500"
                key={category}
              >
                <Link to={`/${category}`}>{category}</Link>
              </li>
            ))}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavBarMenu;
