import React, { useState,useEffect,useContext } from 'react';
import  { context } from '../hooks/Usecontext';

function WeatherForm(props) {
  const {  weatherData,setWeatherData,location,setLocation} = useContext(context);
  const [photo, setPhoto] = useState(null);
  
  const fetchPhotoData = () => {
    fetch(`https://api.unsplash.com/search/photos/?query=${location}&client_id=HM75VG5ZXMe_8wWJaSGT36IBBkt90e1XVjwQx7rFV-M`)
    
    .then(response => response.json())
    
    .then(data => setPhoto(data.results[0].urls.small));
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit(location);
  }
  
    useEffect(() => {
    
        fetchPhotoData();
      
    }, [weatherData]);


  function handleChange(event) {
    setLocation(event.target.value);
  }

  return (
    <div className='lg:relative block lg:border-r-2 lg:border-white'>

    <form onSubmit={handleSubmit} className="mt-14 mb-8 mr-4">
    <input placeholder='Enter Location: ' type="text" value={location} onChange={handleChange} className="placeholder:text-black w-full p-2 border rounded-md mb-4 border-2 border-white text-black" />
    <button type="submit" className="border-2 border-white text-white font-medium py-2 px-4 rounded-md hover:bg-white hover:text-black mt-6 " >Submit</button>
  </form>
  <div className='lg:absolute lg:bottom-14 mr-4'>
    <h1 className='text-4xl font-extrabold text-gray-900 dark:text-white'>{location}</h1>
  <img className="mt-4 rounded-lg max-h-60 w-72 block mx-auto text-center object-cover" src={photo} alt={props.name} />
  </div>

    </div>
  );
}
export default WeatherForm; 