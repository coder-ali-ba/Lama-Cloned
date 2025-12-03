import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='py-24 px-4 md:px-8 lg:px-16 xl:px-32 xxl:px-64 bg-gray-100 text-sm mt-24'>
      {/* TOP */}

     <div className='flex flex-col md:flex-row justify-between gap-24 '>
        {/* left */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
         <Link href="/"><div className='text-2xl tracking-wide'>ALI</div></Link>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident culpa veniam repudiandae!</p>
         <span className='font-semibold'>ali@mail</span>
         <span className='font-semibold'>+9234355</span>
         <div className='flex gap-6'>
          <Image src="/facebook.png" alt='' width={16} height={16}/>
          <Image src="/instagram.png" alt='' width={16} height={16}/>
          <Image src="/youtube.png" alt='' width={16} height={16}/>
          <Image src="/pinterest.png" alt='' width={16} height={16}/>
          <Image src="/x.png" alt='' width={16} height={16}/>
         </div>
        </div>
        {/* center */}
        <div className='w-1/2 hidden lg:flex justify-between'>
          <div className='flex flex-col justify-between'>
            <h1 className='font-medium text-lg'>Company</h1>
            <div className='flex flex-col gap-6'>
              <Link href="">About Us </Link>
              <Link href="">Carriers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>

          <div className='flex flex-col justify-between'>
            <h1 className='font-medium text-lg'>Shop</h1>
            <div className='flex flex-col gap-6'>
              <Link href="">About Us </Link>
              <Link href="">Carriers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>

          <div className='flex flex-col justify-between'>
            <h1 className='font-medium text-lg'>Help</h1>
            <div className='flex flex-col gap-6'>
              <Link href="">About Us </Link>
              <Link href="">Carriers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>
        </div>
        {/* right */}
        <div className=' w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
         <h1 className='font-medium text-lg'>Subscribe</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis id velit hic.</p>
         <div className='flex'>
            <input type="text" placeholder='email' className='p-4 w-3/4' />
            <button className='w-1/4 bg-lama text-white'>JOIN</button>           
         </div>
         <span className='font-semibold'>secureks jdhdj j</span>
          <div className='flex justify-between'>
            <Image src="/discover.png" alt='' width={16} height={16}/>
            <Image src="/skrill.png" alt='' width={16} height={16}/>
            <Image src="/paypal.png" alt='' width={16} height={16}/>
            <Image src="/mastercard.png" alt='' width={16} height={16}/>
            <Image src="/visa.png" alt='' width={16} height={16}/>
          
         </div>
        </div>
      </div>


      {/* BOTTOM */}
      <div className='flex flex-col md:flex-row items-center justify-between gap-8 mt-16'>
        <div className=''>@2025 Tuck shop</div>
        <div className='flex flex-col gap-8 md:flex-row'>
          <div>
            <span className='text-gray-400 mr-4'>Language</span>
            <span className='font-medium'>Pakistan | Urdu</span>
          </div>
          <div>
            <span className='text-gray-400 mr-4'>Currency</span>
            <span className='font-medium'>PKR</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
