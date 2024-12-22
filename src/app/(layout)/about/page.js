import Category from '@/components/category/Category'
import Hero from '@/components/hero/Hero'
import Popular from '@/components/popular/Papular'

import React from 'react'
const data = await fetch('https://dummyjson.com/products')
const products = await data.json()

async function page (){
  return (
    <>

      <Hero />
      <Category />
      <Popular data={products}/>

    </>
  )
}

export default page