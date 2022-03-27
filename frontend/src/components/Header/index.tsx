import Image from "next/image";
import logo from '../../../public/e-bazar.png'
import Menu from "./Menu";
import Link from "next/link";
import UserMenu from "./UserMenu";
import { useState } from "react";
import Search from "../Search";


const Narbar = () => {
  const [search, setSearch] = useState(false);
  
  return (
    <header className="header container">
      <div className="w-1/2 sm:w-1/2 xl:w-1/3  sm:p-0.5 p-1 overflow-hidden">
        <Link href="/" passHref>
          <a>
          <Image className="cursor-pointer p-3"  src={logo} alt="Logo" height="70rem"/>
          </a>
        </Link>
      </div>
      {/* global menu */}
      <nav className="hidden sm:block">
        <Menu/>
      </nav>
        { search && <Search  /> }
      {/* user menu */}
        <UserMenu HandleSearch={() => setSearch(!search)} />      
    </header>
  );
};
export default Narbar;
