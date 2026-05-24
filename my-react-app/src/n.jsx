import  { useState } from 'react';
import './r.css';

const NNN = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(`Имя: ${formData.name}\nТелефон: ${formData.phone}`);
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Яблоки</h1>
        <h2 className="subtitle">Летние</h2>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name" className="label">Имя:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Введите ваше имя"
            className="input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="label">Телефон:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+7 (999) 123-45-67"
            className="input"
            required
          />
        </div>

        <button type="submit" className="buy-button">
          Купить
        </button>
      </form>

      <div className="preview">
        <span>телефон: {formData.phone || 'не указан'}</span>
        <span className="separator">|</span>
        <span>имя: {formData.name || 'не указано'}</span>
      </div>
    </div>
  );
};

export default NNN