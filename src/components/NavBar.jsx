import NavButton from "../components/NavButton";

import { AiFillApple } from "react-icons/ai";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between rounded-lg py-4 max-w-7xl mx-auto">
      <a className="cursor-pointer" href="#">
        <AiFillApple size={50} />
      </a>

      <div className="flex space-x-6 text-white">
        <NavButton text="Mac" link="#" />
        <NavButton text="Iphone" link="#" />
        <NavButton text="IPad" link="#" />
        <NavButton text="IWatch" link="#" />
        <NavButton text="Support" link="#" />
      </div>

      <div className="flex space-x-4">
        <a className="cursor-pointer" href="#">
          <FiSearch size={24} />
        </a>
        <div className="w-px h-6 bg-white"></div>
        <a className="cursor-pointer" href="#">
          <FiShoppingBag size={24} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;