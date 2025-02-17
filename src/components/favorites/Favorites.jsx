
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";

import img1 from "../../assets/swiper-img/1.png";
import img2 from "../../assets/swiper-img/2.jpg";
import img3 from "../../assets/swiper-img/3.jpg";
import img4 from "../../assets/swiper-img/4.jpg";
import img5 from "../../assets/swiper-img/5.png";

import "./favorites.css";

const girls = [
     { id: 1, name: "Ника", img: img1, age: 36, city: "Москва", status: "Свободная", height: 166 },
     { id: 2, name: "Алиса", img: img2, age: 24, city: "СПб", status: "Свободная", height: 170 },
     { id: 3, name: "Мария", img: img3, age: 27, city: "Казань", status: "Свободная", height: 165 },
     { id: 4, name: "София", img: img4, age: 22, city: "Екатеринбург", status: "Свободная", height: 173 },
     { id: 5, name: "Анна", img: img5, age: 29, city: "Новосибирск", status: "Свободная", height: 168 },
];

const Favorites = () => {
     const swiperRef = useRef(null);
     const [action, setAction] = useState(null); // Состояние для отслеживания действия

     const swipeLeft = () => {
          setAction("dislike");
          setTimeout(() => {
               if (swiperRef.current) swiperRef.current.swiper.slideNext();
               setAction(null); // Сброс состояния после свайпа
          }, 300); // Задержка для отображения текста перед свайпом
     };

     const swipeRight = () => {
          setAction("like");
          setTimeout(() => {
               if (swiperRef.current) swiperRef.current.swiper.slideNext();
               setAction(null); // Сброс состояния после свайпа
          }, 300); // Задержка для отображения текста перед свайпом
     };

     return (
          <div className="heart__container">
               <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="heart__card"
                    ref={swiperRef}
                    loop={true}
               >
                    {girls.map((girl) => (
                         <SwiperSlide key={girl.id} className="image-container">
                              <img src={girl.img} alt={girl.name} />
                              {action && (
                                   <div className={`swipe-text ${action}`}>
                                        {action === "like" ? <FavoriteIcon sx={{ fontSize: 60 }} /> : <CloseIcon sx={{ fontSize: 60 }} />}
                                   </div>
                              )}
                              <div className="heart__txt__sli">
                                   <p>{girl.name}, {girl.age}</p>
                                   <span>{girl.city}</span>
                                   <span>{girl.status}</span>
                                   <span>Рост: {girl.height} см</span>
                              </div>
                         </SwiperSlide>
                    ))}
               </Swiper>

               {/* Кнопки лайка и дизлайка */}
               <div className="btn-swip">
                    <button className="btn__left" onClick={swipeLeft}>
                         <CloseIcon sx={{ fontSize: "45px" }} />
                    </button>
                    <button className="btn__right" onClick={swipeRight}>
                         <FavoriteIcon sx={{ fontSize: "45px" }} />
                    </button>
               </div>
          </div>
     );
};

export default Favorites;

