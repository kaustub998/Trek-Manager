import React from 'react'
import { useParams } from 'react-router-dom'
import "./TrekDescription.css"

export const TrekDescription = () => {
  const params = useParams();

  let desc = {

    destination: {
      title: "Annapurna Base Camp",
      description: "Annapurna Base Camp Trek probably the best legendary and classical treks in the world offers breathe stopping Mountain View, give opportunity to experience the typical Nepali village, local people and their way of living traditional life in Himalaya of Nepal. The Annapurna Base Camp route goes passing through spectacular and tranquil landscapes, charming Gurung and Magar villages, lush green Rhododendron, bamboo and alpine forests.Mt. Annapurna (8091m) of Nepal is the 10th highest mountain in the world and the journey to its base camp, which is at 4130m/13549ft height, is one of the most popular walks on earth. Moreover, we reach our destination via Mt. Machapuchhre (Fishtail) which is revered by the Nepalese for its unique beauty. Furthermore, thanks to the well-groomed itinerary of the Annapurna Base Camp trekking package, it is a popular choice among diverse outdoor enthusiasts, from a solo female traveler to hikers traveling in groups to Nepal.",
      pic1: "https://excitingnepal.com/wp-content/uploads/2019/06/annapurna-base-camp-trek-map.jpg",
      pic2: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/cover-for-Annapurna-Base-Camp-Trek.jpg"
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
    <div className="trekdescription">
        {user_input[0]===searched_desc[0]?
        <div>
        <div className="description_title">{desc.destination.title}</div>
        <div className='description_flex'>
          <div className="description_text">{desc.destination.description}</div>
          <div className="description_pic"><img src={desc.destination.pic2} alt="" id='desc_carousel_pic'/></div> 
        </div> 

        </div>

      :<div>error</div>}
    </div>
  )
}
