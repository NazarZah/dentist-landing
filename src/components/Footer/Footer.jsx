import React from 'react';
import logo from './logo.png';
import './footer.css';
import addressIcon from './address.svg';
import telIcon from './telephone.svg';


 function Footer() {
  return (
      <div id='contacts'>
          <footer className='footer'>
              <div className='info'>
              <div className='info-items'>
              <img src={logo} alt='logo' className='logo_img' width='96'  />
              <p className='slogan'>Ваша посмішка - Ваш престиж</p>
              </div>
                  <div className='info-items'>
                    <img src={telIcon} alt='telIcon' width='30px' className='icons tel'/>
                 <p className='item'><a href="tel:+380982920987">+380 (98) 292 09 87(Віра)</a></p>
                  <p className='item'><a href="tel:+380965403233">+380 (96) 540 32 33(Зоряна)</a></p>
                  <p className='item'><a href="tel:+380679415617">+380 (67) 941 56 17(Руслан)</a></p>
                  </div>
              <div className='info-items'>
                <img src={addressIcon} alt='address-icon' width='30px' className='icons'/>
                      <p><a href='http://surl.li/myvqf'>м. Дрогобич, вулиця Михайла Грушевського, 19</a></p>
                  </div>
              </div>
              <div className="copyright">
                    <p>© 2023 Стоматологія dr. Захарія</p>
                </div>
          </footer>
    </div>
  )
}


export default Footer;

