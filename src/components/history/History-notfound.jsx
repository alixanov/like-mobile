import dolphin from '../../assets/dolphin.svg';
import './history-notfound.css';

const HistoryNotFound = () => {
     return (
          <div className="notfound-container">
               <p className="notfound-heading">Ваша история поиска:</p>
               <img src={dolphin} className="notfound-dolphin" alt="" />
               <span className="notfound-subheading">Ничего не найдено.</span>
          </div>
     );
};

export default HistoryNotFound;
