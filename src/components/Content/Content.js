import React from 'react'
import './Content.css'
import Mobile from '../../images/Mobile.svg'
import ImageArrow from '../../images/ImageArrow.svg'
import rectangle from '../../images/Rectangle.svg'
import cyclegif from '../../images/CyclingGIF.gif'
import scooter from '../../images/Scooter 1.svg'
// import Ellipse from '../../images/Ellipse9.png'
import { Container, Row, Image, Col } from 'react-bootstrap'

const Content = () => {
    return (
        <Container fluid>
            <div className="header">

                <Row className='mt-5'>
                    <Col >
                        <Image src={ImageArrow} className="imagearrow" />
                    </Col>
                </Row>
                <Row className='mt-5' xs={2} md='auto' lg='auto'>
                    <Col >
                        <h1 className='text-first text-nowrap'>Moving India <br />towords a <br /><div className='content-text-color'>sustainable future</div> </h1>
                    </Col>
                    <Col>
                        <Image src={Mobile} className='mobileimage' alt="mobileImage" />
                    </Col>
                    <Col className='cycle'>
                        <Image src={rectangle} className='rectangle-image' />
                        <Image src={cyclegif} className='cycle-image' />
                    </Col>

                    <Col className=' scooter'>
                        <Image src={scooter} />
                    </Col>

                </Row>
            </div>
        </Container>

    )
}

export default Content