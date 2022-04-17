import {GiHamburgerMenu} from 'react-icons/gi'
import {HiMenuAlt3} from 'react-icons/hi'
import {AiFillHeart} from 'react-icons/ai'
import {BsBag} from 'react-icons/bs'
import {CgCloseO,CgSearch} from 'react-icons/cg'
import { useState,useEffect } from 'react';
import MobileMenu from './MobileMenu';
import {useMediaQuery} from 'react-responsive';
import { SCREEN } from '../../responsive'


const UserMenu = ({HandleSearch}:any) => {
    const [menu, setMenu] = useState(false);

  // useEffect(() => {
  //   setMenu(menu)
  // },[menu])

    const isMobile  = useMediaQuery({maxWidth:SCREEN.sm});
  return (<>
    <div className='text-2xl h-10 flex justify-end z-20'>
        <CgSearch className='userIcon ' 
        onClick={HandleSearch }/>
        <div>
        <span className=' absolute pl-[.85rem] pt-2.5 text-red-700 z-10 text-sm'>
          0
        </span>
        <BsBag className='userIcon'/>
        </div>
        <span>
        <AiFillHeart className='userIcon'/> 
        </span>
        
        { isMobile && ( menu ? 
        <span> 
          <CgCloseO 
        className='userIcon text-red-400' 
        onClick={() => {setMenu(!menu)}}/>
        </span>

        : <span>
          <GiHamburgerMenu 
        className='userIcon text-gray-700'
        onClick={() => {setMenu(!menu)}}/>
        </span> )} 
    </div>

    {menu && <MobileMenu/>}

    </>
  )
}

export default UserMenu 