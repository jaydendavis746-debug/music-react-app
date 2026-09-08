import { useEffect, useState } from "react";

function SongItem({song}){
    const [lyrics, setLyrics] = useState("")
    const cleanedName = song.name.replace(/\s+/g, '-').toLowerCase()
    const fetchAPI = `https://api.lyrics.ovh/v1/ed-sheeran/${cleanedName}`

    useEffect(() => {getLyric()}, [])

    async function getLyric(){
        const response = await fetch(fetchAPI);
        const data = await response.json();
        setLyrics(data.lyrics)
    }
    
    
    
    return(
        <li className="song">
            <p>{song.name}</p>
            <button>{song.liked}</button>
            <button>Lyrics</button>
            <p>{lyrics}</p>
        </li>
    )
    
    
}

export default SongItem