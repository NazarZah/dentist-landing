import React, { useState } from 'react';
import clinic from './clinic-test.jpg';
import './about.css';
import Modal from '../ModalWindow/Modal';

function About() {

  const [modelActive, setModalActive] = useState(false);
  const [inputName, setInputName] = useState('');
  const [inputTel, setInputTel] = useState('');
  const [inputComment, setInputComment] = useState('');
  const [doctor, setDoctor] = useState('Руслан');

  return (
      <div id='aboutus'>
          <h1 className='clinic-title'>Філософія клініки dr. Zakhariia</h1>
          <div className='clinic-info'>
                  <img src={clinic} alt='clinic' className='clinic-img' />
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
        <form method='#' action='#' id='form'>
          <h1 className='modal-title'>Запишись на візит онлайн</h1>
          <div className="form-group">
            <input
              type="text"
              id="name"
              name='name'
              placeholder="Ваше ім'я"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />
            <input
              type="tel"
              id="phone"
              placeholder="Ваш номер телефону"
              name='tel'
              value={inputTel}
              onChange={(e) => setInputTel(e.target.value)}
            />
          </div>
          <div className="form-group">
            <select id="select-doctor"
              className='select-doctors'
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
            >
              <option value="option1">Руслан</option>
              <option value="option2">Зоряна</option>
              <option value="option3">Віра</option>
            </select>
          </div>
          <div className="form-group">
            <textarea
              id="comment"
              placeholder="Ваш коментар"
              name='comment'
              value={ inputComment}
              onChange={(e) => setInputComment(e.target.value)}
            >
              </textarea>
          </div>
          <button type="button">
            Надіслати
          </button>
        </form>
      </Modal>
    </div>
  )
}


export default About;


