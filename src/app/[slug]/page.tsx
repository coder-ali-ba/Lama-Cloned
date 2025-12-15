import ProductImages from '@/components/ProductImages'
import React from 'react'

function SinglePage() {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 xxl:px-64 relative flex flex-col lg:flex-row gap-16'>
      {/* IMage */}
      <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>
        <ProductImages />
      </div>
      {/* TEXT */}
      <div className='w-full lg:w-1/2 flex flex-col gap-6'>
        <h1 className='text-4xl font-medium '>Product Name</h1>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ipsa, nihil fugit quam enim voluptatum nemo ab neque architecto corrupti facilis iure obcaecati, voluptas inventore, omnis mollitia itaque rerum pariatur.</p>
        <div className='h-[2px] bg-gray-100'/>
        <div className='flex items-center gap-4'>
          <h3 className='text-xl text-gray-500 line-through'>$50</h3>
          <h2>$40</h2>
        </div>
        <div className='h-[2px] bg-gray-100'/>
      </div>
    </div>
  )
}

export default SinglePage
