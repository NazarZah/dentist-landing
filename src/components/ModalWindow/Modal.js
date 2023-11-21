import React from 'react';
import './modal.css';
import { IoMdClose } from "react-icons/io";

function Modal({active, setActive, children}) {
  return (
      <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
          <div className={active ? 'modal-content active' : 'modal-content'} onClick={e => e.stopPropagation()}>
              <IoMdClose className='icon-close' onClick={() => setActive(false)}/>
              <div className='children-wrapper'>
                { children }
              </div>
          </div>  
    </div>
  )
}


export default Modal;
