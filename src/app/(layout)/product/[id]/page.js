import React from 'react'

const Detail = async ({ params }) => {
  const data = await fetch(`https://dummyjson.com/products/${params.id}`)
  const json = await data.json()

  return (
    <>
    
    <div>
      <img src={json?.thumbnail} alt="" />
    </div>
    
    </>
  )
}

export default Detail