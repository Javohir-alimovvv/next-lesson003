"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

const Papular = ({ data }) => {
  const router = useRouter()

  return (
    <>

      <div className='container w-full h-auto mx-auto px-4'>
        <div className='flex items-center justify-between w-full flex-col mt-10'>
          <h2 className='font-medium text-[32px] mb-5'>All Products</h2>
          <form action="" className='w-[735px] h-11 mb-10 flex items-center justify-between bg-white'>
            <input type="text" placeholder='search something...' required className='flex-1 px-4 outline-none' />
            <button className='w-24 h-11 bg-[#FF8A00] text-white text-sm'>Search </button>
          </form>
          <div className='w-full grid grid-cols-4 gap-4'>
            {
              data?.products?.map((pro) => (
                <div key={pro.id} className='w-full p-3 h-auto bg-white shadow-md rounded-md flex flex-col items-center justify-center gap-3'>
                  <div className='w-full h-auto border cursor-pointer rounded-md'>
                    <img onClick={() => router.push(`/product/${pro.id}`)} src={pro.images} alt="" className='w-full h-auto' />
                  </div>
                  <div>
                    <p className='text-lg text-[#FF8A00] mb-3'>{pro.title}</p>
                    <p className='text-sm text-[#878686] mb-3'>{pro.description}</p>
                    <div className='flex items-center justify-between w-full'>
                      <h3 className='text-lg text-[#ff0000] mb-3'>{pro.price} $</h3>
                      <button className='w-16 h-7 bg-[#FFF6E4] text-[#FF8A00]'>Buy</button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default Papular