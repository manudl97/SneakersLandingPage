import React from 'react'
import {BsBoxSeam, BsCreditCard} from 'react-icons/bs';
import {TbMoneybag} from 'react-icons/tb';
import {BiSupport} from 'react-icons/bi';



const CircleCards = () => {
  return (
      <div className='bg-gray-200'>
    <div className='max-w-[1200px] max-h-[300px] flex justify-between mx-auto pt-14 pb-6 px-14 items-center'>
        
        <div className='max-w-[300px] items-center flex flex-col'>
        <div class="w-24 h-24 bg-zinc-300 rounded-full flex items-center justify-center"><BsBoxSeam size={40} className='text-black'/></div>
        <h2 className='pt-4 text-black font-bold'>
            Free Shipping World-Wide
        </h2>
        <p className='text-black'>
            Lorem Ipsum Andor Fiji
        </p>
        </div>


        <div className='max-w-[300px] items-center flex flex-col'>
        <div class="w-24 h-24 bg-zinc-300 rounded-full flex items-center justify-center"><TbMoneybag size={40} className='text-black'/></div>
        <h2 className='pt-4 text-black font-bold '>
            Money Back Guarantee
        </h2>
        <p className='text-black'>
            Lorem Ipsum Andor Fiji
        </p>
        </div>

        <div className='max-w-[300px] items-center flex flex-col'>
        <div class="w-24 h-24 bg-zinc-300 rounded-full flex items-center justify-center"><BiSupport size={40} className='text-black'/></div>
        <h2 className='pt-4 text-black font-bold '>
            Online Support
        </h2>
        <p className='text-black'>
            Lorem Ipsum Andor Fiji
        </p>
        </div>

        <div className='max-w-[300px] items-center flex flex-col'>
        <div class="w-24 h-24 bg-zinc-300 rounded-full flex items-center justify-center"><BsCreditCard size={40} className='text-black'/></div>
        <h2 className='pt-4 text-black font-bold '>
            Payment Return
        </h2>
        <p className='text-black'>
            Lorem Ipsum Andor Fiji
        </p>
        </div>
    </div>
    
   
        
       

        
    </div>

    
    
   
   
  )
}

export default CircleCards