import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import photo1 from './1.jpeg';
import photo2 from './2.jpeg';
import photo3 from './3.jpeg';
import './slides.css';

const photos = [
    {
        id: 1,
        name: 'Photo 1',
        url: photo1,
    },
    {
        id: 2,
        name: 'Photo 2',
        url: photo2,
    },
    {
        id: 3,
        name: 'Photo 3',
        url: photo3,
    }
]


const SlideShow = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    className: 'slides'
  };

  return (
    <Slider {...settings}>
          {photos.map((photo) => {
              return (
                  <div key={photo.id} >
                      <img src={ photo.url} alt={photo.name} className='slides-img' />
              </div>
          )
      })}
    </Slider>
  );
};

export default SlideShow;
