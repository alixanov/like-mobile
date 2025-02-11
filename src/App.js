import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer, Search, History, HistoryNotFound, Profile } from './components'

const App = () => {
  return (
    <div className='root__container'>
      <div className='main'>
        <Routes>
          <Route path='/reactjs-js-template' element={<Search />} />
          <Route path='/history' element={<History />} />
          <Route path='/history-not-found' element={<HistoryNotFound />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
