import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import dolphin from "../../assets/dolphin.svg";
import "./chat.css";
import user1 from "../../assets/user1.svg";
import user2 from "../../assets/user2.svg";
import user3 from "../../assets/user3.svg";
import user4 from "../../assets/user4.svg";
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

const Chat = () => {
  const [searchTerm, setSearchTerm] = useState(""); // 📌 Состояние для поиска

  const userChatData = [
    { id: 1, img: user1, name: "Анджелина", sms: "Молчишь?((", time: "11:30" },
    { id: 2, img: user2, name: "Влада", sms: "Привет, как дела?))", time: "13:51" },
    { id: 3, img: user3, name: "Анжелина", sms: "У меня уже фантазия закончилась(", time: "11:30" },
    { id: 4, img: user4, name: "Антонина", sms: "Привет, погуляем?)))", time: "11:30" }
  ];

  // 📌 Фильтруем пользователей по `searchTerm`
  const filteredUsers = userChatData.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='chat__container'>
      <div className="chat__title">
        <p>Чат</p>
      </div>

      {/* 📌 Поле поиска */}
      <input
        type="text"
        placeholder='Поиск по имени'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // 📌 Обновляем состояние
      />

      {/* Если ничего не найдено */}
      {filteredUsers.length === 0 ? (
        <div className="chat__not__found">
          <img src={dolphin} alt="Not found" />
          <p>Ничего не найдено.</p>
        </div>
      ) : (
        <div className="chat___card">
          {filteredUsers.map((item) => (
            <Link to={`/heart/chat/${item.id}`} className="chat__box" key={item.id}>
              <div className="chat__box__info__profile">
                <img src={item.img} alt={item.name} />
                <div className="chat__box__user__info">
                  <p>{item.name}</p>
                  <span>{item.sms}</span>
                </div>
              </div>
              <p>{item.time}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Chat;
