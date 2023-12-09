import React from 'react';
import './doctors.css';
import zoriana from './zoriana.jpeg';

const dataDoctors = [
  {
    img: zoriana,
    text: `Lorem ipsum dolor sit amet consectetur 
    adipisicing elit.Quibusdam, aliquid sit ratione tempora iste inventore 
    a in culpa vitae id sapiente et doloribus.Quo quasi consequatur ut voluptatum atque corporis!`,
    name: 'Лікар Ортодонт Зоряна',
  },
  {
    img: zoriana,
    text: `Lorem ipsum dolor sit amet consectetur 
    adipisicing elit.Quibusdam, aliquid sit ratione tempora iste inventore 
    a in culpa vitae id sapiente et doloribus.Quo quasi consequatur ut voluptatum atque corporis!`,
    name: 'Лікар Стоматолог Руслан',
  },
   {
    img: zoriana,
    text: `Lorem ipsum dolor sit amet consectetur 
    adipisicing elit.Quibusdam, aliquid sit ratione tempora iste inventore 
    a in culpa vitae id sapiente et doloribus.Quo quasi consequatur ut voluptatum atque corporis!`,
    name: 'Лікар Дитячої Cтоматології Віра',
  },
]

function Doctors () {
  return (
    <div id='doctors'>
      <h1 className='title'>Наші Лікарі</h1>
      <section className='doctor-wrapper'>
        {dataDoctors.map((item, index) => (
          <div className='doctor-item' key={index}>
          <img src={item.img}
            alt='Doctor Zoriana'
              className='doctor-img'
              width='300'
              height='500'
          />
            <h2 className='doctor-position'>{ item.name}</h2>
            <p className='doctor-description'>{item.text }</p>
      </div>
        ))}
      </section>
    </div>
  )
}



export default Doctors;