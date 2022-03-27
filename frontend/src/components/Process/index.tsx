import Image from 'next/image'
import React from 'react'
import Choice from '../../../public/svg/find.svg';
import login from '../../../public/svg/login.svg';
import payment from '../../../public/svg/payment.svg';

const Proccess = () => {
  return (
    <section className='container'>
        <div>
            
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 p-2'>
            <div className='bg-[#f7f7f7] p-2 rounded-sm'>
                <h4 className='text-xl p-2 font-Poppins text-lime-500'>
                    Choice Product
                </h4>
                <Image src={Choice} alt="choice" height="200px" />
            </div>
            <div className='bg-[#f7f7f7] p-2 rounded-sm'>
                <h4 className='text-xl p-2 font-Poppins text-orange-500'>
                    Login
                </h4>
                    <Image src={login} alt="login" height="200px" />
            </div>
            <div className='bg-[#f7f7f7] p-2 rounded-sm'>
                <h4 className='text-xl p-2 font-Poppins text-green-500'>Make a Purchase</h4>
            <Image src={payment} alt="login" height="200px" />
            </div>
        </div>
    </section>
  )
}

export default Proccess