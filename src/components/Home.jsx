import React from 'react'
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'


const Home = () => {
  return (
    <div className='background'>
      <Navbar />
      <div class="home-text " >
        <h3>Welcome to Landmark College</h3>
        <h1> Student Portal</h1>
        <p style={{ color: 'white'}} >The purpose of Schools is to prepare students with promise
          to enhance their intellectual, physical, social, emotional, spiritual,
          and artistic growth so that they may realize their power for good
          as citizens</p>
        <a href="#" className="main-login btn btn-light" style={{ borderRadius: '5px' }}>Apply Now</a>
      </div>

    </div>
  )
}

export default Home