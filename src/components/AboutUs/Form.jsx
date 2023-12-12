import React from 'react';

const Form = ({ formData, setFormData, onSubmit }) => {
  return (
    <form method='#' action='#' id='form' onSubmit={onSubmit}>
      <h1 className='modal-title'>Запишись на візит онлайн</h1>
      <div className="form-group">
        <input
          type="text"
          id="name"
          name='name'
          placeholder="Ваше ім'я"
          value={formData.inputName}
          onChange={(e) => setFormData({ ...formData, inputName: e.target.value })}
        />
        <input
          type="tel"
          id="phone"
          placeholder="Ваш номер телефону"
          name='tel'
          value={formData.inputTel}
          onChange={(e) => setFormData({ ...formData, inputTel: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="select-doctor">Виберіть лікаря:</label>
    <select
        id="select-doctor"
        className='select-doctors'
        value={formData.doctor}
        onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
    >
      <option value="Руслан">Руслан</option>
      <option value="Зоряна">Зоряна</option>
    < option value="Віра">Віра</option>
  </select>

      </div>
      <div className="form-group">
        <textarea
          id="comment"
          placeholder="Ваш коментар"
          name='comment'
          value={formData.inputComment}
          onChange={(e) => setFormData({ ...formData, inputComment: e.target.value })}
        />
      </div>
      <button type="submit">Надіслати</button>
    </form>
  );
};

export default Form;
