import react from "react";

import './App.css'

export const Input = () => {
    return (
        <>
            <img className="image_google" src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
            <div>
                <input className="search-box" type="text"  placeholder="input search"/>
                <button >Search</button>
                
            </div> 
            <div>
                <button className="sortingbuttons">sort-alphabeticaaly</button>
                <button className="sortingbuttons">sort-alphabetically-desc</button>
                <button className="sortingbuttons">sort-by-date</button>
                <button className="sortingbuttons">sort-by-date-desc</button>
                <button className="sortingbuttons">sort-by-quality </button>
                <button className="sortingbuttons">sort-by-quality-desc </button>
                <button className="sortingbuttons">filter-explicit</button>
                
            </div>       
        </>
    )
}

