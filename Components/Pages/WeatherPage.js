import { clearPage, changeTitle } from '../../utils/render'
import useFetch from '../../utils/fetch'

// import images from img folder
import sunnyImg from '../../public/img/sun-26344_1280.webp'
import cloudyImg from '../../public/img/1139994.png'
import brokenCloudsImg from '../../public/img/97649_clouds_512x512.png'

const weatherPage = async () => {
  // Clear the existing page content and set the title to 'WeatherPage'
  clearPage()
  changeTitle('Weather Page')

  // Select the <main> element from the DOM
  const main = document.querySelector('main')

  // Fetch weather data and wait for the result
  const weather = await recuperationResultat()

  // Set the inner HTML of the <main> element with the structure generated from the weather data
  main.innerHTML = getStructureHTML(weather);


  // Function to fetch weather data from the OpenWeatherMap API
  async function recuperationResultat() {
    // OpenWeatherMap API Key and URL for a sample location
    const API_KEY = '5dd02901957ea2067fb092be8972d681'
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${API_KEY}`

    // Fetch data from the API
    const res = await useFetch(url)

    console.table(res)

    return res
  }

  // Function to generate HTML structure from the weather data
  function getStructureHTML(table) {
    return `
    <div id="block-weather">
      <div id="block-weather-region">
        <h3>${table.name} (${table.sys.country})</h3>
      </div>
      <div id="block-weather-info">
        <div id="block-weather-description">
          <p>${table.weather[0].description}</p>
        </div>
        <br>
        <div id="block-weather-img">
          <img src=${getImageByDescription(table.weather[0].description)}>
        </div>
      </div>
    </div>
    `
  }

  function getImageByDescription(description){
    let str = '';

    switch (description) {
      case "clear sky" :
        return str = sunnyImg;
      case "broken clouds" :
        return str = brokenCloudsImg;
      default : 
        return str = partlySunnyImg;
    } 
  }

}

// Export the WeatherPage component
export default weatherPage
