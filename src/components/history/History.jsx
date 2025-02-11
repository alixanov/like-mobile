import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import maximImage from '../../assets/maxim.svg';
import personImage from '../../assets/personImage.svg';
import { HistoryNotFound } from "../";
import './history.css';

const History = () => {
     const navigate = useNavigate();
     // Static data - you can modify this array to test both empty and filled states
     const [historyItems] = useState([
          {
               id: 1,
               title: 'Anatol Petrov',
               date: '2024-03-15',
               description: 'обновлено: только что',
               image: personImage,
               path: '/profile',
          },
          {
               id: 2,
               title: 'Максим Герок',
               date: '2024-03-16',
               description: 'обновлено: только что',
               image: maximImage,
               path: '/profile',
          },
     ]);

     if (historyItems.length === 0) {
          return (
               <div className="history-main">
                    <HistoryNotFound />
               </div>
          );
     }

     // If array has items, show history list
     return (
          <div className="history-container">
               <div className="history-heading">Ваша история поиска:</div>
               <div className="history-list">
                    {historyItems.map((item) => (
                         <div
                              key={item.id}
                              onClick={() => navigate(item.path)}
                              className="history-item"
                         >
                              <div>
                                   <img
                                        key={item.path}
                                        className="history-person-image"
                                        src={item.image}
                                        alt={item.title}
                                   />
                              </div>
                              <div className="history-item-info">
                                   <h3 className="history-item-title">
                                        {item.title}
                                   </h3>
                                   <h4 className="history-item-date">{item.date}</h4>
                              </div>
                              <span className="history-item-description">
                                   {item.description}
                              </span>
                         </div>
                    ))}
               </div>
          </div>
     );
};

export default History;
