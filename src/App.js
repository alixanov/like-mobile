import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Footer, Search, History, HistoryNotFound, Tarif, Subscription, Profile, Layout, Favorites, Header, Questionnaire, Chat, ChatList, Register, Gost, Mutually } from './components';

const App = () => {
  const location = useLocation(); // 📌 Получаем текущий маршрут

  // 📌 Условие для скрытия `Navbar`
  const hideNavbar =
    location.pathname.includes('/heart/chat/') ||
    location.pathname === '/history' || // Скрываем Navbar в "history"
    location.pathname === '/profile';  // ❗️ Скрываем Navbar в "profile"

  // 📌 Условие для скрытия `Footer`
  const hideFooter =
    location.pathname.includes('/heart/chat/'); // ❗️ Footer скрыт только в `heart/chat/`, но не в `profile`

  return (
    <div className='root__container'>
      {/* 📌 Navbar скрывается только при `ChatList`, `History`, `Profile` */}
      {!hideNavbar && <Layout />}

      <div className='main'>
        <Routes>
          {/* 📌 Основные страницы */}
          <Route path='/reactjs-js-template' element={<Search />} />
          <Route path='/history' element={<History />} />
          <Route path='/history-not-found' element={<HistoryNotFound />} />
          <Route path='/profile' element={<Profile />} />  {/* ❗️ Footer остается видимым */}
          <Route path='/tarifs' element={<Tarif />} />
          <Route path='/subscription' element={<Subscription />} />
          <Route path='/register' element={<Register />} />

          {/* 📌 Раздел "Избранное" и "Чаты" */}
          <Route path='/heart' element={<Favorites />} />
          <Route path="/heart/chat" element={<Chat />} />
          <Route path="/heart/chat/:id" element={<ChatList />} /> {/* Динамический маршрут для каждого чата */}

          {/* 📌 Раздел "Группы" с вложенными маршрутами */}
          <Route path='/header' element={<Header />}>
            <Route index element={<Questionnaire />} /> {/* Главная страница "Группы" */}
            <Route path='gost' element={<Gost />} />
            <Route path='mutually' element={<Mutually />} />
          </Route>
        </Routes>
      </div>

      {/* 📌 Footer скрывается только при `ChatList`, но показывается в `Profile` */}
      {!hideFooter && <Footer />}
    </div>
  );
};

export default App;
