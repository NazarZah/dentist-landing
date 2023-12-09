import React, { useRef, memo } from 'react';
// import { FaArrowDown } from "react-icons/fa";
import arrow from './arrow.svg';

function AccordionItem({ item, isOpen, onClick }) {
    
    const itemRef = useRef(null);

  return (
      <div>
          <li className='accordion-item'>
              <button
                  className='accordion-header'
                  onClick={() => onClick()}
              >
                  {item.quastion}
                  <img src={arrow} alt='arrow' className={`accordion-arrow ${isOpen ? 'active' : ''}`} />
              </button>
              <div
                  className="accordion-collapse"
                  style={
                      isOpen ? {height: itemRef.current.scrollHeight } : {height: '0px'}
                  }
              >
                      <div className='accordion-body' ref={itemRef}>{item.answer }</div>
                  </div>
              </li>
    </div>
  )
}


export default memo(AccordionItem);
