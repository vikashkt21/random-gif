import React from 'react'
import "./Random.css"
import { useState, useEffect     } from 'react';
import axios from 'axios';
import Spinner from './Spinner';


const API_KEY = 'dGrYzO6z47DjnM6DNy9OLT0Q8WOhoMxW';

 
function Random() {

const [gif, setgif] = useState("");
const [loading, setloading] = useState(false);

 async function fetchData(){
    setloading(true);
    console.log('Random');
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

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
    <div className='Random'>
        <h1> Random Gif</h1>
        {
            loading ? (<Spinner/>) : (<img src = {gif} width={450}  alt='image'/>) 
        }
        
        <button onClick={clickHandler}>Generate</button>
        



        
    </div>
  )
}

export default Random