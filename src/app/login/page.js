import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <>
    
    <div className='container flex items-center justify-center h-screen flex-col mx-auto'>
      <form className='flex w-[380px] h-[300px] items-center justify-center p-4 flex-col gap-5 shadow-sm rounded-md bg-white' action="">
        <input className='w-full h-11 rounded-xl bg-none border outline-none px-3 text-base' type="text" required placeholder='Enter your name'/>
        <input className='w-full h-11 rounded-xl bg-none border outline-none px-3 text-base' type="password" required placeholder='Enter your password'/>
        <input className='w-full h-11 rounded-xl bg-none border outline-none px-3 text-base' type="email" required placeholder='Enter your email'/>
        <Link href={"/"} className='w-full'><button className='w-full h-11 rounded-xl bg-[#FF8A00] text-white'>Log in</button></Link>
      </form>
    </div>
    
    </>
  )
}

export default Login