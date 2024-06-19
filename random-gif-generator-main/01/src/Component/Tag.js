import React from 'react'
import "./Tag.css"
import { useState ,useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
const API_KEY = 'dGrYzO6z47DjnM6DNy9OLT0Q8WOhoMxW';


function Tag() {
    const [tag, settag] = useState("car");
    const [gif, setgif] = useState("");
    const [loading, setloading] = useState(false);
    
     async function fetchData(){
        setloading(true);
        console.log('Random');
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    
        const output= await  axios.get(url);
        console.log(output);
        
        const imageSource = output.data.data.images.downsized_large.url;
        console.log(imageSource);
        setgif(imageSource);
        setloading(false);
    
    }
    
    
    useEffect(() => {
     fetchData();
    }, [])
    
    function clickHandler () {
      
        fetchData();
    }
    

  return (
    <div className='tag'>
        
        <h1 className='head2'>Random gif</h1>
        {
           loading ? (<Spinner/>) : (<img src = {gif} width={450}  alt='image'/>)  
        }
        
        <input type="text" defaultValue = "cute cat"  value={tag}  />
        <button onClick={clickHandler} onChange={(event)=> settag(event.target.value) }>Generate</button>
    </div>

  )
}

export default Tag