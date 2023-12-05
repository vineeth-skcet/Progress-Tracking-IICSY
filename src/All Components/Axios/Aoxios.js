import React,{useState} from 'react'
import axios from 'axios';

function App(){
  const [state,setState]=useState([]);
  axios.get("https://jsonplaceholder.typicode.com/albums")
  .then((response)=>{
    const data=response.data;
    setState(data);
    console.log(data[0].title);
  })
  return(
    <ul>
    {
      state.map((album)=>(
        <li key={album.id}>{album.title}</li>
      ))
    }</ul>
  );
}

export default App;