import React  from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import photo1 from './1.jpeg';
import photo2 from './2.jpeg';
import photo3 from './3.jpeg';
import photo4 from './4.jpg';
import photo5 from './5.jpg';
import photo6 from './6.jpg';
import './slides.css';

const photos = [
    {
        id: 1,
        name: 'Photo 1',
        url: photo4,
        mobileUrl: photo1,
    },
    {
        id: 2,
        name: 'Photo 2',
        url: photo5,
        mobileUrl: photo2,
    },
    {
        id: 3,
        name: 'Photo 3',
        url: photo6,
        mobileUrl: photo3,
        
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
                      <img src={window.innerWidth < 768 ? photo.mobileUrl : photo.url} alt={photo.name} className='slides-img' />
              </div>
          )
      })}
    </Slider>
  );
};

export default SlideShow;
