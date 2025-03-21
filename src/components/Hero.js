"use client"
/* it needs to be rendered as a client, because it uses react slick (which is a client library component) */

import React from 'react'
import Slider from 'react-slick';
import Slide from './Slide';

const slideData = [
  {
    id:0,
    img:"./banner-1.jpg",
    title:"Trending Item",
    mainTitle:"WOMEN'S LATEST FASHION SALE",
    price:"$20",
    link: "#",
    alt: "",
  },
  {
    id:1,
    img:"./banner-2.jpg",
    title:"Trending accessories",
    mainTitle:"MODERN SUNGLASSES",
    price:"$15",
    link: "#",
    alt: "",
  },
  {
    id:2,
    img:"./banner-3.jpg",
    title:"Sale Offer",
    mainTitle:"NEW FASHION SUMMER SALE",
    price:"$30",
    link: "#",
    alt: "",
  }
]


const Hero = () => {
  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='container mx-auto pt-6 lg:pt-0'>
      <Slider {...settings}>
        {slideData.map(slide => {
          return (
            <Slide key={slide.id} card={slide} />
          )
        })}
      </Slider>
    </div>
  )
}

export default Hero