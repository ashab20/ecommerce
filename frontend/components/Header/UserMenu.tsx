import {GiHamburgerMenu} from 'react-icons/gi'
import {HiMenuAlt3} from 'react-icons/hi'
import {AiFillHeart} from 'react-icons/ai'
import {BsBag} from 'react-icons/bs'
import {CgCloseO,CgSearch} from 'react-icons/cg'
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import {useMediaQuery} from 'react-responsive';
import { SCREEN } from '../../responsive'


const UserMenu = ({}) => {
    const [menu, setMenu] = useState(false);

    const isMobile  = useMediaQuery({maxWidth:SCREEN.sm});
  return (<>
    <div className='text-[.5rem] h-10 flex justify-end z-20'>
        <CgSearch className='userIcon'/>
        <div>
        <span className=' absolute pl-4 pt-3.5 text-red-700 z-10 text-[.6rem]'>5
             </span>
        <BsBag className='userIcon'>
             
        
        </BsBag>
        </div>
        <AiFillHeart className='userIcon'/> 
        
        { isMobile ? menu ? 
        <CgCloseO 
        className='userIcon text-red-400' 
        onClick={() => {setMenu(!menu)}}/>

        : <GiHamburgerMenu 
        className='userIcon text-gray-700'
        onClick={() => {setMenu(!menu)}}/> :null } 
    </div>

    {menu ? <MobileMenu/> : null}

    </>
  )
}

export default UserMenu 