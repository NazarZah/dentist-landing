import React from 'react';
import './services.css';
import dentist from './dentist.avif';
import ordontia from './ordontia.avif';
import kids from './kid_dentistry.avif';

const dataServices = [
    {
        img: dentist,
        text: 'Стоматологічне Лікування',
    },
    {
        img: ordontia,
        text: 'Ортодонтія',
    },
    {
        img: kids,
        text: 'Дитяча Стоматологія',
    },
]

function Services() {
  return (
      <div>
          <div className='services-wrapper'>
              {dataServices.map((item, index) => (
                  <div className='service-item' key={index}>
                  <img src={item.img} alt='dentist' className='service-img' />
                      <p className='service-description'>{ item.text }</p>
              </div>  
              ))}
              
          </div>
    </div>
  )
}


export default Services;
