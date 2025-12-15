"use client"

import { url } from 'inspector'
import Image from 'next/image'
import React, { useState } from 'react'



const images = [
  {id:1, 
  url : 'https://images.pexels.com/photos/19897118/pexels-photo-19897118.jpeg'
  },
  {id:2, 
  url : 'https://images.pexels.com/photos/17344982/pexels-photo-17344982.jpeg'
  },
  {id:3, 
  url : 'https://images.pexels.com/photos/34667260/pexels-photo-34667260.jpeg'
  },
  {id:4, 
  url : 'https://images.pexels.com/photos/34796140/pexels-photo-34796140.jpeg'
  }
]

function ProductImages() {
  const [index , setIndex] = useState(0)



  return (
    <div>
      <div className='h-[500px] relative'>
        <Image src={images[index].url} alt=''  sizes='50vw' fill className='object-cover rounded-md'/>
      </div>
      <div className='flex justify-between gap-4 mt-8'>
          {
            images.map((img , i)=>(
              <div className='w-1/4 h-32 relative gap-4 mt-8 cursor-pointer' key={img.id} onClick={()=>{setIndex(i)}}>
                <Image src={img.url} alt=''  sizes='50vw' fill className='object-cover rounded-md'/>
              </div>
            ))           
          }
      </div>
    </div>
  )
}

export default ProductImages
