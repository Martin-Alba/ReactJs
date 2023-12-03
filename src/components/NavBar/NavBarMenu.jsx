const NavBarMenu = () => {
  return (
    <nav>
      <ul className="flex flex-row gap-2 pt-2">
        <li>
          <a href="#" className="hover:underline decoration-pink-500">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline decoration-pink-500">
            Products
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline decoration-pink-500">
            About us
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline decoration-pink-500">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarMenu;
