import {CgTwitter,CgFacebook,CgInstagram,CgMenuGridR} from 'react-icons/cg';
import {FaPinterestSquare} from 'react-icons/fa';
import Link from "next/link"

const MobileMenu = () => {
  return (
    <div className="absolute bg-[#f7f7f7] right-0 w-[50%] h-[100vh] pl-[6%] text-gray-600 font-Poppins font-thin pt-2 transition ease-in-out delay-150 z-10">
        <div>
            <h4 className="ml-3 mt-10 flex">
                <CgMenuGridR className='text-sm mt-1 mr-1'/> Menu
            </h4>
        </div>
        <ul className="pt-10 ">
            <li><Link href='/' passHref>
                <span className="mobileLink">New </span>
                </Link>
            </li>
            <li><Link href='/'passHref>
                <span className="mobileLink">
                    Best 
                </span></Link>
            </li>
            <li><Link href='/' passHref>
                <span className="mobileLink">
                    Man 
                </span></Link>
            </li>
            <li><Link href='/' passHref>
                <span className="mobileLink">
                    Woman 
                </span></Link>
            </li>
            <li><Link href='/' passHref>
                <span className="mobileLink">
                Kids 
                </span>
            </Link>
            </li>
        </ul>
        <div className="m-5 p-3 flex justify-between">
        <Link href="/" passHref>
            <span className="mobileLink bottom-0">Login </span></Link>
        <Link href="/" passHref>
            <span className="mobileLink">Registration </span>
        </Link>
        </div>

        <div className="absolute bottom-4 text-[.7rem] pl-3">
            <div className="flex mb-[10%]">
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
            <div>
                copyright &copy; {Date().substring(11,15)}  <br />
                <h4>Ecommerce Website by <span className="border-dotted border-b-2 border-gray-400"> ASHAB UDDIN</span></h4>
            </div>
        </div>
    </div>
  )
}

export default MobileMenu