import React, { useState } from 'react';
import "./tarif.css";
import tarif from "../../assets/Group.png";
import { Link } from 'react-router-dom';

const Tarif = () => {
     const [selectedTarif, setSelectedTarif] = useState(null);

     const tarifs = [
          { id: 1, name: "Пробный", price: "14₽", description: "Далее 999₽/10 дней" },
          { id: 2, name: "Базовый", price: "299₽", description: "Далее 1999₽/30 дней" },
          { id: 3, name: "Премиум", price: "999₽", description: "Далее 4999₽/90 дней" },
     ];

     const handleTarifSelect = (tarif) => {
          setSelectedTarif(tarif);
     };

     return (
          <div className='tarif__container'>
               <p>Оплата тарифа</p>
               <div className="tarif__card">
                    <div className="tarif__box">
                         <p>Статус аккаунта</p>
                         <span>Не активирован</span>
                    </div>
                    <div className="tarif__box">
                         <p>Количество дней</p>
                         <span>0 дней</span>
                    </div>
                    <button>Активировать</button>
               </div>
               <div className="tarif___tisket">
                    {tarifs.map((tarif) => (
                         <div
                              key={tarif.id}
                              className={`tarif__tisket__box ${selectedTarif?.id === tarif.id ? 'selected' : ''}`}
                              onClick={() => handleTarifSelect(tarif)}
                         >
                              <p>{tarif.name}</p>
                              <span>{tarif.price}</span>
                              <h5>{tarif.description}</h5>
                         </div>
                    ))}
               </div>

               <div className="tarif__plan___card">
                    <div className="tarif__plan__box">
                         <img src={tarif} alt="" />
                         <div className="tarif__plan__txt">
                              <p>Анализ активности</p>
                              <span>
                                   {selectedTarif
                                        ? `С тарифом "${selectedTarif.name}" вы получите расширенный анализ активности.`
                                        : "Узнай, кто более активный на странице."}
                              </span>
                         </div>
                    </div>
                    <div className="tarif__plan__box">
                         <img src={tarif} alt="" />
                         <div className="tarif__plan__txt">
                              <p>Возможно скрытые друзья</p>
                              <span>
                                   {selectedTarif
                                        ? `С тарифом "${selectedTarif.name}" вы сможете увидеть скрытых друзей.`
                                        : "Проверь, кого скрывает пользователь."}
                              </span>
                         </div>
                    </div>
                    <div className="tarif__plan__box">
                         <img src={tarif} alt="" />
                         <div className="tarif__plan__txt">
                              <p>Кого часто посещает</p>
                              <span>
                                   {selectedTarif
                                        ? `С тарифом "${selectedTarif.name}" вы увидите, кого чаще всего посещает пользователь.`
                                        : "Покажем профиль к кому чаще всех заглядывает."}
                              </span>
                         </div>
                    </div>
               </div>

               <Link to={"/subscription"} className="tarif__card__end__btn">
                    Подписаться за {selectedTarif ? selectedTarif.price : "14₽"}
               </Link>
          </div>
     );
};

export default Tarif;