import React from 'react';
import './reviews.css';
import reviewer1 from './reviewer1.avif'

const dataReviews = [
    {
    img: reviewer1,
    person: 'Олександра',
    text: 'Дуже задоволена роботою стоматологічної клініки! Професійний підхід, приємний персонал та сучасне обладнання. Рекомендую!',
  },
  {
    img: reviewer1,
    person: 'Максим',
    text: 'Вражений якістю обслуговування. Лікарі ввічливі, завжди готові відповісти на всі питання. Найкраща стоматологічна клініка у місті!',
  },
  {
    img: reviewer1,
    person: 'Валентин',
    text: `Велика подяка клініці за оперативне вирішення проблеми зі здоров'ям зубів. Вражений ефективністю та турботою про пацієнтів.`,
  },

]


function Reviews() {
  return (
    <div id='reviews'>
      <h1 className='review-title'>Відгуки наших клієнтів</h1>
      <div className='reviews'>
        {dataReviews.map((item, index) => (
          <div className='review' key={index}>
            <div className='review-img-container'>
                    <img src={item.img} alt='' className='review-img' width='96' height='96' />
                </div>
                <div className='reviewer-text-container'>
                <p className='reviewer-name'>{item.person}</p>
            <p className='review-text'>{item.text}</p>
                </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}




export default Reviews;
