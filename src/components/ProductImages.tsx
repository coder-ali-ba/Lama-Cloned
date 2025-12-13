import { url } from 'inspector'
import Image from 'next/image'
import React from 'react'



const images = [
  {id:1, 
  url : 'https://www.pexels.com/photo/monarch-butterflies-on-a-clue-chalk-stick-plant-14016449/'
  },
  {id:2, 
  url : 'https://www.pexels.com/photo/traditional-turkish-breakfast-spread-in-istanbul-34795073/'
  },
  {id:3, 
  url : 'https://images.pexels.com/photos/34667260/pexels-photo-34667260.jpeg'
  },
  {id:4, 
  url : 'https://www.pexels.com/photo/yellow-lane-on-the-middle-of-the-road-14095652/'
  }
]

function ProductImages() {
  return (
    <div>
      <div className='h-[500px] relative'>
        <Image src="https://images.pexels.com/photos/35104429/pexels-photo-35104429/free-photo-of-young-child-exploring-autumn-outdoors-in-boots.jpeg?auto=compress&cs=tinysrgb&w=600&loading=lazy" alt=''  sizes='50vw' fill className='object-cover rounded-md'/>
      </div>
      <div>
        <div className='w-1/4 h-32 relative gap-4 mt-8'>
          <Image src="https://images.pexels.com/photos/35104429/pexels-photo-35104429/free-photo-of-young-child-exploring-autumn-outdoors-in-boots.jpeg?auto=compress&cs=tinysrgb&w=600&loading=lazy"   alt=''  sizes='30vw' fill className='object-cover rounded-md'/>
        </div>
        {/* <div className='w-1/4 h-32 relative gap-4 mt-8'>
          <Image src="https://images.pexels.com/photos/35104429/pexels-photo-35104429/free-photo-of-young-child-exploring-autumn-outdoors-in-boots.jpeg?auto=compress&cs=tinysrgb&w=600&loading=lazy"   alt=''  sizes='30vw' fill className='object-cover rounded-md'/>
        </div>
        <div className='w-1/4 h-32 relative gap-4 mt-8'>
          <Image src="https://images.pexels.com/photos/35104429/pexels-photo-35104429/free-photo-of-young-child-exploring-autumn-outdoors-in-boots.jpeg?auto=compress&cs=tinysrgb&w=600&loading=lazy"   alt=''  sizes='30vw' fill className='object-cover rounded-md'/>
        </div> */}
      </div>
    </div>
  )
}

export default ProductImages
