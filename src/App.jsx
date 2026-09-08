import { useState } from 'react'
import { SongList } from './components'

function App() {

  const [like, setLike]= useState(false)
  const [btnText, setBtnText] = useState('click to like !')
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


  const updateLike = ()=>{
    setLike(!like)    
   like ? setBtnText('Unliked') : setBtnText('Liked')
  }

  return(

    <div>
    <h1>Ed Sheeran </h1>
    <h2>Pop Artist</h2>
    <p>
      Edward Christopher Sheeran is an English singer-songwriter. 
      Born in Halifax, West Yorkshire, and raised in Framlingham, Suffolk, 
      he began writing songs around the age of eleven. In early 2011, 
      Sheeran independently released the extended play No.5 Collaborations Project. 
      He signed with Asylum Records the same year.
    </p>
    <div className='albums'>
      <h2>Latest Album: Divide</h2>
      <button className='LikeBtn' onClick={updateLike}>{btnText}</button>
      <div className='AlbumCover'>
        <img src="../src/assets/divide.png" 
        alt="Divide cover art" />
      </div>
      <h3>Song List</h3>
      <SongList songs={songs}/>
    </div>

    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Add a song' value={InputText} onChange={handleText} required/>
      <button>Add</button>
    </form>
    </div>


  )
}

export default App
