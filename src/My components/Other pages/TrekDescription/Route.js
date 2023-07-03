import React from 'react'
import {City} from "./city"
import { Package } from './package'

export const Route = ({route_details}) => {
  return (
    <div className='route_details'>
      <div id="route_name">{route_details.route_name}</div>
      <div className="route_box">
        <div id="route_desc">{route_details.route_desc}</div>
        <div id="route_pic_container"><img src={route_details.route_pic} alt="" id='route_pic'/></div>
      </div>
      <div className="packages">
        Trek Packages
        <div id="package_frame">
          {route_details.packages.length?route_details.packages.map((p)=>{
            return <Package details={p}/>
          }):console.log("cant run")}
        </div>
      </div>
      <div id="city_in_the_route">Cities in the Route</div>
      <div id='city_frame'>
        {
        route_details.city.map((cities)=>{
        return <City city_details={cities} />})
        }
      </div>
    </div>
  )
}
