import Link from "next/link";
import { useEffect, useState } from "react";
import {CgTwitter,CgFacebook,CgInstagram,CgMathPlus,CgMathMinus,CgArrowUpO} from 'react-icons/cg';
import {FaPinterestSquare} from 'react-icons/fa';
import {useMediaQuery} from 'react-responsive'
import { SCREEN } from "../../responsive";

const Footer = () => {
  const [help, setHelp] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setHelp(help)
    setShow(show)
  },[help,show])
  

  const isMobile = useMediaQuery({maxWidth: SCREEN.md});

  return (
    <section className="container absolute font-Courgette  left-0 right-0 bg-gray-700 text-white text-base mt-10">
      <div className="grid lg:grid-cols-4 grid-cols-1">

      {/* Help */}


        <div className="pl-5 pr-5 pt-3 pb-3">
          <div className={`${isMobile ? 'border-b-[1px] pb-0.5 flex justify-between' : 'flex justify-between'}`}>

            <h4 className={`${!isMobile ? 'footerTitle border-b-[1px] inline' : 'footerTitle'}`}>
              HELP
            </h4>
            <span className="cursor-pointer font-sm text-gray-200">
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

{/* **************** Services ***************************** */}

<div className="pl-5 pr-5 pt-3 pb-3">
          <div className={`flex justify-between ${isMobile && 'border-b-[1px] pb-0.5'}`}>
          <h4 className={`${!isMobile ? 'footerTitle border-b-[1px] inline' : 'footerTitle'}`}>
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
  

       

{/*  *********************** Social media icons ************************* */}
        <div className="p-3">
          <h4 className="ml-2  footerTitle border-b-[1px] inline">
            Follow Us
          </h4>
          <div className="grid sm:grid-cols-2 md:grid-cols-1 mt-5 pl-1 justify-around">
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
              <div className="mt-[-0.5rem] md:mt-1 w-[90%]">
                <h4 className="border-b-[1px] inline m-0.5">News Latter</h4>
                <form action="" className="mt-1">
                
                  <input className="p-1 m-0.5 outline-none rounded-l-sm text-gray-600" type="email" id="email" placeholder="Subscritbe to get update" />
                  <input  className="p-1 pl-2 pr-2 m-0.5  outline-none bg-[#11e972] rounded-r-sm text-gray-600" type="submit" value="Subscribe" />
                  
                </form>
              </div>
            </div>
 
        </div>


      {/* About us */}

       <div className="p-3">
          <h4 className="ml-2 footerTitle border-b-[1px] inline">
            About Us
          </h4>
        <p className="p-2 text-base">
          E-Bazar is a Bangladeshi Brands for world class cloths.It is ensure customers satisfication and the quality of product.It is now more  stylist when she/he realized that the professional quality modern outdoor furnishings she sourced for her custom design clients weren’t available to the general public.
        </p>
        </div>

      </div>
      <hr />

{/* Copyright */}

      <div className="text-sm p-5 font-Courgette">
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
