import React, { useEffect, useState } from "react";
import "./style.css";

const Temp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=eb62351c8bc0db9e16894eb258b32307`;
      const response = await fetch(url);
      const resj = await response.json();
      setCity(resj.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputdata">
          <input
            type="search"
            className="inputfield"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p className="nodata">Results not found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">{search}</h2>
              <h1 className="temp">{city.temp}&#8451;</h1>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Temp;
