import React from 'react'
import './Home.css'
// <img src={img} className='logo'></img>
const Home = () => {
  return (<div>
    <div className='nav'>
    <ul className='ul'>
    <li>Home</li>
    <li>Online Fees Payment</li>
    <li>Admission</li>
    <li>Contact</li>
    <li>Email</li>
    </ul></div>
    <div className='nav2'>
    <img src={img} className='image'></img>
    </div>
    </div>
  )
}

export default Home