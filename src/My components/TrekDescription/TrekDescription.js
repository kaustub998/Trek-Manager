import React from 'react'
import { useParams } from 'react-router-dom'
import "./TrekDescription.css"
import {desc} from "./trek_details"

export const TrekDescription = () => {
  const params = useParams();

  return (
    <>
    <div>
      <img src={desc.pic} alt="" />
      <p className='text_area'>{desc.description}</p> 
    </div>
    </>
  )
}
