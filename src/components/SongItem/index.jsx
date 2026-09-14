import { useEffect, useState, } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateLike } from "../../reducers";
import { useSelector } from "react-redux";


function SongItem({}){

  const [btnText, setBtnText] = useState('click to like !')
  const dispatch = useDispatch()
  const songs = useSelector(state => state.songs);

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
    
    const changeLike = () =>{
        dispatch(updateLike(name))
        const liked = songs.filter((song) => song.name === name)[0].liked
        liked ? setBtnText("Unliked") : setBtnText("Liked")
    }
    
    return(

        <>
            <h1>{name}: Chorus</h1>
            <p>{lyrics || "No lyrics found"}</p>
            <button onClick={changeLike}>{btnText}</button>
            <button onClick={()=> navigate('/songlist')}>Return to songlist</button>

        </>
        
    )
    
    
}

export default SongItem