import { useState } from 'react'
import './App.css'


import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {

  const [location, setLocation] = useState({});
  const [search, setSearch] = useState("");


  const [map, setMap] = useState("https://placehold.co/600x400");
  
  const handleChange = (event) => {

    setSearch(event.target.value)

  }

  async function getLocation(event) {
    event.preventDefault();

    const API = `https://eu1.locationiq.com/v1/search?q=${search}&key=${API_KEY}&format=json`;
    
    const res = await axios.get(API);

    console.log("RES DATA", res.data);

    setLocation(res.data[0]);

    const API_IMG = `https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${res.data[0].lat},${res.data[0].lon}&zoom=14&size=600x400&format=jpg`

    // const res_IMG = await axios.get(API_IMG);

    // console.log("RES IMG", res_IMG)

    setMap(API_IMG);
  }

  return (
    <div className='text-center'>
      <h1 className='font-extrabold'>City Explorer</h1>
      <p>{location.display_name}</p>

      <div className='flex justify-center gap-6 location-latlon'>
        <p>{`Lat: ${location.lat}`}</p>
        <p>{`Lon: ${location.lon}`}</p>
      </div>

      <form onSubmit={getLocation} className='flex justify-between m-4 border-2 max-w-md mx-auto border-black rounded-lg'>
        <input className="grow pl-4 rounded-lg" onChange={handleChange} type="text" placeholder="Location"/>
        <button className='p-4 bg-blue-400 text-white hover:bg-blue-600'>Get Location</button>
      </form>
      <img className="mx-auto" src={map}></img>
      
    </div>
  )
}

export default App
