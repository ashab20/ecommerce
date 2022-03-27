import Image from "next/image";
import Return from '../../public/svg/return.svg'
import FreeShipping from '../../public/svg/shopping.svg';
import delivary from '../../public/svg/delivary.svg';

const Delivary = () => {
  return (
    <section className='container'>
        <div>
            
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-1'>
            <div className='bg-[#f7f7f7] p-2 rounded-sm'>
                <Image src={Return} alt="choice" height="200px" />
                <h4 className='text-base p-2 font-Poppins text-yellow-500 text-center'>
                    7 day easy return
                </h4>
            </div>
            <div className='bg-[#f7f7f7] p-2 rounded-sm'>
                    <Image src={FreeShipping} alt="login" height="200px" />
                <h4 className='text-base p-2 font-Poppins text-green-500 text-center'>
                    Free Shipping in Chittagong
                </h4>
            </div>
            <div className='bg-[#f7f7f7] p-2 rounded-sm'>
            <Image src={delivary} alt="login" height="200px" />
                <h4 className='text-base p-2 font-Poppins text-red-600 text-center'>Fastes Delivary</h4>
            </div>
        </div>
    </section>
  )
}

export default Delivary