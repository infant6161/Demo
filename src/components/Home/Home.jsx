import React from 'react';
import "./Home.css"
import { Carousel } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="home">
            
            <Carousel style={{width:"900px", marginLeft:"250px", marginTop:"20px"}}>
  <Carousel.Item style={{height:"300px"}}>
    <img
      className="d-block w-100"
      src="http://www.trbimg.com/img-5a7a74e5/turbine/la-fi-spacex-falcon-heavy-launch-20180206"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item  style={{height:"300px"}}>
    <img
      className="d-block w-100"
      src="https://free4kwallpapers.com/uploads/originals/2020/06/01/-spacelaunch-from-spacex-wallpaper.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item  style={{height:"300px"}}>
    <img
      className="d-block w-100"
      src="https://cdn.wallpapersafari.com/23/77/DP60WY.jpeg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

      <div className="para">
        <b> DESCRIPTION:</b> <p className='para1'>SpaceX is developing a satellite internet constellation named Starlink to provide commercial internet service. In January 2020, the Starlink constellation became the largest satellite constellation ever launched, and as of April 2022 it comprises over 2,100 small satellite in orbit.[7] Starlink has been criticized by astronomers due to concerns over light pollution and long term danger from orbital debris resulting from possible space collisions. The company is also developing Starship, a privately funded, fully reusable, super heavy-lift launch system for interplanetary and orbital spaceflight. Starship is intended to become SpaceX's primary orbital vehicle once operational, supplanting the existing Falcon 9, Falcon Heavy, and Dragon fleet. Starship will have the highest payload capacity of any orbital rocket ever built on its debut, scheduled for 2022 pending regulatory approval.</p>
      </div>
             
        </div>
    );
};

export default Home;