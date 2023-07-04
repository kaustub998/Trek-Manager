import React from 'react'

import second_pic from '../Images/second_pic.jpg'

// const second_pic = lazy(() => import ("../Images/second_pic.jpg"))

export const MidPart = () => {

  return (
      <div className="w-full pb-16 bg-[#f0f5f8]">
        <div className="px-8">

          <div className="w-full h-[600px] bg-cover bg-no-repeat flex items-end py-8" style={{backgroundImage:  `url(${second_pic})` }}>
            <p className="text-3xl md:text-4xl lg:text-6xl font-medium p-8 text-[#0f1e32] ">We are There With You <br/>At every step</p>
          </div>

          <div className="max-w-[1000px] text-justify leading-8 md:leading-10 text-[#5b7542] mx-auto">
            <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-800 to-transparent opacity-25 dark:opacity-100 " />

            <div className="flex flex-col  mx-auto justify-center items-center text-justify ">
              <p className="text-3xl md:text-4xl lg:text-6xl text-[#1D3557] border-b-2 font-medium inline border-[#1D3557] pb-4">Popular Treks In Nepal</p>

              <p className="text-xl md:text-2xl lg:text-3xl text-[#5b7542] pt-8">
                Though Nepal has plenty lots of trekking region and every hill offer unique experiences, we are presenting here some of the most popular trekking routes in the Himalayas.
              </p>
            </div>

          </div>
        </div>
        
      </div>
  )
}
