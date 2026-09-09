import SongItem from "../SongItem";
import { Link } from "react-router-dom";

function SongList({songs}) {

    return(
        <>
        <h1>Edward's Songs</h1>
        <p className="songlist">
            {songs.map((song, i) => <p><Link to={`/songlist/${song.name}`} >{song.name}</Link></p>)}
        </p>
        </>
    )
}

export default SongList;