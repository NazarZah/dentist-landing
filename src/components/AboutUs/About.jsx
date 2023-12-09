import React, { useState } from 'react';
import Form from './Form';
import clinic from './clinic.jpeg';
import './about.css';
import Modal from '../ModalWindow/Modal';

function About() {

  const [modelActive, setModalActive] = useState(false);
  const [formData, setFormData] = useState({
    inputName: '',
    inputTel: '',
    inputComment: '',
    doctor: 'Руслан',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Логіка для обробки відправки форми
    console.log('Form submitted:', formData);
  };
  return (
      <div id='aboutus'>
          <h1 className='clinic-title'>Філософія клініки dr. Zakhariia</h1>
          <div className='clinic-info'>
                  <img src={clinic} width='500' height='300' alt='clinic' className='clinic-img' />
              <div className='clinic-description'>
                  <h2 className='title-slogan'>Клініка dr. Zakhariia - Ваша посмішка - Ваш престиж</h2>
                  <p className='clinic-description'>Ми цінуємо час та потреби наших клієнтів,
                  право на гарантію та впевненість у тому,
                  що для їхнього лікування використовують найкращі рішення
                  у стоматології. Всього година – і ти можеш отримати 3D-діагностику, цифровий дизайн майбутньої усмішки, гігієну ротової порожнини. Змінити колір, форму зубів, вигляд усмішки (відбілювання, вкладки, вініри) за лічені години дозволяє весь спектр цифрової CAD/CAM та 3D стоматології. У клініці RIKOTA ти можеш пройти одноетапну імплантацію за один візит чи змінити прикус за допомогою брекетів та елайнерів. Ми поважаємо наших клієнтів та не застосовуємо застарілих методик, таких як металокерамічна коронка чи лікування без анестезії.
                  </p>
                  <button className='btn' onClick={() => setModalActive(true)}>Записатися на прийом</button>
              </div>
      </div>
      <Modal active={modelActive} setActive={setModalActive}>
        <Form
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleFormSubmit}
        />
      </Modal>
    </div>
  )
}


export default About;


