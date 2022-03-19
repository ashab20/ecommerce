import Link from "next/link";
import { useState } from "react";
import {CgTwitter,CgFacebook,CgInstagram,CgMathPlus,CgMathMinus,CgArrowUpO} from 'react-icons/cg';
import {FaPinterestSquare} from 'react-icons/fa';
import {useMediaQuery} from 'react-responsive'
import { SCREEN } from "../../responsive";

const Footer = () => {
  const [help, setHelp] = useState(false);
  const [show, setShow] = useState(false);

  const isMobile = useMediaQuery({maxWidth: SCREEN.md});

  return (
    <section className="absolute font-Courgette lg:p-10 md:p-6 w-[100vw] bottom-0 bg-gray-700 text-white">
      <div className="grid lg:grid-cols-4 grid-cols-1">
      {/* Help */}
        <div className="pl-5 pr-5 pt-3 pb-3">
          <div className={`flex justify-between ${isMobile && 'border-b-[1px] pb-0.5'}`}>

            <h4 className={`footerTitle ${!isMobile && 'border-b-[1px] inline'}`}>
              HELP
            </h4>
            <span className="cursor-pointer font-[.6rem] text-gray-200">
            {isMobile && ( help ? 
            <CgMathMinus  onClick={() => {setHelp(!help)}}/>  :<CgArrowUpO onClick={() => {setHelp(!help)}}/> ) }
            </span>
            
          </div>
          {(!isMobile || help)&& (
          <ul>
            <li className="footerLink">
              <Link href={"/"}>Order Status</Link>
            </li>
            <li className="footerLink">
              <Link href={"/"}>Shipping</Link>
            </li>
            <li className="footerLink">
              <Link href={"/"}>Contact Us</Link>
            </li>
            <li className="footerLink">
              <Link href={"/"}>Returns</Link>
            </li>
            <li className="footerLink">
              <Link href={"/"}>Help Center</Link>
            </li>
            <li className="footerLink">
              <Link href={"/"}>Terms and Privacy</Link>
            </li>
          </ul> )}
        </div>

{/* categories */}
<div className="pl-5 pr-5 pt-3 pb-3">
          <div className={`flex justify-between ${isMobile && 'border-b-[1px] pb-0.5'}`}>
          <h4 className={`footerTitle ${!isMobile && 'border-b-[1px] inline'}`}>
            Services
          </h4>
           <span className="cursor-pointer font-[.6rem] text-gray-200">
            {isMobile && ( show ? 
            <CgMathMinus  onClick={() => {setShow(!show)}}/>  :<CgArrowUpO onClick={() => {setShow(!show)}}/> ) }
            </span>

          </div>
          {(!isMobile || show)&& (
          <ul>
            <li className="footerLink">
              <Link href={"/"}>New Product</Link>
            </li>
            <li className="footerLink">
              <Link href={"/"}>Best Rating</Link>
            </li>
            <li className="footerLink">
              <Link href={"/"}>Man Collection</Link>
            </li>
            <li className="footerLink">
              <Link href={"/"}>Women Collection</Link>
            </li>
            <li className="footerLink">
              <Link href={"/"}>Chilred and Kids Product</Link>
            </li>
          </ul>)}
        </div>
  

       

{/* social media icons */}
        <div className="p-3">
          <h4 className="ml-2  footerTitle border-b-[1px] inline">
            Follow Us
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-1 mt-5 pl-1 justify-around">
              <div className="flex ">
                <Link href="/" passHref>
                    <span className='socialIcon'>
                        <CgFacebook/> </span>
                </Link>
                <Link href='#' passHref >
                    <span className='socialIcon'>
                    <CgTwitter />
                    </span>
                </Link>
                <Link href='#' passHref >
                    <span className='socialIcon'>
                    <CgInstagram />
                    </span>
                </Link>
                <Link href='#' passHref >
                    <span className='socialIcon'>
                    <FaPinterestSquare />
                    </span>
                </Link>
            </div>
            {/* news latter */}
              <div className="mt-[-0.5rem] md:mt-1">
                <h4 className="border-b-[1px] inline">News Latter</h4>
                <form action="" className="mt-1">
                  <label className="p-[.334rem] bg-[#f7f7f7] rounded-l-sm text-gray-600" htmlFor="email">Email:</label>
                  <input className="p-0.5  outline-none rounded-r-sm text-gray-600" type="email" id="email" placeholder="Subscritbe to get update" />
                </form>
              </div>
            </div>
 
        </div>
      {/* About us */}
       <div className="p-3">
          <h4 className="ml-2 footerTitle border-b-[1px] inline">
            About Us
          </h4>
        <p className="p-2 text-[.7rem]">
          E-Bazar is a Bangladeshi Brands for world class cloths.It is ensure customers satisfication and the quality of product.It is now more  stylist when she/he realized that the professional quality modern outdoor furnishings she sourced for her custom design clients weren’t available to the general public.
        </p>
        </div>

      </div>
      <hr />
      <div className="text-[.8rem] p-5 font-Courgette">
        copyright &copy; {Date().substring(11, 15)} <br />
        <h4>
          Ecommerce Website by{" "}
          <span className="border-dotted border-b-2 border-gray-400">
            {" "}
            ASHAB UDDIN
          </span>
        </h4>
      </div>
    </section>
  );
};

export default Footer;
