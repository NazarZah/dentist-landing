import React, { useRef } from 'react';
import { FaArrowDown } from "react-icons/fa";

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
                  <FaArrowDown className={`accordion-arrow ${isOpen ? 'active' : ''}`} />
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


export default AccordionItem;
