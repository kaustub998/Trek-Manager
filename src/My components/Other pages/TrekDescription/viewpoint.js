import React from 'react'

export const ViewPoint = ({cvp_desc}) => {
  return (
    <div id='vp_frame'>
        <div id='vp_name' className='vp'>{cvp_desc.cvp_name}</div>
        <div id='vp_details' className='vp'>{cvp_desc.cvp_details}</div>
    </div>
  )
}
