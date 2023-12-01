import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
  return (
    <header className="flex flex-row justify-between border-y-4">
      <div className="flex flex-row p-1 gap-1">
        <h1 className="text-5xl">Tía Rosita</h1>
      </div>
      <nav className="p-2">
        <section>
          <ul className="flex flex-row gap-2">
            <li>
              <a className="hover:underline" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Products
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                About us
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Contact
              </a>
            </li>
          </ul>
        </section>
        <section>
          <div className="flex justify-end ">
            <CartWidget />
          </div>
        </section>
      </nav>
    </header>
  );
};

export default NavBar;
