import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import personImage from '../../assets/personImage.svg';
import hintIcon from '../../assets/hint.svg';
import premium from '../../assets/premium-alert.png';
import './profile.css';

const Profile = () => {
     const navigate = useNavigate();
     const [showHint, setShowHint] = useState(false);
     const [showPremiumModal, setShowPremiumModal] = useState(false);

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
          <div className="wrapper">
               <div className={`profile__container ${showPremiumModal ? 'blur-background' : ''}`}>
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
                         <button onClick={() => setShowPremiumModal(true)}>Активировать</button>
                    </div>
               </div>

               {showPremiumModal && (
                    <div className="modal-overlay">
                         <div className="profile__premium__alert">
                              <div className="profile__premium__alert__icon">
                                   <img src={premium} alt="Premium Alert" />
                              </div>
                              <p>Premium доступ</p>
                              <span>Чтобы отправлять сообщения, просматривать фотографии в чате и узнавать, кто поставил "Лайк", необходимо приобрести Premium доступ</span>
                              <button>Купить Premium</button>
                              <button className="close-modal" onClick={() => setShowPremiumModal(false)}>Закрыть</button>
                         </div>
                    </div>
               )}
          </div>
     );
};

export default Profile;