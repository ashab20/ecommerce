/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import DefualImage from '../../../public/e-bazar.png'
import ReactStars from 'react-rating-stars-component';
import { useMediaQuery} from 'react-responsive'
import { SCREEN } from '../../responsive';

interface IProductCard {
    discount?: number;
    quantity?: number;
    thumbnile:string;
    description?:string;
    title:string;
    rate:number;
    price:number;
    link:string;
    reviews:string;

}

const stars = {
    edit:true,
    count:5,
    activeColor: 'tomato',
    size: 16,
    isHalf:true,
}


const ProductCard = ({discount,quantity,title,rate,price,thumbnile,link,description,reviews}:IProductCard) => {
  return (
    <div className='p-2 rounded-md transition ease-in-out delay-100 focus:-translate-y-1 hover:-translate-y-1  duration-300 '>
        {/* Thumbnil */}
        <div className='relative bg-[#f7f7f7] grid justify-center'>
            {/* dicount od sold out */}
            
            <div className='m-1 text-base absolute top-0 right-0 '>
            { quantity  != 0 ?
                 discount != 0 ?
                 <p className='bg-amber-500 rounded-md p-1 text-rose-700'>{discount}% OFF</p> 
                 : null 
            :<p className='text-red-500 p-1'>SOLD</p>}
            </div> 
            {/* Product image */}
            <Link href={link} passHref>
                <img className='h-72 cursor-pointer' src={thumbnile} alt={title} height="200px"/>
            </Link>
        </div>
        <div className='bg-[#f7f7f7] rounded-b-md p-2 sm:pt-2'>
            <Link href={link} passHref>
                <h4 className='text-gray-700 text-xl font-Poppins overflow-ellipsis cursor-pointer'>{title}</h4>
            </Link>
            {/* <p className='text-gray-500 text-sm overflow-ellipsis'>
                {description}
            </p> */}
            <div className='text-base text-emerald-500 flex justify-between'>
                <ReactStars value={rate} {...stars}/> <span>({reviews} reviews)</span>
            </div>
            <p className='text-base text-amber-700'>{price}$</p>
        </div>

    </div> )
}

ProductCard.defaultProps = {
    thumbnile:{DefualImage},
    title: '',
    description: 'Fast Refresh will perform a full reload when you edit a file that is imported by modules outside of the React rendering tree.',
    link: '#',
    rate: 2.5,
    price: 200,
    reviews: 200,
}

export default ProductCard