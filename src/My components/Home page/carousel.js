import React, {lazy , Suspense} from 'react'

import ABC1 from '../Images/ABC1.jpg'
import ABC2 from '../Images/ABC2.jpg'
import ABC3 from '../Images/ABC3.jpg'
import ABC4 from '../Images/ABC4.jpg'

import tilichopic from '../Images/Tilicho.jpg'
import tilichopic1 from '../Images/Tilicho1.jpg'
import tilichopic2 from '../Images/Tilicho2.jpg'
import tilichopic3 from '../Images/Tilicho3.jpg'

// const ABC1 = lazy(() => import('../Images/ABC1.jpg'))
// const ABC2 = lazy(() => import('../Images/ABC2.jpg'))
// const ABC3 = lazy(() => import('../Images/ABC3.jpg'))
// const ABC4 = lazy(() => import('../Images/ABC4.jpg'))

// const tilichopic = lazy(() => import('../Images/Tilicho.jpg'))
// const tilichopic1 = lazy(() => import('../Images/Tilicho1.jpg'))
// const tilichopic2 = lazy(() => import('../Images/Tilicho2.jpg'))
// const tilichopic3 = lazy(() => import('../Images/Tilicho3.jpg'))

const Places = lazy(() =>
  import("./Places").then(module => {
    return {default : module.Places}
  })
)

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

        <Suspense fallback = {<h2>Loading</h2>}>
          <Places >
            {treks.map((trek) => {
              return trek
            })}
          </Places>
        </Suspense>
        
      </div>
 
  )
}
