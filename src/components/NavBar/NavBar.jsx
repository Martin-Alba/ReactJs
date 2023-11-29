function NavBar() {
  return (
    <header className="flex flex-row justify-between">
      <div className="flex flex-row p-1 gap-1">
        <h1 className="text-4xl">Tía Rosita</h1>
        <img className="w-12" src="https://i.imgur.com/igU59U2.png" alt="brand-name" />
      </div>
      <nav className="p-2">
        <ul className="flex flex-row gap-2">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
