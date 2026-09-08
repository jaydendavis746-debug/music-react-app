function SongItem(song){
    return(
        <li className="song">
            <p>{song.name}</p>
            <button>{song.liked}</button>
            <button>Lyrics</button>
            <p></p>
        </li>
    )
}

export default SongItem