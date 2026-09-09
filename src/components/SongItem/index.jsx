import { useEffect, useState, } from "react";
import { useParams, useNavigate } from "react-router-dom";


function SongItem({}){

  const [like, setLike]= useState(false)
  const [btnText, setBtnText] = useState('click to like !')

  const {name} = useParams()
  const navigate = useNavigate()

  const [lyrics, setLyrics] = useState("")
  const cleanedName = name.replace(/\s+/g, '-').toLowerCase()
  const fetchAPI = `https://api.lyrics.ovh/v1/ed-sheeran/${cleanedName}`
  
  
  useEffect(() => {getLyric()}, [])
  
  async function getLyric(){
      const response = await fetch(fetchAPI);
      const data = await response.json();
      setLyrics(data.lyrics)
    }
    
    
    const updateLike = ()=>{
      setLike(!like)    
     like ? setBtnText('Unliked') : setBtnText('Liked')
    }
    
    return(

        <>
            <h1>{name}: Chorus</h1>
            <p>{lyrics || "No lyrics found"}</p>
            <button onClick={updateLike}>{btnText}</button>
            <button onClick={()=> navigate('/songlist')}>Return to songlist</button>

        </>
        
    )
    
    
}

export default SongItem