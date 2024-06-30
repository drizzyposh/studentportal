import React from 'react'
import { Link } from 'react-router-dom'
import navData from './NavData'

const Navbar = () => {

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        {navData.map((item) => (
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active home" aria-current="page" href="#">{item.name}</a>
              </li>
            </ul>
          </div>
        ))}
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <span class="navbar-text signup">
            <Link to='/login' className='signup1'>Log in</Link>
          </span>
        </div>
      </nav>
    </div>
  )
}

export default Navbar


