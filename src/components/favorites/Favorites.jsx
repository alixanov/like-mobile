import React, { useState } from 'react';
import img1 from '../../assets/swiper-img/11111111111111.png';
import img2 from '../../assets/swiper-img/2222222222222222.png';
import img3 from '../../assets/swiper-img/image.png';

import "./favorites.css";
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';

const initialGirls = [
     { id: 1, name: 'Ника', img: img1, age: 36, city: 'Москва', status: 'Свободная', height: 166 },
     { id: 2, name: 'Алиса', img: img2, age: 24, city: 'СПб', status: 'Свободная', height: 170 },
     { id: 3, name: 'Мария', img: img3, age: 27, city: 'Казань', status: 'Свободная', height: 165 },
     { id: 4, name: 'София', img: img2, age: 22, city: 'Екатеринбург', status: 'Свободная', height: 173 },
     { id: 5, name: 'Анна', img: img1, age: 29, city: 'Новосибирск', status: 'Свободная', height: 168 },
];

const Favorites = () => {
     const [currentIndex, setCurrentIndex] = useState(0);
     const [isTransitioning, setIsTransitioning] = useState(false);
     const [animationClass, setAnimationClass] = useState('appear');
     const [showButton, setShowButton] = useState(null); // Состояние для отображения кнопки

     const handleTransition = (direction, buttonType) => {
          if (isTransitioning) return;
          setIsTransitioning(true);
          setAnimationClass(`transitioning-${direction}`);
          setShowButton(buttonType); // Показываем кнопку в центре

          setTimeout(() => {
               setCurrentIndex((prevIndex) => {
                    if (direction === 'left') {
                         return (prevIndex - 1 + initialGirls.length) % initialGirls.length;
                    } else {
                         return (prevIndex + 1) % initialGirls.length;
                    }
               });
               setAnimationClass('appear');
               setShowButton(null); // Убираем кнопку после смены карточки
               setTimeout(() => {
                    setIsTransitioning(false);
               }, 400);
          }, 400);
     };

     return (
          <div className="heart__container">
               <div className="heart__card">
                    <div className={`image-container ${animationClass}`}>
                         <img
                              src={initialGirls[currentIndex].img}
                              alt={initialGirls[currentIndex].name}
                         />

                         {/* Значок нажатой кнопки в центре */}
                         {showButton && (
                              <div className={`button-overlay ${showButton === 'heart' ? 'heart' : 'cross'}`}>
                                   {showButton === 'heart' ? (
                                        <FavoriteIcon sx={{ fontSize: "80px" }} />
                                   ) : (
                                        <CloseIcon sx={{ fontSize: "80px" }} />
                                   )}
                              </div>
                         )}

                         <div className="heart__txt__sli">
                              <p>{initialGirls[currentIndex].name}, {initialGirls[currentIndex].age}</p>
                              <span>{initialGirls[currentIndex].city}</span>
                              <span>{initialGirls[currentIndex].status}</span>
                              <span>Рост: {initialGirls[currentIndex].height} см</span>
                         </div>

                         <div className="btn-swip">
                              <button className="swipe-rightt" onClick={() => handleTransition('left', 'cross')}>
                                   <CloseIcon sx={{ fontSize: "45px" }} className='btn__left' />
                              </button>
                              <button className="swipe-leftt" onClick={() => handleTransition('right', 'heart')}>
                                   <FavoriteIcon sx={{ fontSize: "45px" }} className='btn__right' />
                              </button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Favorites;
