import React from 'react';
import blurImage from "../../assets/blur-image.png";  // Размытое изображение
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';



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
                                   <FavoriteIcon  className='mutually__profile-action' />
                                   <CloseIcon alt='Dismiss' className='mutually__profile-action' />
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     );
}

export default Mutually;
