import CartWidget from "../CartWidget/CartWidget";
import { IconSearch } from "@tabler/icons-react";
const NavBar = () => {
  return (
    <header className="flex flex-col border-y-4">
      <section className="flex flex-row justify-between items-center mt-2">
        <div className="text-5xl font-bold w-[300px]">
          Tía <span className="text-pink-500">Rosita</span>
        </div>
        <section className="w-[300px]">
          <form action="" className="flex flex-row bg-slate-200 rounded-md">
            <div className="flex items-center">
              <IconSearch size={18} className="mr-1 opacity-25 " />
            </div>
            <div>
              <input
                type="text"
                placeholder="Search"
                className="bg-slate-200 rounded-md outline-none h-[44px]"
              />
            </div>
          </form>
        </section>
        <section className="flex flex-row justify-end items-center w-[300px] gap-16">
          <div className="">
            <CartWidget />
          </div>
          <div>
            <img
              src="https://i.imgur.com/k4JBUlN.jpeg"
              alt="foto-perfil"
              className="rounded-full w-12"
            />
          </div>
        </section>
      </section>
      <section>
        <nav>
          <ul className="flex flex-row gap-2 pt-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default NavBar;
