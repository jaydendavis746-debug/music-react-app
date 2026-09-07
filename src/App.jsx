import { useState } from 'react'

function App() {

  const [like, setLike]= useState(false)
  const [btnText, setBtnText] = useState('click to like !')
  const [InputText, setInputText] = useState('')
  

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

    <>
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
      <ul id='songList'>
        <li>Eraser</li>
        <li>Catsle on the hill</li>
        <li>Dive</li>
        <li>Shape of you</li>
        <li>Perfect</li>
        <li>Galway Girl</li>
        <li>Happier</li>
        <li>New Man</li>
        <li>Hearts Don't Break Around Here</li>
        <li>What Do I Know</li>
        <li>How Would You Feel</li>
        <li>Supermarket Flowers </li>
      </ul>
    </div>

    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Add a song' value={InputText} onChange={handleText} required/>
      <button>Add</button>
    </form>
    </>


  )
}

export default App
