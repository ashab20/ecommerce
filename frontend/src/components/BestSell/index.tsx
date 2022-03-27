import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import {IoIosArrowDroprightCircle }from 'react-icons/io';
import shoes from '../../../public/product/shoes.png'
import shirt from '../../../public/product/t-shir.png'
import kids from '../../../public/svg/kids.svg';

const BestSell = () => {
  return (
    <section className='container'>

      {/*? ***TITLE *** */}
      <div className="text-center grid items-center mt-10">
        <h2 className='font-Roboto uppercase p-1 text-gray-700 font-extrabold text-center text-4xl'>
          Best Sells
        </h2>
        <h4 className=' p-1 text-base text-gray-500 font-Poppins mb-10'>
          Detailes of the product
        </h4>
      </div>

      {/* container */}
      <div className='grid sm:grid-cols-6 grid-rows-2 items-center gap-2 text-center relative'>

        {/* 1st card */}
        <div className='bg_card'>
          <div className='p-2 sm:p-6 md:p-8'>
            <h3 className='uppercase text-base text-gray-700 text-left lg:text-2xl'>
              check out our new <br />
              Black shoes {/* from server */}
            </h3>
            <div className='flex mt-4 text-xs text-gray-600 align-bottom md:text-sm  bottom-0 '>
              <IoIosArrowDroprightCircle className='mt-0.5 md:mt-1 mr-2 text-green-500'/> 
              <Link href="#" passHref > 
                Shop Black Shoes 
              </Link>
            </div>
          </div>
          <div className='sm:absolute right-3 top-[-2.5rem]'>
            <Image src={shoes} alt="Product"/>
          </div>
        </div>
    {/* secend card */}
        <div className='sort_card'>
          <div className='p-3 sm:p-6 md:p-8'>
            <h3 className='uppercase text-xl text-gray-700 text-left lg:text-2xl'>
              Kids toy product<br />
              
            </h3>
            <div className='flex mt-4 text-xs text-gray-600 align-bottom md:text-sm  bottom-0 hover:text-purple-400'>
              <IoIosArrowDroprightCircle className='mt-0.5 md:mt-1 mr-2 text-green-500'/> 
              <Link href="#" passHref > 
                Buy Now
              </Link>
            </div>            
          </div>
          <div className='sm:mt-[-3rem]'>
            <Image src={kids} alt="Product"height="250px" />
          </div>
        </div>

    {/* 3rd card */}
        <div className='sort_card'>
          <div className='p-3 sm:p-6 md:p-8'>
            <h3 className='uppercase text-xl text-gray-700 text-left lg:text-2xl'>
              Accessories  <br />
              Buy Now
            </h3>
            <div className='flex mt-4 text-xs text-gray-600 align-bottom md:text-sm  bottom-0 hover:text-purple-400'>
              <IoIosArrowDroprightCircle className='mt-0.5 md:mt-1 mr-2 text-green-500'/> 
              <Link href="#" passHref > 
                Buy Now
              </Link>
            </div>            
          </div>

        </div>

        {/* four no card */}
        <div className='bg_card'>
          
          <div className='p-2 sm:p-6 md:p-8'>
            <h3 className='uppercase text-xl text-gray-700 text-left lg:text-2xl'>
              favorite bundle <br />
              t-shirt
            </h3>
            <div className='flex mt-4 text-xs text-gray-600 align-bottom md:text-sm  bottom-0 hover:text-purple-400'>
              <IoIosArrowDroprightCircle className='mt-0.5 md:mt-1 mr-2 text-green-500'/> 
              <Link href="#" passHref > 
                Buy T-shirt
              </Link>
            </div>            
          </div> 
          <div className='sm:absolute right-3 top-[-1rem]'>
            <Image src={shirt} alt="Product"/>
          </div>
        </div>
      </div>

    </section>
  )
}

export default BestSell