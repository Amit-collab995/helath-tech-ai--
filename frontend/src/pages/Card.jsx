import React from 'react'
import './Card.css'
const hospitals = [
    {
        id: 1,
        name: "AIIMs Nagpur",
        image:'/images/nagpur.webp',
        address: "Saket Nagar, Nagpur, Pune",
        distance: "1.2 km",
        lat:21.035994308253052,
        lng:79.02672579526796,
    },
    {
       id: 2,
    name: "AIIMs Jodhpur",
    image:
      "/images/AIIMS-Jodhpur-1.webp",
    address: "Royal Market, Jodhpur, Rajasthan",
    distance: "2.4 km",
    lat:26.254137320770788,
    lng:72.98482355334286
    },
    {
        id: 3,
    name: "AIIMs Delhi",
    image:
      "/images/AiimsDelhi.jpg",
    address: "Bairagarh, Delhi, Delhi",
    distance: "3.1 km",
    lat:28.56719241644007,
    lng:77.21026161765003
    }
    ,
    {
       id: 4,
    name: "AIIMs Rishikesh",
    image:"/images/rishikesh.jpg",
    address: "Arera Colony, Rishikesh, Utrakhsnd",
    distance: "4.0 km",
    lat:30.078878974914083,
    lng:78.2860086955651
    },
    {
       id: 5,
    name: "AIIMs Bhubaneswar",
    image:
      "/images/bhubaneswar.avif",
    address: "MP Nagar, Bhubaneswar, Bhub",
    distance: "4.8 km",
    lat:20.23183548648508,
    lng:85.77498186401512
    }
    ,
    {
         id: 6,
    name: "AIIMs Patna",
    image:
      "/images/AIIMS-Patna.jpg",
    address: "Karond, Patna, Bihar",
    distance: "5.2 km",
    lat:25.56288,
    lng:85.04132
    }
    ,
    {
          id: 7,
    name: "AIIMS Jammu",
    image:
      "/images/aiims-jammu.jpg",
    address: "Kolar Road, J&K, J&K",
    distance: "6.0 km",
    lat:32.564831031680924,
    lng:75.03642388032355
    }
    ,
    {
         id: 8,
    name: "AIIMs Kalyani",
    image:
      "/images/aiimskalyani.webp",
    address: "Shahpura, Kalyani, West Bengal",
    distance: "6.8 km",
    lat:22.97170090120381,
    lng:88.52648182415768
    }
    ,
    {
    id: 9,
    name: "AIIMs Gujrat",
    image:
      "/images/maxresdefault.jpg",
    address: "Habibganj, RajKot, Gujrat",
    distance: "7.3 km",
    lat:22.34357980654994,
    lng:70.74640530873127
    
  },
    ,
   {
    id: 10,
    name: "AIIMs Bhopal",
    image:
      "/images/campus.webp",
    address: "Hoshangabad Road, Bhopal, MP",
    distance: "8.0 km",
    lat:23.214496108842116,
    lng:77.46915743642549
  },

]

const Card = () => {
  return (
    <div className="home-container">
      <h1 className='card-heading'>Top AIIMS Hospitals</h1>
      <div className="hospital-grid">
        {hospitals.map((item) => (
          <div key={item.id} className="hospital-card">
            <img
              className="hospital-image"
              src={item.image}
              alt={item.name}
            />

            <div className="hospital-content">
              <a
                className="hospital-name"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  item.name + " " + item.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>

              <p className="hospital-address">{item.address}</p>
            </div>

            <span className="hospital-distance">
              {item.distance}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card