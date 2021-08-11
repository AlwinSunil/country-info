import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Backarrow from "../../assets/icons/arrow.svg";
import axios from "../../axios";
import "./CountryInfo.scss";

function CountryInfo() {
  const [country, setCountry] = useState();
  const [lang, setLang] = useState();
  const [border, setBorder] = useState();

  const slug = useParams().id;

  useEffect(() => {
    axios.get(`alpha/${slug}`).then((response) => {
      setCountry([response.data]);
      setLang(response.data.languages);
      setBorder(response.data.borders);
      console.log(response.data);
    });
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="countryinfo">
      <div className="backward">
        <Link className="backward__link" to="/">
          <img src={Backarrow} alt="" />
          <p>Back</p>
        </Link>
      </div>
      {country ? (
        <>
          {country.map((data) => (
            <div className="info" key={data.alpha3Code}>
              <div className="info__img">
                <img src={data.flag} alt={data.name} />
              </div>
              <div className="info__container">
                <h2>{data.name}</h2>
                <div className="data">
                  <p>
                    <span>Native Name: </span>
                    {data.nativeName}
                  </p>
                  <p>
                    <span>Population: </span>
                    {data.population}
                  </p>
                  <p>
                    <span>Region: </span>
                    {data.region}
                  </p>
                  <p>
                    <span>Sub Region: </span>
                    {data.subregion}
                  </p>
                  <p>
                    <span>Capital: </span>
                    {data.capital}
                  </p>
                </div>
                <div className="data">
                  <p>
                    <span>Top Level Domain: </span>
                    {data.topLevelDomain}
                  </p>
                  <p>
                    <span>Currencies: </span>
                    {/* {data.currencies} */}
                  </p>
                  <div className="info__langs">
                    <p className="info__lang">Languages:&nbsp;</p>
                    {lang && (
                      <>
                        {lang.map((language) => (
                          <p className="lang__name">{language.name}&nbsp;</p>
                        ))}
                      </>
                    )}
                  </div>
                </div>
                <div className="info__borders">
                  <p>Border Countries:&nbsp;</p>
                  {border && (
                    <div className="info__borders-con">
                      {border.map((bordercountry) => (
                        <Link to={`/${bordercountry}`}>
                          <p className="info__border">{bordercountry}&nbsp;</p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
}

export default CountryInfo;
