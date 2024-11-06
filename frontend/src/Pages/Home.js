import React, {useEffect, useState } from "react";
import { useSelector } from "react-redux";
import strings from "../localization";
import { getHgWeather } from "../Services/HgWeatherService";

const Home = () => {
  const authUser = useSelector((state) => state.AuthReducer.authUser);
  const [hgWeather, setHgWeather] = useState([]);  

  useEffect(() => {  
    const fetchHgWeather = async () => {  
      try {  
        const response = await getHgWeather();  
        setHgWeather(response);  
      } catch (error) {  
        console.error('Erro ao buscar HG Weather:', error);  
      }  
    };  
  
    fetchHgWeather();  
  }, []);  

  return (  
    <div className="main-container">  
      <h2>{strings.pages.home.title}</h2>  
      {authUser?.id && (  
        <p>  
          {strings.pages.home.welcome} {authUser.name} {authUser.surname}  
        </p>  
      )}  

      <hr></hr>
      {hgWeather.data !== undefined ? (  
        <div class="weather-container">  
        <div class="weather-info">  
          <h2>{strings.pages.home.hgWeather.title}</h2>  
          <p>{strings.pages.home.hgWeather.city}: {hgWeather.data.results.city}</p>  
          <p>{strings.pages.home.hgWeather.temp}: {hgWeather.data.results.temp} ºC</p>  
          <p>{strings.pages.home.hgWeather.windSpeedy}: {hgWeather.data.results.wind_speedy}</p>  
          <p>{strings.pages.home.hgWeather.humidity}: {hgWeather.data.results.humidity}%</p>  
        </div>  
        <div class="weather-image">  
        <img src={`http://assets.api.hgbrasil.com/weather/images/${hgWeather.data.results.img_id}.png`} alt="Clima Tempo Atual" />  
        </div>  
      </div>  
      ) : (  
        <p>{strings.pages.home.hgWeather.load}</p>  
      )}  
    </div>  
  );  
};

export default Home;
