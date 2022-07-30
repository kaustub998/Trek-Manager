import React from 'react'
import { useParams } from 'react-router-dom'
import "./TrekDescription.css"

export const TrekDescription = () => {
  const params = useParams();

  let desc = {

    destination: {
      title: "Annapurna Base Camp",
      description: "Annapurna Base Camp Trek probably the best legendary and classical treks in the world offers breathe stopping Mountain View, give opportunity to experience the typical Nepali village, local people and their way of living traditional life in Himalaya of Nepal. The Annapurna Base Camp route goes passing through spectacular and tranquil landscapes, charming Gurung and Magar villages, lush green Rhododendron, bamboo and alpine forests to the trip’s last and final destination, Annapurna Base Camp at the height of 4130m (13546ft.)",
      pic: "https://excitingnepal.com/wp-content/uploads/2019/06/annapurna-base-camp-trek-map.jpg"
    }, 

    route:[
      {
        city:[
          {
            city_name:"Ghandruk",
            City_viewpoint:[
              {
                cvp_name:"",
                cvp_details:""
              },
              {
                cvp_name:"",
                cvp_details:""
              }
            ],
            accomodation:[
              {
                hotel_name:"",
                phone_number:"",
                email:""
              },
              {
                hotel_name:"",
                phone_number:"",
                email:""
              }
            ]
          },
          {
            city_name:"Chhomrong",
            City_viewpoint:[
              {
                cvp_name:"",
                cvp_details:""
              },
              {
                cvp_name:"",
                cvp_details:""
              }
            ],
            accomodation:[
              {
                hotel_name:"",
                phone_number:"",
                email:""
              },
              {
                hotel_name:"",
                phone_number:"",
                email:""
              }
            ]
          }
        ],
      },
    ],
    season:["September","October"],
    Guides:[
      {
        guide_name:"aashish pant",
        packages:[
          {
            package_name: "",
            package_cost:"",
            package_details:""
          },
          {
            package_name: "",
            package_cost:"",
            package_details:""
          },
        ]
      },
      {
        guide_name:"paras pujara",
        packages:[
        {
          package_name: "",
          package_cost:"",
          package_details:""
        },
        {
          package_name: "",
          package_cost:"",
          package_details:""
        },
      ]
      }
    ],
    transport:[
      {
        transport_medium:"car",
        destination_city:"Ghandruk",
        origin_city:["kathmandu","pokhara"],
        cost:["10000","1000"]
      },
      {
        transport_medium:"bus",
        destination_city:"Ghandruk",
        origin_city:["kathmandu","pokhara"],
        cost:["10000","1000"]
      }
    ]
};

let user_input = params.title.toLocaleLowerCase().split("");
let searched_desc = desc.destination.title.toLocaleLowerCase().split("");

  return (
    <>
    {user_input[0]===searched_desc[0]?
    <div>
    <img src={desc.destination.pic} alt="" />
    <p className='text_area'>
    </p> 
    </div>
  :<div>error</div>}
    
    </>
  )
}
