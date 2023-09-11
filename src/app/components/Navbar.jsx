import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';


const Navbar = () => {
  const [nav, setNav] = useState(false)

  return (
    <>
    <nav className='bg-gray-200 text-black items-center'>
        <div className='max-w-[1200px] flex justify-between mx-auto p-4 items-center'>
        <div className='flex items-center lg:hidden'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
    </div>
            <a href=""><p className='font-extrabold text-xl'>JJ SNEAKERS</p></a>
            <ul className='hidden lg:flex space-x-8 text-md font-medium'>
                <a href=""><li className='hover:font-bold duration-300 ease-in-out'>About us</li></a>
                <a href=""><li className='hover:font-bold duration-300 ease-in-out'>Products</li></a>        
                <a href=""><li className='hover:font-bold duration-300 ease-in-out'>Contact</li></a>      
            </ul> 
       
       
         </div>  


        
    </nav>

   

    {/* Side drawer menu */}
    <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-gray-200 z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <AiOutlineClose
            onClick={()=> setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer text-black'
        />
        <h2 className='text-2xl p-4 text-black'>
        <span className='font-bold'>JJ</span> SNEAKERS
        </h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
            <a href=""><li className='text-xl py-4 flex hover:font-bold duration-300 ease-in-out'>About us</li></a>
            <a href=""><li className='text-xl py-4 flex hover:font-bold duration-300 ease-in-out'>Products</li></a>
            <a href=""><li className='text-xl py-4 flex hover:font-bold duration-300 ease-in-out'>Contact</li></a>
            </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar