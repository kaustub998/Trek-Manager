import React from 'react'
import { useParams } from 'react-router-dom'
import "./TrekDescription.css"

export const TrekDescription = () => {
  const params = useParams();

  let desc = {
      title: "Annapurna Base Camp",
      description: "Annapurna Base Camp Trek probably the best legendary and classical treks in the world offers breathe stopping Mountain View, give opportunity to experience the typical Nepali village, local people and their way of living traditional life in Himalaya of Nepal. The Annapurna Base Camp route goes passing through spectacular and tranquil landscapes, charming Gurung and Magar villages, lush green Rhododendron, bamboo and alpine forests to the trip’s last and final destination, Annapurna Base Camp at the height of 4130m (13546ft.)",
      pic: "https://excitingnepal.com/wp-content/uploads/2019/06/annapurna-base-camp-trek-map.jpg",

      route:[
        {
          city:[
            {
              city_name:"",
              City_viewpoint:"",
              accomodation:"" 
            },
            {
              city_name:"",
              City_viewpoint:"",
              accomodation:"" 
            }
          ],
        },
        {
          city:[
            {
              city_name:"",
              City_viewpoint:"",
              accomodation:"" 
            },
            {
              city_name:"",
              City_viewpoint:"",
              accomodation:"" 
            }
          ],
        }
      ]

  };

  
    let cities = [
      "ghandruk", "chhomrong" , "sinuwa" , "bamboo" , "dovan" , "Himalaya" , "Deurali" , "Machhapuchhure Base Camp" , 
      "ABC"
  ];

  return (
    <>
    <div>
      <img src={desc.pic} alt="" />

      <p className='text_area'>{params.title}</p> 
    </div>
    </>
  )
}
