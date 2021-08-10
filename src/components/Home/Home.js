import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "../../axios";
import "./Home.scss";

function Home() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("").then((response) => {
      setCountries([response.data]);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="home">
      <SearchBar />
      <div className="countries">
        {countries ? (
          <>
            {countries.map((item) => (
              <div className="country" key={item.name}>
                <img src={item.flag} alt="" />
                <div className="country__content">
                  <h3>{item.name}</h3>
                  <p>
                    <span>Population: </span>
                    {item.population}
                  </p>
                  <p>
                    <span>Region: </span>
                    {item.region}
                  </p>
                  <p>
                    <span>Capital: </span>
                    {item.capital}
                  </p>
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
