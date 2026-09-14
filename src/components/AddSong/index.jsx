import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addSong } from "../../reducers";

function AddSong () {
    const [inputText, setInputText] = useState('');
    const dispatch = useDispatch()
    
    const navigate = useNavigate();

    const handleInput = (e) => {
        setInputText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addSong(inputText))
        setInputText('')
        navigate("/songlist")
    }

  return (
    <form onSubmit={handleSubmit}>
      <input value={inputText} type="text" className="song-input" onChange={handleInput} />
      <button type="submit" className="song-button">Add</button>
    </form>
  )

}

export default AddSong
