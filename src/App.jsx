import { useState, } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import { SongList, Home } from './components'
import Nav  from './Nav.jsx'
import './App.css'
import SongItem from './components/SongItem/index.jsx'

function App() {

  const [InputText, setInputText] = useState('')
  const [songs, setSongs] = useState([{name: "Eraser", liked: false},
    {name: "Castle on the hill", liked: false},
    {name: "Dive", liked: false},
    {name: "Shape of you", liked: false},
    {name: "Perfect", liked: false},
    {name: "Galway Girl", liked: true},
    {name: "Happier", liked: false},
    {name: "New Man", liked: false},
    {name: "Hearts Don't Break Around Here", liked: false},
    {name: "What Do I Know", liked: false},
    {name: "How Would You Feel", liked: false},
    {name: "Supermarket Flowers", liked: false}
  ])

  const handleText = (e)=>{
    setInputText(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    const songList = document.getElementById('songList')
    const song = document.createElement('li')

    song.textContent = InputText
    songList.appendChild(song)

    setInputText('')
  }



  return(
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/'  element={<Nav />} />
          <Route index element={<Home   />} />
          <Route path='/songlist' >
            <Route index element={<SongList songs={songs}/>}/>
            <Route path=':name' element={<SongItem />}/>
          </Route> 
      </Routes>
    </div>


  )
}

export default App
