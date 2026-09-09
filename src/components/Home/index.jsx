
import { useState } from "react"

function Home() {


  const [like, setLike]= useState(false)
  const [btnText, setBtnText] = useState('click to like !')

  const updateLike = ()=>{
    setLike(!like)    
   like ? setBtnText('Unliked') : setBtnText('Liked')
  }

  return (
    <>
      <h1>Ed Sheeran </h1>
      <h2>Pop Artist</h2>
      <p>
        Edward Christopher Sheeran is an English singer-songwriter. Born in
        Halifax, West Yorkshire, and raised in Framlingham, Suffolk, he began
        writing songs around the age of eleven. In early 2011, Sheeran
        independently released the extended play No.5 Collaborations Project. He
        signed with Asylum Records the same year.
      </p>
      <div className="albums">
        <h2>Latest Album: Divide</h2>
        <button className="LikeBtn" onClick={updateLike}>
          {btnText}
        </button>
        <div className="AlbumCover">
          <img src="../src/assets/divide.png" alt="Divide cover art" />
        </div>
      </div>
    </>
  );
}


export default Home