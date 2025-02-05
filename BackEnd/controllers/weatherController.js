// import fetch from "node-fetch";

//Dot Env file setup and related code
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5100;
const api_key = process.env.WEATHER_API;
const api_url = process.env.url;

//
export const getWeather = async (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.status(400).json({ error: "City is Required" });
  }
  try {
    const url = `${api_url}?q=${city}&appid=${api_key}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    const filtereredData = {
      city: data.name,
      temperature: data.main.temp,
      wind: data.wind.speed,
    };
    res.json({ message: `Weather for the city ${city}`, data: filtereredData });
  } catch (error) {
    console.log(error);
  }
};
