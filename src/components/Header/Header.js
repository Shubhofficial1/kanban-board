import React from 'react'
import { Plus } from 'react-feather'
import './Header.css'

const Header = () => {
  return (
    <header className='header_container noselect'>
      <div className='header_left'>
        <p>Hi Shubham</p>
        <h3>Welcome Back !</h3>
      </div>
      <div className='header_search'>
        <input placeholder='type to Search' />
      </div>

      <div className='header_profile'>
        <img
          src={
            'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          }
          alt='Profile'
        />
      </div>
    </header>
  )
}

export default Header
