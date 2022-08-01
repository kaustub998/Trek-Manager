import React from 'react'
import "./package.css"

export const Package = ({details}) => {
  return (
    <div>
        <div>
            <div id="package_name" className='package_text'>{"Package Name: "+details.package_name}</div>
            <div id="package_cost" className='package_text'>{"Package Cost: "+details.package_cost}</div>
        </div>
        <div  id='package_details' className='package_text'>Details</div>
        <div className="package_desc package_text">{details.package_details.map((day)=>{
            return (
            <>
            <div>{day}</div>
            </>)
        })}</div>
        <div id="package_guide">
            {details.guide.map((p)=>{
                return(<>
                <div id='guides_text' className='package_text'>Guides</div>
                <span className="guide_name package_text" >{p.guide_name}</span>
                <span className="guide_number package_text">{"Number: "+p.guide_number}</span>
                </>)
            })}
        </div>
    </div>
  )
}
