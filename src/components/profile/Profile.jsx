import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import personImage from '../../assets/personImage.svg';
import hintIcon from '../../assets/hint.svg';
import './profile.css';

const Profile = () => {
     const navigate = useNavigate();
     const [showHint, setShowHint] = useState(false);

     const profileData = [
          {
               name: 'Anatol Petrov',
               posts: 39,
               followers: 822,
               friends: 713,
               likes: 1067,
               views: 10059,
               gifts: 6,
               comments: 18,
               reposts: 22,
               path: '/history',
          },
     ];

     return (
          <div className="profile__container">
               {profileData.map((item) => (
                    <div key={item.name}>
                         <div className="profile__title__card">
                              <img src={personImage} alt="Profile" className="profile-image" />
                              <div className="profile__title__info">
                                   <p>{item.name}</p>

                                   <div className="profile__title__info__active">
                                        <div className="profile__title__info__active__txt">
                                             <p>Посты</p>
                                             <span>{item.posts}</span>
                                        </div>
                                        <div className="profile__title__info__active__txt">
                                             <p>Подписчики</p>
                                             <span>{item.followers}</span>
                                        </div>
                                        <div className="profile__title__info__active__txt">
                                             <p>Друзья</p>
                                             <span>{item.friends}</span>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         {/* ✅ Блок с кнопками теперь находится внутри .map() */}
                         <div className="profile-active-progress">
                              <button onClick={() => setShowHint(!showHint)}>
                                   <img src={hintIcon} alt="Hint" />
                                   <div className="profile-active-progress-title">
                                        <p>Лайки</p>
                                        <span>{item.likes}</span>
                                   </div>
                              </button>
                              <button onClick={() => setShowHint(!showHint)}>
                                   <img src={hintIcon} alt="Hint" />
                                   <div className="profile-active-progress-title">
                                        <p>Посты</p>
                                        <span>{item.posts}</span>
                                   </div>
                              </button>
                              <button onClick={() => setShowHint(!showHint)}>
                                   <img src={hintIcon} alt="Hint" />
                                   <div className="profile-active-progress-title">
                                        <p>Просмотры</p>
                                        <span>{item.views}</span>
                                   </div>
                              </button>
                              <button onClick={() => setShowHint(!showHint)}>
                                   <img src={hintIcon} alt="Hint" />
                                   <div className="profile-active-progress-title">
                                        <p>Комментарии</p>
                                        <span>{item.comments}</span>
                                   </div>
                              </button>
                              <button onClick={() => setShowHint(!showHint)}>
                                   <img src={hintIcon} alt="Hint" />
                                   <div className="profile-active-progress-title">
                                        <p>Подарки</p>
                                        <span>{item.gifts}</span>
                                   </div>
                              </button>
                              <button onClick={() => setShowHint(!showHint)}>
                                   <img src={hintIcon} alt="Hint" />
                                   <div className="profile-active-progress-title">
                                        <p>Репосты</p>
                                        <span>{item.reposts}</span>
                                   </div>
                              </button>
                              {showHint && (
                                   <div className="hint-modal">
                                        <p>Общее количество лайков профиля</p>
                                   </div>
                              )}
                         </div>
                    </div>
               ))}


               <div className="profile__active__form__card">
                    <p>Полученные лайки</p>
                    <span>Активируйте пробный тариф за 14₽, чтобы увидеть все инструменты сразу</span>
                    <button>Активировать</button>
               </div>
          </div>
     );
};

export default Profile;
