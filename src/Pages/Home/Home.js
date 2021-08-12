import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "../../axios";
import "./Home.scss";

function Home() {
  const [countries, setCountries] = useState();

  useEffect(() => {
    axios.get("all").then((response) => {
      setCountries(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="home">
      <SearchBar />
      <div className="region__filter">
      </div>
      <div className="countries">
        {countries ? (
          <>
            {countries.map((data) => (
              <Link className="country__link" to={`/${data.alpha3Code}`}>
                <div className="country" key={data.name}>
                  <div
                    className="country__img"
                    style={{ backgroundImage: `url(${data.flag})` }}
                  ></div>
                  <div className="country__content">
                    <h3>{data.name}</h3>
                    <p>
                      <span>Population: </span>
                      {data.population}
                    </p>
                    <p>
                      <span>Region: </span>
                      {data.region}
                    </p>
                    <p>
                      <span>Capital: </span>
                      {data.capital}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
