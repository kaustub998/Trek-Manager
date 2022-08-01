import React from 'react'
import { ViewPoint } from './viewpoint'
import {Accomodation} from "./accomodation"

export const City = ({city_details}) => {
    let cvp_details=city_details.city_viewpoint;
  return (
    <div>
        <div>{city_details.city_name}</div>
        <div>
            <div>{city_details.city_desc}</div>
            <div><img src={city_details.city_pic} alt="" /></div>
        </div>
        <div>
            {}
        </div>
        <div></div>
    </div>
  )
}
