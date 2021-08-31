import React, {useState} from 'react';
import {useHistory} from "react-router-dom";

const Search = () => {
    const history = useHistory()
    const [inputValue, setInputValue] = useState("")
    const handleClick = () => {
        history.push(`/browse/${inputValue}`)
        setTimeout(() => setInputValue(""), 1000)
    }
    const input = (e) => {
        setInputValue(e.target.value.trim())
    }
    const enterPress = (e) => {
        if (e.key === "Enter") {
            handleClick()
        }}
    return (
        <span className="search-bar">
            <input onKeyDown={enterPress} placeholder="Enter the name of the dish" className="header__input" value={inputValue} type="text" onChange={input}/>
            <button onClick={handleClick} className="header__btn" disabled={!inputValue.trim()}><i className="fas fa-search"/></button>
        </span>
    );
};

export default Search;