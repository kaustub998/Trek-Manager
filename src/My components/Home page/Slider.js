import React,  { useState, useEffect}  from 'react'

export const Slider = ({ children : source_image, slide }) => {

    let len=(source_image).length;
    const [img_index, setimg_index] = useState(0);

    useEffect(() => {
        if(len > 1){
            if(slide === true || window.innerWidth < 1000){
                setTimeout(() => {
                    if(img_index===(len-1))
                        {setimg_index(0)}
                    else
                        {setimg_index(img_index+1)}
            }, 1000)
            }
            
        }
        else
        {
            setimg_index(0)
        }
    },[len, img_index, slide]);
    

  return (
    <div className='relative max-w-[1000px] h-[20%] md:h-[400px] overflow-hidden' >
        <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${img_index * 100}%)` }} >
        {source_image}
      </div>

        <div className="absolute bottom-0 w-full py-2 opacity-90">
            <div className="flex items-center justify-center gap-2">
            {source_image.map((_, i) => (
                <div className={`transition-all w-2 h-2 bg-black rounded-full ${img_index === i ? "p-1" : "bg-opacity-50"}`}/>
            ))}
            </div>
        </div>

    </div>
  )
}
