import Link from 'next/link';
import React from 'react'
import { BiShoppingBag } from "react-icons/bi";


const Header = () => {
  return (
    <>

      <header className='flex justify-between items-center w-full h-16' >
        <nav className='container px-4 mx-auto'>
          <div className='flex justify-between items-center h-full'>
            <h2 className='text-xl font-normal cursor-pointer hover:text-[#FF8A00]'>Creative Store </h2>
            <ul className='flex justify-center items-center gap-8'>
              <li className='text-sm hover:text-[#FF8A00]'>
                <Link href={"/"}><span>Home</span></Link>
              </li>
              <li className='text-sm hover:text-[#FF8A00]'>
                <Link href={"/"}><span>Category</span></Link>
              </li>
              <li className='text-sm hover:text-[#FF8A00]'>
                <Link href={"/"}><span>Product</span></Link>
              </li>
              <li className='text-lg hover:text-[#FF8A00]'>
                <Link href={"/"}><span><BiShoppingBag /></span></Link>
              </li>
            </ul>
            <div className='flex justify-center items-center gap-3'>
              <Link href={"/login"}><button className='w-24 h-11 bg-[#FFF6E4] text-[#FF8A00]'>Sign In</button></Link>
              <Link href={"/login"}><button className='w-24 h-11 bg-[#FF8A00] text-[#FFF6E4]'>Sign Up</button></Link>
            </div>
          </div>
        </nav>
      </header>

    </>
  )
}

export default Header