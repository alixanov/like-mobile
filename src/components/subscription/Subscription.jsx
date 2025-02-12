import React from 'react'
import { Link } from 'react-router-dom'
import subscriptionHomeIcon from '../../assets/arrow-left.svg'
import "./subscription.css"
import global from "../../assets/global-sub.png"
import user from "../../assets/user-sub.png"
import group from "../../assets/group-sub.png"
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import master from "../../assets/mastercard.svg"
import visa from "../../assets/visa.svg"
import cloud from "../../assets/cloud.svg"
import mir from "../../assets/mir.svg"



const PurpleCheckbox = styled(Checkbox)({
  color: "#8f33d6",
  "&.Mui-checked": {
    color: "#8f33d6",
  },
});

const Subscription = () => {
  return (
    <div className='subscription__container'>
            <div className="subscription__title">
        <p>Оплата тарифа</p>
        <div className="subscription__home__btn">
          <Link to={"/tarifs"}>
            <img src={subscriptionHomeIcon} alt="" />
          </Link>
        </div>
      </div>
      
            <div className="subscription__card">
          <h4>Пробный</h4>
        <div className="subscription__txt">
          <span>     Все функции</span> 
          <span>      Премиум за 14р!</span> 
          <span>    Далее - 999/10 дней.</span> 
        </div>
        <div className="subscription__txt">
          <p>14₽</p>
          <span> 999₽ </span>
          
        </div>
      </div>
      
      <div className="subscription__box">
        <div className="subscription__box__tisket">
          <img src={global} alt="" />
          <p>Анализ активности</p>
        </div>
        <div className="subscription__box__tisket">
          <img src={user} alt="" />
          <p>Поиск скрытых друзей</p>
        </div>
        <div className="subscription__box__tisket">
          <img src={group} alt="" />
          <p>Анализ
            групп и сообществ</p>
        </div>
      </div>


      <button className="subscription__btn">
        Произвести оплату
      </button>

      <div className="subscription__checkbox">
        <div className="subscription__checkbox__txt">
          <PurpleCheckbox />
          <p>
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters.
          </p>
        </div>

        <div className="subscription__checkbox__txt">
          <PurpleCheckbox />
          <p>
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English. Many desktop publishing packages and web
            page editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their
            infancy. Various versions have evolved over the years, sometimes by
            accident, sometimes on purpose (injected humour and the like).
          </p>
        </div>
      </div>

      <div className="subscription__cards">
        <img src={visa} alt="" />
        <img src={mir} alt="" />
        <img src={master} alt="" />
        <img src={cloud} alt="" />
      </div>
    </div>
  )
}

export default Subscription
