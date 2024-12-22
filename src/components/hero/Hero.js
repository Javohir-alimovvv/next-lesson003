import React from 'react'
import Image from 'next/image'
import heroImage from '../../assets/images/hero.png'

const Hero = () => {
  return (
    <>
      <div className='container px-4 mx-auto'>
        <Image className='w-full h-auto' src={heroImage} alt="" />
      </div>
    </>
  )
}

export default Hero