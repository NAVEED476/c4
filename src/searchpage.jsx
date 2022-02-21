import React, { useState, useEffect } from 'react'
import { Input } from './input';

export const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [inputdata, setinputsearch] = useState();
  const [data1 , setdata1] = useState()

  const fetchData = async () => {
    return await fetch('https://fast-reef-22226.herokuapp.com/data')
      .then(response => response.json())
      .then(data => {
         
         setinputsearch(data)
       });}
    

  const updateInput = async (input) => {
     const filtered = inputdata.filter(authordata => {
      return [authordata.author.toLowerCase().includes(input.toLowerCase()),
        authordata.description.toLowerCase().includes(input.toLowerCase()),
        authordata.title.toLowerCase().includes(input.toLowerCase()),
        authordata.creation_date.toLowerCase().includes(input.toLowerCase()),
        authordata.quality.toLowerCase().includes(input.toLowerCase()),
        authordata.explicit.toLowerCase().includes(input.toLowerCase()),
    ]
      
     })
     setInput(input);
     setdata1(filtered);
     
  }

  useEffect( () => {fetchData()},[]);
	
  return (
    <>
      <Input input={input} onChange={updateInput}/>
    </>
   );
}

//default SearchPage