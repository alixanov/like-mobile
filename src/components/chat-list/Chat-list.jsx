import React from 'react';
import { Link, useParams } from 'react-router-dom';
import subscriptionHomeIcon from '../../assets/arrow-left.svg';
import user1 from "../../assets/user1.svg";
import user2 from "../../assets/user2.svg";
import user3 from "../../assets/user3.svg";
import user4 from "../../assets/user4.svg";
import "./chat-list.css";
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

// Данные о пользователях
const userChatData = [
     { id: 1, img: user1, name: "Анджелина" },
     { id: 2, img: user2, name: "Влада" },
     { id: 3, img: user3, name: "Анжелина" },
     { id: 4, img: user4, name: "Антонина" }
];

const ChatList = () => {
     const { id } = useParams(); // Получаем ID пользователя из URL
     const user = userChatData.find((u) => u.id === Number(id));

     if (!user) {
          return <p>Пользователь не найден</p>;
     }

     return (
          <div className='chat__list__container'>
               <div className="chat__list__title">
                    <Link to="/heart/chat">
                         <img src={subscriptionHomeIcon} alt="Back" />
                    </Link>
                    <img src={user.img} alt={user.name} />
                    <p>{user.name}</p>
               </div>

               <div className="chat__list__card">
                    <div className="chat__list__sms__user">
                         <p>Привет! Как дела?</p>
                    </div>
                    <div className="chat__list__sms__author">
                         <p>Привет! Всё отлично, а у тебя?</p>
                    </div>
               </div>

               <div className="chat__list__send__btn__sms">
                    <input type="text" placeholder="Напишите сообщение..." />
                    <button><ChevronRightOutlinedIcon/></button>
               </div>
          </div>
     );
};

export default ChatList;
