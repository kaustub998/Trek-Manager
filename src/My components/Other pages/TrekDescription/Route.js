import React from 'react'
import "./Route.css"
import {City} from "./city"

export const Route = ({route_details}) => {
  return (
    <div className='route_route_details'>
      <div>{route_details.route_name}</div>
      
      <div>{route_details.route_desc}</div>
      <div>
        {
        route_details.city.map((cities)=>{
        return <City city_details={cities} />})
        }
      </div>
    </div>
  )
}
