import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios";

function CountryInfoLogic() {
    const [country, setCountry] = useState();
    const [lang, setLang] = useState();
    const [border, setBorder] = useState();
    const [currency, setCurrency] = useState();

    const slug = useParams().id;

    useEffect(() => {
        axios.get(`alpha/${slug}`).then((response) => {
            setCountry([response.data]);
            setLang(response.data.languages);
            setBorder(response.data.borders);
            setCurrency(response.data.currencies);
        });
        window.scrollTo(0, 0);
    }, [slug]);

    return { country, lang, border, currency };
}

export default CountryInfoLogic;
