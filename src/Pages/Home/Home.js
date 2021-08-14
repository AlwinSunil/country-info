import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import axios from "../../axios";
import "./Home.scss";

function Home() {
  const [countries, setCountries] = useState();
  const [searchResult, setSearchResult] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    axios.get(`${filter}`).then((response) => {
      setCountries(response.data);
      console.log(response.data);
    });
  }, [filter]);

  const handleSearch = (event) => {
    event.preventDefault();
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = countries.filter((data) => {
      return data.name.toLowerCase().includes(value.toLowerCase());
    });
    setSearchResult(result);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="home">
      <div className="search">
        <form action="" onSubmit={handleSearch}>
          <input
            className="search__input"
            type="search"
            onChange={(event) => handleSearch(event)}
            placeholder="Search for a Country"
          />
          <input className="search__go" type="button" value="Search" />
        </form>
        <Button
          aria-controls="fade-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Fliter by Region
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={() => setFilter("all")}>All</MenuItem>
          <MenuItem onClick={() => setFilter("region/africa")}>Africa</MenuItem>
          <MenuItem onClick={() => setFilter("region/america")}>
            America
          </MenuItem>
          <MenuItem onClick={() => setFilter("region/asia")}>Asia</MenuItem>
          <MenuItem onClick={() => setFilter("region/europe")}>Europe</MenuItem>
          <MenuItem onClick={() => setFilter("region/oceania")}>
            Oceania
          </MenuItem>
        </Menu>
      </div>
      <div className="region__filter"></div>
      {searchResult ? (
        <div className="countries">
          {searchResult.map((results) => (
            <Link className="country__link" to={`/${results.alpha3Code}`}>
              <div className="country" key={results.name}>
                <div
                  className="country__img"
                  style={{ backgroundImage: `url(${results.flag})` }}
                ></div>
                <div className="country__content">
                  <h3>{results.name}</h3>
                  <p>
                    <span>Population: </span>
                    {results.population}
                  </p>
                  <p>
                    <span>Region: </span>
                    {results.region}
                  </p>
                  <p>
                    <span>Capital: </span>
                    {results.capital}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default Home;
