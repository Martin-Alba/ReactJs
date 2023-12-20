import { Link } from "react-router-dom";

const NavBarBrand = () => {
  return (
    <Link to="/">
      <div className="text-5xl font-bold w-[300px]">
        Tía <span className="text-pink-500">Rosita</span>
      </div>
    </Link>
  );
};

export default NavBarBrand;
