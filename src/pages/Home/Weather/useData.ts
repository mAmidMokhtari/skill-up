import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";

import services from "../../../services";
import city from "./city";

export interface ICity {
  city?: string;
  lat: string;
  lng: string;
}
export interface IWeather {
  latitude: string;
  longitude: string;
  current_weather_units: {
    temperature: string;
  };
  current_weather: {
    weathercode: number;
    temperature: number;
  };
}

export const useData = () => {
  const { t } = useTranslation();

  const cities: ICity[] = city;

  const handleReceiveWeather = () =>
    services.weather.receivedWeather(selectedWeather);

  const {
    data: weatherInfo,
    error,
    isLoading,
    refetch,
    isRefetching,
  } = useQuery<IWeather, Error>("postsData", handleReceiveWeather);

  const [selectedCity, setSelectedCity] = useState<string>("");

  const [selectedWeather, setSelectedWeather] = useState<ICity>({
    lat: "36.3069",
    lng: "59.6042",
  });

  const handleGetWeather = (cityName: string) => {
    const city = cities.find((c) => c.city === cityName);
    city && setSelectedWeather(city);
  };

  useEffect(() => {
    selectedWeather && refetch();
  }, [selectedWeather, refetch]);

  return {
    t,
    error,
    isLoading,
    isRefetching,
    selectedCity,
    selectedWeather,
    cities,
    weatherInfo,
    setSelectedCity,
    handleGetWeather,
  };
};
