import React from 'react'
import dolphin from "../../assets/dolphin.svg"
import { Link, } from 'react-router-dom'
import "./questionnaire.css"

const Group = () => {
  return (
    <div className='questionnaire__container'>
            <img src={dolphin} alt="" />
            <span>Ничего не найдено.</span>
            <p>Вас ещё никто не оценил Создайте анкеты, чтобы можно было найти собеседника</p>
            <Link to={"/register"}>Создать анкету</Link>
    </div>
  )
}

export default Group
