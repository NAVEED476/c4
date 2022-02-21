import react, { useEffect, useState } from "react";
import Sresults from './sresults'

export const Search = () => {


    const [data, setdata] = useState("")



    const inputevent = (e) => {
        const data1 = e.target.value;

        console.log(data1)

        const result = data1.filter(function(item){
            setTimeout(() => {
                if(item.author||item.description||item.creationdate||item.quality||item.item.title){
                    setdata(data1)
                }
            }, 2000);
            
        })

        
    }

    const handlesubmit = () =>{
        
    }


    return (
        <>

            <form onSubmit={handlesubmit}>
                <input type="text" onChange={inputevent} value={data} />
                <button type="submit">Search</button>
            </form>
            <Sresults data1={data} />
        </>
    )
}