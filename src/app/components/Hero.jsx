import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-4'>
    <div className='max-h-[500px] relative'>
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
          <div className='max-w-[500px]'>
            <div className='hidden lg:block'>
            <p className='py-5  text-white/70 text-lg'>New Collection of Sneakers</p>
            </div>
            <h1 className='text-4xl  sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Sneakers and </h1>
            <h1 className=' text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> Sports Shoes</h1>
            <div className='hidden lg:block'>
            <p className='py-5 text-white/70 text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='hidden lg:flex justify-center'>
            <button className='px-8 py-2 text-black/70 bg-white text-lg max-w-[500px] font-bold text-center rounded-xl border-2  hover:border-white/100 hover:bg-black hover:text-white duration-300 ease-in-out'>See Products</button>
            </div>
            </div>
        </div>
        <img className='w-full max-h-[500px] object-cover' src="https://i.ibb.co/Bs3sMZ7/New-Project.jpg" alt="/" />
    </div>
</div>
  )
}

export default Hero