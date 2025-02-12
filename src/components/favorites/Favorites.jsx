import React, { useState, useRef } from 'react';
import img1 from '../../assets/swiper-img/11111111111111.png';
import img2 from '../../assets/swiper-img/2222222222222222.png';
import img3 from '../../assets/swiper-img/Group8.png';
import img4 from '../../assets/swiper-img/Group89.png';
import "./favorites.css"

const initialGirls = [
     { id: 1, name: 'Ника', img: img1, age: 36, city: 'Москва', status: 'Свободная', height: 166 },
     { id: 2, name: 'Алиса', img: img2, age: 24, city: 'СПб', status: 'Свободная', height: 170 },
     { id: 3, name: 'Мария', img: img1, age: 27, city: 'Казань', status: 'Свободная', height: 165 },
     { id: 4, name: 'София', img: img2, age: 22, city: 'Екатеринбург', status: 'Свободная', height: 173 },
     { id: 5, name: 'Анна', img: img1, age: 29, city: 'Новосибирск', status: 'Свободная', height: 168 },
];

const Favorites = () => {
     const [currentIndex, setCurrentIndex] = useState(0);
     const [angle, setAngle] = useState(0);
     const [isDragging, setIsDragging] = useState(false);
     const [startPosition, setStartPosition] = useState(0);
     const [showIcon, setShowIcon] = useState(null);
     const imgRef = useRef(null);

     const handleStart = (clientX) => {
          setIsDragging(true);
          setStartPosition(clientX);
          setAngle(0);
          setShowIcon(null);
     };

     const handleMove = (clientX) => {
          if (!isDragging) return;
          const deltaX = clientX - startPosition;
          const newAngle = Math.min(Math.max((deltaX / window.innerWidth) * 130, -130), 130);
          setAngle(newAngle);

          if (newAngle > 45) setShowIcon('heart');
          else if (newAngle < -45) setShowIcon('cross');
          else setShowIcon(null);
     };

     const handleEnd = () => {
          setIsDragging(false);
          if (Math.abs(angle) > 45) {
               setTimeout(() => {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % initialGirls.length);
                    setAngle(0);
                    setShowIcon(null);
               }, 300);
          } else {
               setAngle(0);
               setShowIcon(null);
          }
     };

     const handleSwipe = (direction) => {
          setAngle(direction === 'right' ? 70 : -70);
          setShowIcon(direction === 'right' ? 'heart' : 'cross');

          setTimeout(() => {
               setCurrentIndex((prevIndex) => (prevIndex + 1) % initialGirls.length);
               setAngle(0);
               setShowIcon(null);
          }, 300);
     };

     return (
          <div className="heart__container">
               <div
                    className="heart__card"
                    onMouseDown={(e) => handleStart(e.clientX)}
                    onMouseMove={(e) => handleMove(e.clientX)}
                    onMouseUp={handleEnd}
                    onMouseLeave={handleEnd}
                    onTouchStart={(e) => handleStart(e.touches[0].clientX)}
                    onTouchMove={(e) => handleMove(e.touches[0].clientX)}
                    onTouchEnd={handleEnd}
               >
                    <div className="image-container" style={{ transform: `rotate(${angle}deg)`, transition: isDragging ? 'none' : 'transform 0.3s ease-out' }}>
                         <img ref={imgRef} src={initialGirls[currentIndex].img} alt={initialGirls[currentIndex].name} />

                         {showIcon === 'heart' && <div className="heart-icon"><img src={img3} alt="heart" /></div>}
                         {showIcon === 'cross' && <div className="cross-icon"><img src={img4} alt="cross" /></div>}

                         <div className="heart__txt__sli">
                              <div className="text_sli">
                                   <p>{initialGirls[currentIndex].name}, {initialGirls[currentIndex].age}</p>
                                   <span>{initialGirls[currentIndex].city}</span>
                                   <span>{initialGirls[currentIndex].status}</span>
                                   <span>Рост: {initialGirls[currentIndex].height} см</span>
                                   <span>{initialGirls[currentIndex].city}</span>
                              </div>
                    </div>

                         <div className="btn-swip">
                              <button className="swipe-leftt" onClick={() => handleSwipe('left')}>
                                   <img src={img4} alt="swipe left" />
                              </button>
                              <button className="swipe-rightt" onClick={() => handleSwipe('right')}>
                                   <img src={img3} alt="swipe right" />
                              </button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Favorites;
