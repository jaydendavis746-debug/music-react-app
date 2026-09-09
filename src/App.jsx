import { useState, } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import { SongList, Home, AddSong } from './components'
import Nav  from './Nav.jsx'
import './App.css'
import SongItem from './components/SongItem/index.jsx'
import { SongProvider } from './components/contexts/index.jsx'

function App() {
  

  return(
    <div className='App'>
      <Nav />
      <SongProvider>
        <Routes>
          <Route path='/'  element={<Nav />} />
            <Route index element={<Home   />} />
            <Route path='add'  element={<AddSong />} />
            <Route path='/songlist' >
              <Route index element={<SongList />}/>
              <Route path=':name' element={<SongItem />}/>
            </Route> 
        </Routes>
      </SongProvider>
    </div>


  )
}

export default App
