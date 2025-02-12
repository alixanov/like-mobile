import React, { useState } from 'react';
import './register.css';
import camera from "../../assets/camera.png"

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    gender: '',
    name: '',
    birthDate: '',
    ageRange: { min: 22, max: 34 },
    height: 170
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleGenderSelect = (gender) => {
    setFormData({ ...formData, gender });
    handleNext();
  };

  return (
    <div className='register__container'>
      <div className="register__content">
        <h1>Ваша половинка ждёт Вас!</h1>
        <p className="register__subtitle">Регистрация займёт 2 минуты</p>
        
        <div className="register__progress">
          <div className="register__progress-bar" style={{ width: `${(step / 5) * 100}%` }}></div>
        </div>

        {step === 1 && (
          <div className="register__step">
            <h2>Укажите ваш пол</h2>
            <button 
              className={`register__gender-btn ${formData.gender === 'male' ? 'active' : ''}`}
              onClick={() => handleGenderSelect('male')}
            >
              ♂ МУЖСКОЙ
            </button>
            <button 
              className={`register__gender-btn ${formData.gender === 'female' ? 'active' : ''}`}
              onClick={() => handleGenderSelect('female')}
            >
              ♀ ЖЕНСКИЙ
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="register__step">
            <h2>Укажите ваше имя</h2>
            <input
              type="text"
              placeholder="Введите имя"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="register__input"
            />
            <div className="register__buttons">
              <button className="register__back-btn" onClick={handleBack}>НАЗАД</button>
              <button className="register__next-btn" onClick={handleNext}>ДАЛЕЕ</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="register__step">
            <h2>Укажите вашe дату рождения</h2>
            <input
              type="date"
              value={formData.birthDate}
              onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
              className="register__input"
              placeholder="DD/MM/YYYY"
            />
            <div className="register__buttons">
              <button className="register__back-btn" onClick={handleBack}>НАЗАД</button>
              <button className="register__next-btn" onClick={handleNext}>ДАЛЕЕ</button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="register__step">
            <h2>Какого возраста партнёры вам нравятся?</h2>
            <div className="register__range-container">
              <p className="register__range-label">Возраст</p>
              <div className="register__range-values">
                <span>{formData.ageRange.min}</span>
                <span>{formData.ageRange.max}</span>
              </div>
              <input
                type="range"
                min="18"
                max="70"
                value={formData.ageRange.min}
                onChange={(e) => setFormData({
                  ...formData,
                  ageRange: { ...formData.ageRange, min: parseInt(e.target.value) }
                })}
                className="register__range"
              />
            </div>
            <div className="register__buttons">
              <button className="register__back-btn" onClick={handleBack}>НАЗАД</button>
              <button className="register__next-btn" onClick={handleNext}>ДАЛЕЕ</button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="register__step">
            <h2>Ваш рост</h2>
            <div className="register__range-container">
              <p className="register__range-label">Рост</p>
              <span className="register__height-value">{formData.height} см</span>
              <input
                type="range"
                min="140"
                max="220"
                value={formData.height}
                onChange={(e) => setFormData({ ...formData, height: parseInt(e.target.value) })}
                className="register__range"
              />
            </div>
            <div className="register__buttons">
              <button className="register__back-btn" onClick={handleBack}>НАЗАД</button>
              <button className="register__next-btn" onClick={handleNext}>ДАЛЕЕ</button>
            </div>
          </div>
                 )}
                 
                 {step === 6 && (
                      <div className="register__step">
                           <h2>Ваши фотографии</h2>
                           <div className="register__card__images">
                                {[...Array(9)].map((_, index) => (
                                     <div key={index} className="register__box__images" onClick={() => setStep(7)}>
                                          +
                                     </div>
                                ))}
                           </div>
                           <div className="register__buttons">
                                <button className="register__next-btn" onClick={handleNext}>НЕ ДОБАВЛЯТЬ</button>
                           </div>
                      </div>
                 )}

                 {step === 7 && (
                      <div className="register__step">
                           <div className="register__image__upload">
                                <div className="register__image__upload__title">
                                     <img src={camera} alt="Upload" />
                                </div>
                                <p>Загрузите фотографию</p>
                                <span>is simply dummy text of the printing and typesetting industry...</span>
                                <button className="register__back-btn">Загрузить фото</button>
                           </div>
                      </div>
                 )}


      </div>
    </div>
  );
};

export default Register;