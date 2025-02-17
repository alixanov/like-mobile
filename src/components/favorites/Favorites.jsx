import React, { useState, useEffect } from 'react';
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
     const [showButton, setShowButton] = useState(null);
     const [touchStartX, setTouchStartX] = useState(null); // Начальная позиция касания
     const [isMobile, setIsMobile] = useState(false); // Для проверки мобильного устройства

     useEffect(() => {
          // Определяем, мобильное устройство или нет
          const checkIsMobile = () => {
               setIsMobile(window.innerWidth <= 768);
          };
          checkIsMobile();
          window.addEventListener('resize', checkIsMobile);
          return () => window.removeEventListener('resize', checkIsMobile);
     }, []);

     const handleTransition = (direction, buttonType) => {
          if (isTransitioning) return;
          setIsTransitioning(true);
          setAnimationClass(`transitioning-${direction}`);
          setShowButton(buttonType);

          setTimeout(() => {
               setCurrentIndex((prevIndex) => {
                    if (direction === 'left') {
                         return (prevIndex - 1 + initialGirls.length) % initialGirls.length;
                    } else {
                         return (prevIndex + 1) % initialGirls.length;
                    }
               });
               setAnimationClass('appear');
               setShowButton(null);
               setTimeout(() => {
                    setIsTransitioning(false);
               }, 400);
          }, 400);
     };

     const handleTouchStart = (e) => {
          setTouchStartX(e.touches[0].clientX);
     };

     const handleTouchEnd = (e) => {
          if (touchStartX === null) return;

          const touchEndX = e.changedTouches[0].clientX;
          const deltaX = touchEndX - touchStartX;

          // Проверяем, мобильный режим или нет
          if (isMobile) {
               if (deltaX > 50) {
                    // Пропускаем анкету (вправо) без действия
                    handleTransition('left', null);
               } else if (deltaX < -50) {
                    // Пропускаем анкету (влево) без действия
                    handleTransition('right', null);
               }
          } else {
               // На десктопе свайп вправо - дизлайк, влево - лайк
               if (deltaX > 50) {
                    handleTransition('left', 'cross'); // Десктоп: дизлайк
               } else if (deltaX < -50) {
                    handleTransition('right', 'heart'); // Десктоп: лайк
               }
          }

          setTouchStartX(null);
     };

     return (
          <div className="heart__container">
               <div className="heart__card">
                    <div
                         className={`image-container ${animationClass}`}
                         onTouchStart={handleTouchStart}
                         onTouchEnd={handleTouchEnd}
                    >
                         <img
                              src={initialGirls[currentIndex].img}
                              alt={initialGirls[currentIndex].name}
                         />

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
