import React from 'react'
import { useParams } from 'react-router-dom'
import "./TrekDescription.css"

export const TrekDescription = () => {
  const params = useParams();
  
  return (
    <div>
      {params.title}
      TrekDescription
    </div>
  )
}
