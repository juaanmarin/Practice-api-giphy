import React, { useEffect, useState } from 'react'
import { Input } from '../../UI/Input/Input'
import { ApiMaper} from '../../UI/ApiMaper/ApiMaper';

export const Home = () => {
  const [cartGif , setCartGif] = useState([]);

  const search = () => {
    const URL = "https://api.giphy.com/v1/gifs/search?"
    const key = "1VZpNufj68IkJ561ViVReSiYCQ2TC31Q";
    const limit = "&limit=16";

    let search = `${URL}api_key=${key}&q=cheeseburgers`;

    console.log(search);

    fetch(search)
    .then(response => response.json())
    .then(data => setCartGif(data.data)
    )
  }

  const inputs = () => {
    const intp = document.querySelector('.inputTenor');

    const url = "https://api.giphy.com/v1/gifs/search?"
    const key = "1VZpNufj68IkJ561ViVReSiYCQ2TC31Q";
    const dato = `q=${intp.value}`
    const limit = "&limit=16";

    let search = `${url}api_key=${key}&${dato}`;

    fetch(search)
    .then(response => response.json())
    .then(data => setCartGif(data.data) )
  }

  useEffect( () => {
    search();
  }, [])


  return (
    <>
        <h1 className='api-giphy'>Api GIPHY</h1>

        <Input styles='input-giphy'  tipo='text' descrip='Nombre del gif' event={inputs}/>

        <div>
          <ApiMaper gif={cartGif}/>      
        </div>
    </>
  )
}