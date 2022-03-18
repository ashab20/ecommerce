import Image from "next/image";
import logo from '../../public/e-bazar.png'
import Menu from "./Menu";
import Link from "next/link";
import UserMenu from "./UserMenu";

const Narbar = () => {
  
  return (
    <header className="grid grid-cols-2  sm:grid-cols-[1fr_4fr_1fr] bg-[#f7f7f7] md:pl-4 md:pr-4 lg:pl-6 lg:pr-6">
      <div className="w-14 ml-5 mt-1">
        <Link href="/" passHref>
          <Image className="cursor-pointer" src={logo} alt="Logo"/>
        </Link>
      </div>
      {/* global menu */}
      <nav className="hidden sm:block">
        <Menu/>
      </nav>
      {/* user menu */}
        <UserMenu />      
    </header>
  );
};
export default Narbar;
