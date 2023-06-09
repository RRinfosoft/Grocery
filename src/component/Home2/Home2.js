import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import EndCardParent from '../Home/EndCardParent/EndCardParent';
import EndColumn from '../Home/EndColumn/EndColumn';
import HomeCarousel from '../Home/HomeCarousel/HomeCarousel';
import HomeColumn from '../Home/HomeColumn/HomeColumn';
import HomeProCard from '../Home/homeprocard/HomeProCard';
import './Hom.css'


const Home2 = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>

          <div className='caro-div'>
            <img className='set-caro' src='image/ban2.jpg' />
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='caro-div'>
            <img className='set-caro' src='image/ban3.jpg' />
          </div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='caro-div'>
            <img className='set-caro' src='image/ban.jpg' />
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <HomeProCard />
      <HomeColumn />
      <HomeCarousel />
      <EndColumn />
      <EndCardParent />

    </>
  )
}

export default Home2