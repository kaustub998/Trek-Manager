import React from 'react'
import { Places } from './Places'

import ABC1 from "../Images/ABC1.jpg"
import ABC2 from "../Images/ABC2.jpg"
import ABC3 from "../Images/ABC3.jpg"
import ABC4 from "../Images/ABC4.jpg"

import tilichopic from "../Images/Tilicho.jpg"
import tilichopic1 from "../Images/Tilicho1.jpg"
import tilichopic2 from "../Images/Tilicho2.jpg"
import tilichopic3 from "../Images/Tilicho3.jpg"

export const Carousel = (props) => {

  let treks=[
    {
      title: "Annapurna Base Camp",
      image: [ABC1,ABC2,ABC3,ABC4] ,
      desc:"From ancient kingdoms to majestic mountain vistas, trek through the breathtaking Himalayan landscape of the Annapurna Ranges. Pass awe-inspiring glaciers, stay on the banks of pristine rivers, cross mountain pastures, dip into natural hot springs and encounter mule trains carrying supplies to remote villages.",
      alt: 'abc',
    },
    {
      title: "Tilicho Lake",
      image: [tilichopic,tilichopic1,tilichopic2,tilichopic3],
      desc:"On this 12-day journey through Nepal, experience the scenic and challenging Tilicho Lake Trek,one of the highest lakes in the world. Start in Kathmandu to get acquainted with the country, and do some sightseeing. Then, begin the journey through the Annapurna region.",
      alt: 'tilicho',
    },
  ];

  return (
    <div className='bg-[#f0f5f8] px-8 pb-8' >

      <Places >
        {treks.map((trek) => {
          return trek
        })}
      </Places>
      
    </div>
  )
}
