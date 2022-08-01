import React from 'react'

export const Transport = ({medium_desc}) => {
  return (
    <div>
        <div>{medium_desc.transport_medium}</div>
        <div>{medium_desc.origin_city}</div>
        <div>{medium_desc.cost}</div>
    </div>
  )
}
