import React, { useState, useContext, createContext } from "react";

const SongContext = createContext();

export const SongProvider = ({ children }) => {
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

    return (
        <SongContext.Provider value={{ songs, setSongs }}>
            {children}
        </SongContext.Provider>
    );
};

export const useSong = () => useContext(SongContext);