import React  from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import photo1 from './1.avif';
import photo2 from './2.avif';
import photo3 from './3.avif';
import photo4 from './4.avif';
import photo5 from './5.avif';
import photo6 from './6.avif';
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
