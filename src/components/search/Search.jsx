import { useState } from 'react';
import './search.css';

const Search = () => {
  const [resource, setResource] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    // Логика отправки данных
    console.log("Отправлено:", resource);
  };

  return (
    <div className="search-container">
      <div className="search__title">
        <p className="search-heading">
          Запустим проверку?</p>
        <span className="search-subheading">
          Введите в поле ниже ссылку на страницу ВК
        </span>
   </div>
      <input
      className='search__input'
        value={resource}
        onChange={(e) => setResource(e.target.value)}
        type="text"
        placeholder="https://vk.com/"
      />
      <button className="search-button" onClick={handleClick}>
        НАЧАТЬ
      </button>
    </div>
  );
};

export default Search;
