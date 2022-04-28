import React from 'react'
import './Content.css'
import Mobile from '../../images/Mobile.svg'
import ImageArrow from '../../images/ImageArrow.svg'
import rectangle from '../../images/Rectangle.svg'
import cyclegif from '../../images/CyclingGIF.gif'
import scooter from '../../images/Scooter 1.svg'
// import Ellipse from '../../images/Ellipse9.png'

const Content = () => {
    return (
        <div>
            <div className='header'>
                <img src={ImageArrow} className='imagearrow' alt='imagearrow' />
                <div className='text col-7'>
                    <h1 className='text-first text-nowrap'>Moving India <br />towords a <br /><div className='content-text-color'>sustainable future</div> </h1>
                </div>
                <div className='image col-5'>
                    <img src={Mobile} className='mobileimage' alt="mobileImage" />
                </div>
            </div>
            <div className='row'>
                <div className='cycle col-6'>
                    <img src={rectangle} className='rectangle-image' />
                    <img src={cyclegif} className='cycle-image' />
                </div>
                <div className='scooter col-6'>
                    <img src={scooter} className='scooter' />
                </div>
            </div>
        </div>
    )
}

export default Content