import { Link } from "react-router-dom";
import { ReactComponent as Backarrow } from "../../assets/icons/arrow.svg";
import AnimContainer from "../../components/AnimContainer/AnimContainer";
import CountryInfoLogic from "./CountryInfoLogic";
import "./CountryInfo.scss";

function CountryInfo() {
    const { country, lang, border, currency } = CountryInfoLogic();

    return (
        <div className="countryinfo">
            <div className="backward btn">
                <Link className="backward__link" to="/">
                    <Backarrow />
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
                                <div className="data__holder">
                                    <div className="data">
                                        <p>
                                            <span>Native Name : </span>
                                            {data.nativeName}
                                        </p>
                                        <p>
                                            <span>Population : </span>
                                            {data.population}
                                        </p>
                                        <p>
                                            <span>Region : </span>
                                            {data.region}
                                        </p>
                                        <p>
                                            <span>Sub Region : </span>
                                            {data.subregion}
                                        </p>
                                        <p>
                                            <span>Capital : </span>
                                            {data.capital}
                                        </p>
                                    </div>
                                    <div className="data">
                                        <p>
                                            <span>Top Level Domain : </span>
                                            {data.topLevelDomain}
                                        </p>
                                        <div className="info__currs">
                                            <p className="info__curr">
                                                Currencies :&nbsp;
                                            </p>
                                            {currency && (
                                                <>
                                                    {currency.map((curr) => (
                                                        <p className="curr__name">
                                                            {curr.name}&nbsp;
                                                        </p>
                                                    ))}
                                                </>
                                            )}
                                        </div>
                                        <div className="info__langs">
                                            <p className="info__lang">
                                                Languages :&nbsp;
                                            </p>
                                            {lang && (
                                                <>
                                                    {lang.map((language) => (
                                                        <p className="lang__name">
                                                            {language.name}
                                                            &nbsp;
                                                        </p>
                                                    ))}
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="info__borders">
                                    <p>Border Countries :&nbsp;</p>
                                    {border && (
                                        <div className="info__borders-con">
                                            {border.map((bordercountry) => (
                                                <Link to={`/${bordercountry}`}>
                                                    <p className="info__border">
                                                        {bordercountry}&nbsp;
                                                    </p>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            ) : (
                <div className="loader country__loader">
                    <AnimContainer />
                </div>
            )}
        </div>
    );
}

export default CountryInfo;
