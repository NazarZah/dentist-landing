import React, { memo } from 'react';
import './modal.css';
import closeIcon from './close-icon.svg';

function Modal({active, setActive, children}) {
  return (
      <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
          <div className={active ? 'modal-content active' : 'modal-content'} onClick={e => e.stopPropagation()}>
              <img alt='icon-close' src={closeIcon} className='close-icon' onClick={() => setActive(false)}/>
              <div className='children-wrapper'>
                { children }
              </div>
          </div>  
    </div>
  )
}


export default memo(Modal);
