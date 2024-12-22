import React from 'react'
import care from '../../assets/images/idish.png'
import noutbook from '../../assets/images/noutbook.png'
import telefon from '../../assets/images/telefon.png'
import kuylak from '../../assets/images/kuylak.png'
import keta from '../../assets/images/keta.png'
import televezor from '../../assets/images/televezor.png'
import Image from 'next/image'

const Category = () => {
  return (
    <>

      <div className='container mx-auto px-4 flex flex-col items-center justify-center mt-10'>
        <div className='w-full flex justify-start items-center mb-5'>
          <button className='w-44 h-11 bg-[#FF8A00] text-white text-base'>Product Category</button>
        </div>
        <div className='flex w-full h-auto items-center justify-between'>
          <div className='w-[166px] h-[166px] bg-white rounded-lg flex items-center justify-center cursor-pointer relative card'>
            <Image className='w-full h-full' src={care} alt='' />
            <div className='w-full h-[36px] bg-[#FFF6E4] flex items-center justify-center absolute bottom-[-36px] opacity-0 box'>
              <h3 className='text-[#FF8A00] font-medium '>Skin Care</h3>
            </div>
          </div>
          <div className='w-[166px] h-[166px] bg-white rounded-lg flex items-center justify-center cursor-pointer relative card'>
            <Image className='w-full h-full' src={noutbook} alt='' />
            <div className='w-full h-[36px] bg-[#FFF6E4] flex items-center justify-center absolute bottom-[-36px] opacity-0 box'>
              <h3 className='text-[#FF8A00] font-medium '>Laptop & PC</h3>
            </div>
          </div><div className='w-[166px] h-[166px] bg-white rounded-lg flex items-center justify-center cursor-pointer relative card'>
            <Image className='w-full h-full' src={telefon} alt='' />
            <div className='w-full h-[36px] bg-[#FFF6E4] flex items-center justify-center absolute bottom-[-36px] opacity-0 box'>
              <h3 className='text-[#FF8A00] font-medium '>Smarphone</h3>
            </div>
          </div><div className='w-[166px] h-[166px] bg-white rounded-lg flex items-center justify-center cursor-pointer relative card'>
            <Image className='w-full h-full' src={kuylak} alt='' />
            <div className='w-full h-[36px] bg-[#FFF6E4] flex items-center justify-center absolute bottom-[-36px] opacity-0 box'>
              <h3 className='text-[#FF8A00] font-medium '>Fashion</h3>
            </div>
          </div><div className='w-[166px] h-[166px] bg-white rounded-lg flex items-center justify-center cursor-pointer relative card'>
            <Image className='w-full h-full' src={keta} alt='' />
            <div className='w-full h-[36px] bg-[#FFF6E4] flex items-center justify-center absolute bottom-[-36px] opacity-0 box'>
              <h3 className='text-[#FF8A00] font-medium '>Sepatu</h3>
            </div>
          </div><div className='w-[166px] h-[166px] bg-white rounded-lg flex items-center justify-center cursor-pointer relative card'>
            <Image className='w-full h-full' src={televezor} alt='' />
            <div className='w-full h-[36px] bg-[#FFF6E4] flex items-center justify-center absolute bottom-[-36px] opacity-0 box'>
              <h3 className='text-[#FF8A00] font-medium '>Elektronik</h3>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Category