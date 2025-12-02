import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div>
      {/* TOP */}

     <div className='flex justify-between gap-24'>
        {/* left */}
        <div className='w-1/4 flex flex-col gap-8'>
         <Link href="/"><div className='text-2xl tracking-wide'>ALI</div></Link>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident culpa veniam repudiandae!</p>
         <span className='font-semibold'>ali@mail</span>
         <span className='font-semibold'>+9234355</span>
         <div className='flex gap-6'>
          <Image src="/facebook.png" alt='' width={16} height={16}/>
          <Image src="/instagram.png" alt='' width={16} height={16}/>
          <Image src="/youtube.png" alt='' width={16} height={16}/>
          <Image src="/pinterest.png" alt='' width={16} height={16}/>
          <Image src="/x classname='font-semibold'.png" alt='' width={16} height={16}/>
         </div>
        </div>
        {/* center */}
        <div className='w-1/2'></div>
        {/* right */}
        <div className='w-1/4'></div>
      </div>


      {/* BOTTOM */}
      <div></div>
    </div>
  )
}

export default Footer
