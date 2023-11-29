import { FC } from "react";

import { useData } from "./useData";
import { weatherCodeMap } from "./weatherCode";

const Weather: FC = () => {
  const data = useData();

  if (data.isLoading)
    return <span className="loading loading-bars loading-lg">Loading...</span>;
  if (data.error)
    return (
      <div className="text-3xl font-semibold text-error">
        {data.error.message}
      </div>
    );

  return (
    <div className="card w-full lg:w-4/5 bg-base-50 shadow-xl justify-center items-center p-4">
      <select
        className="select select-info w-full max-w-xs my-8"
        value={data.selectedCity}
        onChange={(e) => {
          data.setSelectedCity(e.target.value);
          data.handleGetWeather(e.target.value);
        }}
      >
        <option disabled>{data.t("mainLayout.weather.city")}</option>
        {data.cities.map((c, idx) => (
          <option key={idx} value={c.city}>
            {c.city}
          </option>
        ))}
      </select>
      <div className="card w-full lg:w-3/5 bg-blue-50 justify-center items-center p-2">
        <h2 className="md:text-2xl lg:text-4xl p-4">
          {data.selectedCity ? data.selectedCity : "Tehran"}
        </h2>
        {data.weatherInfo && (
          <>
            <h3 className="md:text-2xl lg:text-4xl p-4">
              {data.weatherInfo.current_weather.temperature}{" "}
              {data.weatherInfo.current_weather_units.temperature}
            </h3>
            <h3 className="md:text-2xl lg:text-4xl p-4">
              {weatherCodeMap[data.weatherInfo.current_weather.weathercode]}
            </h3>
          </>
        )}
      </div>
    </div>
  );
};

export default Weather;
