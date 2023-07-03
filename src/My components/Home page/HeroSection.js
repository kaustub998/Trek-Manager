import React from 'react'
import hero from '../Images/hero_image.jpg'
import picture from "../Images/lets roam nepal.png"

export const HeroSection = () => {
  return (
    <div className='w-full pb-12  overflow-x-clip bg-[#f0f5f8]'> 
    {/* pt-[140px]  sm:pt-12 */}
      <div className='w-full'>

        <div className='w-full h-screen bg-no-repeat bg-cover bg-center bg-blend-overlay bg-black/20' style={{backgroundImage:  `url(${hero})` }}>
          <div className='flex flex-col justify-end text-6xl md:text-7xl lg:text-9xl font-semibold px-8 h-screen w-full object-fill
           text-[#cccce1] pb-16'>
            <h1 className=''>Trek</h1>
            <h1 className=''>Manager</h1>
            <p className='text-4xl font-semibold pt-[50px] border-b-4 pb-2 max-w-[500px]'>Managing Treks Ever since</p>
          </div>
          
        </div>
        
        <div className='flex flex-col-reverse text-xl md:text-3xl px-8 items-center max-w-[1000px] mx-auto '>
          <div>
            <p className="text-justify leading-8 md:leading-10 text-[#5b7542] mx-auto">
              Trekking in the Himalayas opens up new horizons of awareness, blending physical challenge with mental relaxation and a spiritual elation inspired by splendid scenery and heartwarming human encounters. 
              Different trekking routes offer a different range 
              of lengths and difficulties. Some trekking routes are just a day hiking trip and some are very long and high altitude exploration over the mountain pass. 
              It depends on the your own choice to fulfill your dream.
            </p>
            <hr className="mt-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-800 to-transparent opacity-25 dark:opacity-100" />
          </div>
          
          <div className='my-8 sm:m-16'>
              <img src={picture} alt="Lets Roam Nepal" className="w-[400px] sm:w-[1000px] shadow-sm shadow-[#dee3ea]" />
          </div>

        </div>

      </div>
  </div>
  )
}
