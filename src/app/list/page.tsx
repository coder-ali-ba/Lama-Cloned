import Filter from '@/components/Filter'
import ProductList from '@/components/ProductList'
import Image from 'next/image'
import React from 'react'

function ListPage() {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 xxl:px-64 relative'>
      {/* CAMPAIGN */}
      <div className='hidden sm:flex bg-pink-50  px-4 justify-between h-64'>
        <div className='w-2/3 flex flex-col items-center justify-center gap-8'>
          <h1 className='text-4xl font-semibold leading-[48px] text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <button className='rounded-3xl bg-lama text-white w-max py-3 px-5 text-sm'>Buy Now</button>
        </div>
        <div className='relative w-1/2'>
          <Image src="/woman.png" alt='' fill className='object-contain'/>
        </div>
      </div>

      <Filter />
      {/* Products */}
      <h1 className='mt-12 text-xl font-semibold'>Shoes for you!</h1>
      <ProductList />
    </div>


  )
}

export default ListPage
