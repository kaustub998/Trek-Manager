import React, { lazy, Suspense, useState} from 'react'
import {Link} from "react-router-dom"

import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'

const Slider = lazy(() =>
  import("./Slider").then(module => {
    return {default : module.Slider}
  })
)

export const Places = ({ children : treks, slide } ) => {

    let len = treks.length

    const [index, setindex] = useState(0);

    const [hover, sethover] = useState(false)

    let enter = () => {
        sethover(true);
        
      }
    
    let exit = () => {
        sethover(false);

    }

    let source_image = treks[index].image;
    
    let previous = () => {
        if(index===0){setindex(len-1)}
        else{setindex(index-1)}
        
    };

    let next = () => {
    if(index===(len-1)){setindex(0)}
    else{setindex(index+1)}
    };    

    

  return (
    
        <div className={`relative bg-[#f0f4f6]`}>

            <div className='flex flex-col border-2 w-[80%] lg:max-w-[70%] mx-auto text-justify text-[#5b7542] transition-transform ease-out duration-500' onMouseEnter={enter} onMouseLeave={exit}>

                <div className='w-full h-[20%] md:h-[400px]'>

                    <Suspense>
                        <Slider slide = {hover}>
                            {source_image.map((img) => {
                            return <img src={img} loading='lazy' alt={treks[index]['alt']} className=' w-full object-cover object-bottom'  />
                            })}
                        </Slider>  
                    </Suspense>

                </div>
                
                <div className="w-[85%] lg:w-[70%] mx-auto z-10">
                    <Link to={`/TrekDescription${treks[index]['title']}`}><p className="text-xl sm:text-3xl md:text-5xl pt-8 font-medium">{treks[index]['title']}</p></Link>
                    <p className='text-lg sm:text-xl md:text-2xl py-4 pb-8'>{treks[index]['desc']}</p>
                </div>

            </div>

            <div className=" absolute mx-auto w-full lg:w-[85%] inset-0 flex justify-between p-2  ">
                <button  onClick={previous} className="inline bg-inherit rounded-full text-gray-800 hover:scale-150 opacity-20 hover:opacity-80 duration-300">
                    <FaArrowLeft size={30}/>
                </button>

                <button  onClick={next} className="inline rounded-full bg-inherit text-gray-800 hover:scale-150 opacity-20 hover:opacity-80 duration-300">
                    <FaArrowRight size={30}/>
                </button>

            </div>

            <div className="absolute w-full py-2 opacity-60">
                <div className="flex items-center justify-center gap-2">
                {treks.map((_, i) => (
                    <div className={`transition-all w-2 h-2 bg-black ${index === i ? "p-1" : "bg-opacity-50"}`}/>
                ))}
                </div>
            </div>
            
        </div>
  )
}
