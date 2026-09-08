import SongItem from "../SongItem";

function SongList({songs}) {

    return(
        <ul className="songlist">
            {songs.map((song, i) => <SongItem song={song} key={i} />)}
        </ul>
    )
}

export default SongList;