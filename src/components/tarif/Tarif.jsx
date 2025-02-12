import React from 'react'
import "./tarif.css"
import tarif from "../../assets/Group.png"
import { Link } from 'react-router-dom'

const Tarif = () => {
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
                 <div className="tarif__tisket__box">
                      <p>Пробный</p>
                      <span>14₽</span>
                      <h5>Далее 999₽/10 дней</h5>
                 </div>
                 <div className="tarif__tisket__box">
                      <p>Пробный</p>
                      <span>14₽</span>
                      <h5>Далее 999₽/10 дней</h5>
                 </div>    <div className="tarif__tisket__box">
                      <p>Пробный</p>
                      <span>14₽</span>
                      <h5>Далее 999₽/10 дней</h5>
                 </div>
            </div>

            <div className="tarif__plan___card">
                 <div className="tarif__plan__box">
                      <img src={tarif} alt="" />
                      <div className="tarif__plan__txt">
                           <p>Анализ активности</p>
                           <span>
                                Узнай, кто более активный на странице.
                           </span>
                      </div>
                 </div>
                 <div className="tarif__plan__box">
                      <img src={tarif} alt="" />
                      <div className="tarif__plan__txt">
                           <p>Возможно скрытые друзья</p>
                           <span>
                                Проверь, кого скрывает пользователь.
                           </span>
                      </div>
                 </div>
                 <div className="tarif__plan__box">
                      <img src={tarif} alt="" />
                      <div className="tarif__plan__txt">
                           <p>Кого часто посещает</p>
                           <span>
                                Покажем профиль к кому чаще всех заглядывает.
                           </span>
                      </div>
                 </div>
            </div>
                 
            <Link to={"/subscription"}
                 className="tarif__card__end__btn"
            >Подписаться за 14₽</Link>

    </div>
  )
}

export default Tarif
