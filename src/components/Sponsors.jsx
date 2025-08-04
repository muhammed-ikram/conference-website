import React from 'react'
import logo from '../assets/conference.jpeg'
import logo1 from '../assets/AICTE_logo.png'
import logo2 from '../assets/SRIT_SPONSOR.png'

function Sponsors() {
  return (
    <div className='sponsors' >
      <img className='image-sponsors'src={logo} alt="sponsors" />
      <img className='image-sponsors'src={logo1} alt="sponsors" />
      <img className='image-sponsors'src={logo2} alt="sponsors" />
    </div>
  )
}

export default Sponsors
