import React from 'react';
import plus from "../../assets/plus-icon.svg";
import favorite from "../../assets/favorite-icon.svg";
import blurImage from "../../assets/blur-image.png";  // Размытое изображение
import "./mutually.css"
const Mutually = () => {
     return (
          <div className='mutually__container'>
               <div className='mutually__header'>
                    <p>Они проявили симпатию. Получите Premium статус, чтобы узнать кто поставил вам лайк</p>
                    <button className='mutually__premium-button'>Получить Premium</button>
               </div>
               <div className='mutually__profiles'>
                    {[...Array(6)].map((_, index) => (
                         <div key={index} className='mutually__profile'>
                              <img src={blurImage} alt='Blurred profile' className='mutually__profile-image' />
                              <div className='mutually__profile-actions'>
                                   <img src={favorite} alt='Like' className='mutually__profile-action' />
                                   <img src={plus} alt='Dismiss' className='mutually__profile-action' />
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     );
}

export default Mutually;
