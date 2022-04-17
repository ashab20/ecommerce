import Link from "next/link";
import {
  CgFacebook,
  CgInstagram,
  CgMenuGridR,
  CgTwitter,
} from "react-icons/cg";
import { FaPinterestSquare } from "react-icons/fa";

const MobileMenu = () => {
  return (
    <div className="absolute bg-[#f7f7f7] right-0 top-0 w-2/3 h-[100vh] text-gray-600 font-Poppins font-normal text-2xl pt-5 transition ease-in-out delay-150 z-10 p-6">
      <div>
        <h4 className="ml-3 mt-10 flex text-2xl">
          <CgMenuGridR className="mt-1 mr-1" /> Menu
        </h4>
      </div>
      <ul className="pt-10 ">
        <li>
          <Link href="/product" passHref>
            <span className="mobileLink">Product</span>
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            <span className="mobileLink">Best</span>
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            <span className="mobileLink">Man</span>
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            <span className="mobileLink">Woman</span>
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            <span className="mobileLink">Kids</span>
          </Link>
        </li>
      </ul>
      <div className="m-5 p-3 flex justify-between">
        <Link href="/" passHref>
          <span className="mobileLink bottom-0">Login </span>
        </Link>
        <Link href="/" passHref>
          <span className="mobileLink">Registration </span>
        </Link>
      </div>

      {/* mobile menu Social Icon */}

      <div className="absolute bottom-4 text-base pl-3">
        <div className="flex">
          <Link href="/" passHref>
            <a className="socialIcon">
              <CgFacebook />
            </a>
          </Link>
          <Link href="#" passHref>
            <a className="socialIcon">
              <CgTwitter />
            </a>
          </Link>
          <Link href="#" passHref>
            <a className="socialIcon">
              <CgInstagram />
            </a>
          </Link>
          <Link href="#" passHref>
            <a className="socialIcon">
              <FaPinterestSquare />
            </a>
          </Link>
        </div>
        {/* mobile menu down copyright */}
        <div>
          copyright &copy; {Date().substring(11, 15)} <br />
          <h4>
            Ecommerce Website by{" "}
            <span className="border-dotted border-b-2 border-gray-400">
              {" "}
              ASHAB UDDIN
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
