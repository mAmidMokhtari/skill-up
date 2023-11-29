import axios from "axios";

import { ICity } from "../pages/Home/Weather/useData";

export const receivedWeather = async ({ lat, lng }: ICity) => {
  const response = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`
  );
  return response.data;
};
