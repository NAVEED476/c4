import react, { useEffect, useState } from "react";
import axios from "axios";
const Data = () =>{
    const [data1,setdata] = useState()
    const [author,setauthor]=useState()
    const [response,setresponse]=useState()
    const [desc,setdesc] = useState()

    useEffect(()=>{
        async function getdata(){
            const res = await axios.get(`https://fast-reef-22226.herokuapp.com/data/`)

            console.log(res.data)

            setresponse(res.data.title)
            setauthor(res.data.author)
            setdesc(res.data.description)



        
        }
        getdata()
    })
    return (
        <>
        <h1>{desc}</h1>
        </>
    )
}

export default Data;