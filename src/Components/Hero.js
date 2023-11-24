import React from 'react'
import Navbar from './Navbar'
import img1 from '../Image/rate-ship.svg'
import img2 from '../Image/noun-find-package-4109242.svg'
import img3 from '../Image/noun-location-6289883.svg'

const Hero = () => {
  return (
    <div>
      <Navbar/>
      <div className='hero-container'>
        <h1 className='heading'>Ship, manage, track, deliver</h1>
        
        <div className='operations'>
          <a href=''>
            <div className='rate box'>
              <img src={img1} alt="" /> 
              RATE & TRANSIT TIMES
            </div>
          </a>
          <a href=''>
            <div className='track box'>
              <img src={img2} alt="" /> 
              TRACT
            </div>
          </a>
          <a href=''>
            <div className='ship box'>
              <img src={img3} alt="" /> 
              SHIP
            </div>
          </a>
        </div>

        <div className='track-holder'>
          <input type='text' placeholder='TRACKING ID'></input>
          <input type='submit' value={'TRACK'}></input>
        </div>
        <div className='fao'>
          <a href=''>MUTIPLE TRACKING NUMBER </a> |
          <a href=''> NEED HELP?</a>
        </div>
      </div>
    </div>
  )
}

export default Hero