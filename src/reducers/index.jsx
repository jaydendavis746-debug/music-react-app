import { createSlice } from "@reduxjs/toolkit";

const initialState = {songs: [{name: "Eraser", liked: false},
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
  ]}

const songsSlice = createSlice({
    name: "songs",
    initialState: initialState,
    reducers: {
        addSong: (state, action) => {
            state.songs.push({name: action.payload, liked: false})
        },
        updateLike: (state, action) => {
            state.songs = state.songs.map((song) => { if (song.name === action.payload) {
                song = {...song, liked: !song.liked} 
             } 
             return song
            })
        }
    }
})

export const {addSong, updateLike} = songsSlice.actions
export default songsSlice.reducer