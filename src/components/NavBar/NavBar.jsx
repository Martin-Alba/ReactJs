import NavBarUserCart from "./NavBarUserCart";
import NavBarMenu from "../NavBar/NavBarMenu";
import NavBarSearch from "./NavBarSearch";
import NavBarBrand from "./NavBarBrand";

const NavBar = () => {
  return (
    <header className="flex flex-col border-y-4">
      <section className="flex flex-row justify-between items-center mt-2">
        <NavBarBrand />
        <NavBarSearch />
        <NavBarUserCart />
      </section>
      <NavBarMenu />
    </header>
  );
};

export default NavBar;
