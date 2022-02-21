import react,{useEffect, useState} from "react";
import { Search } from "./Components/search";
import axios from "axios";
 const Sresults = (props) =>{
//const url  =`https://fast-reef-22226.herokuapp.com/data/${props.data1}`

const [response,setresponse] = useState()
const [author,setauthor] =  useState()
const [desc,setdesc] = useState()


    
    return (
      <div>
          <h1>{response}</h1>
          <h1>{author}</h1>
          <h1>{desc}</h1>
      </div>
    )
}

export default Sresults;