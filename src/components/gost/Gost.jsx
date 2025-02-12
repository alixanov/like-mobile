import React from 'react';
import clearImage from "../../assets/blur-image.png";  // Четкое изображение
import blurImage from "../../assets/blur-image.png";  // Размытое изображение
import "./gost.css";

const Gost = () => {
     return (
          <div className="gost__container">
               <div className="gost__grid">
                    <img src={clearImage} alt="Clear" className="gost__image clear" />
                    {[...Array(5)].map((_, index) => (
                         <img key={index} src={blurImage} alt="Blurred" className="gost__image blurred" />
                    ))}
               </div>
          </div>
     );
};

export default Gost;
