import React, { useState, useRef } from 'react';
import hamburgerMenu from './burger-menu.svg';
import closeIcon from './close-icon.svg';
import instagramLogo from './instagram-logo.svg';
import facebookLogo from './facebook-icon.svg'
import logo from "./logo.png"
import './header.css'

function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const startX = useRef(null);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (startX.current === null) return;

    const currentX = e.touches[0].clientX;
    const deltaX = currentX - startX.current;

    if (deltaX < -50) {
      setIsOpen(false);
      startX.current = null;
    }
  };

  const handleMenuButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const menuIcon = isOpen ? (
    <img
    src={closeIcon}
    alt='closeIcon' 
    className='header-menu-button-close'
    onClick={handleMenuButtonClick}
  />
) : (
    <img
    src={hamburgerMenu}    
    alt='hamburgerMenu'
    className='header-menu-button'
    onClick={handleMenuButtonClick}
  />
);

  return (
    <div className='wrapper'>
          <header className='nav' ref={navRef} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
        <a href="/" className='logo-container'>
            <img src={logo} alt='logo' className='logo' width='36' height='30' />
            <h1>Стоматологія dr. Захарія</h1>
              </a>
              <nav className={`header_nav ${isOpen ? 'active' : ''}`}>
                  <img src={logo} alt='logo' className='logo-button-menu' />
          <ul className='nav-list'>
            <li className='nav-item'>
            <a href='https://www.instagram.com/dr.zoriana_zakhariia/'>
            <img src={instagramLogo } alt='instagram' className='icons-header'/>
            </a>
            </li>
            <li className='nav-item'>
              <a
                      href='https://www.facebook.com/people/%D0%A1%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%8F-%D0%B4%D0%BE%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D0%97%D0%BE%D1%80%D1%8F%D0%BD%D0%B8-%D0%97%D0%B0%D1%85%D0%B0%D1%80%D1%96%D1%97/100071928591878/'>
                      <img alt='facebook' src={facebookLogo} className='icons-header'/>
              </a>
            </li>
            <li className='nav-item'> <a href='/#aboutus'> Про нас</a></li>
            <li className='nav-item'> <a href='/#doctors'> Лікарі </a></li>
            <li className='nav-item'> <a href='/#reviews'> Відгуки </a></li>
            <li className='nav-item'> <a href='#contacts'> Контакти </a></li>
          </ul>
              </nav>
              {menuIcon}
      </header>
    </div>
  );
}



export default Header;
