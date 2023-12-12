import React, {useState} from 'react';
import './accordion.css';
import AccordionItem from './AccordionItem';

const arr = [
    {
        quastion: 'Як довго ви вже працюєте в галузі стоматології?',
        answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis cum vitae minus vel repellendus iusto enim adipisci officia rem ipsam maiores suscipit, animi minima dolore at neque dolor consequatur harum.',
    },
    {
        quastion: 'Які години роботи вашої стоматологічної клініки?',
        answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis cum vitae minus vel repellendus iusto enim adipisci officia rem ipsam maiores suscipit, animi minima dolore at neque dolor consequatur harum.',
    },
    {
        quastion: 'Які технології ви використовуєте для діагностики та лікування?',
        answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis cum vitae minus vel repellendus iusto enim adipisci officia rem ipsam maiores suscipit, animi minima dolore at neque dolor consequatur harum.',
    },
    {
        quastion: 'Чи ви надаєте послуги для дітей?',
        answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis cum vitae minus vel repellendus iusto enim adipisci officia rem ipsam maiores suscipit, animi minima dolore at neque dolor consequatur harum.',
    },
    {
        quastion: 'Як ви взаємодієте з пацієнтами під час консультацій?',
        answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis cum vitae minus vel repellendus iusto enim adipisci officia rem ipsam maiores suscipit, animi minima dolore at neque dolor consequatur harum.',
    },
]

function Accordion() {
    const [openId, setOpenId] = useState(null);

  return (
      <div>
          <h2 className='accordion-title'>Відповіді на поширені запитання</h2>
          <ul className='accordion'>
          {arr.map((item, id) => (
              <AccordionItem
                  key={id}
                  item={item}
                  onClick={() => (id === openId ? setOpenId(null) : setOpenId(id))}
                  isOpen={id === openId}
              />
          ))}
              </ul>
    </div>
  )
}


export default Accordion;
