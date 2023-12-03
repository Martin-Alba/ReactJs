import CartWidget from "../CartWidget/CartWidget";

const NavBarUserCart = () => {
  return (
    <section className="flex flex-row justify-end items-center w-[300px] gap-16">
      <div className="">
        <CartWidget />
      </div>
      <div className="rounded-full p-[2px] bg-gradient-to-r from-pink-500 to-pink-200">
        <img
          src="https://i.imgur.com/k4JBUlN.jpeg"
          alt="foto-perfil"
          className="rounded-full w-12"
        />
      </div>
    </section>
  );
};

export default NavBarUserCart;
