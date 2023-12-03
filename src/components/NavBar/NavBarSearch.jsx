import { IconSearch } from "@tabler/icons-react";

const NavBarSearch = () => {
  return (
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
  );
};

export default NavBarSearch;
