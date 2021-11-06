import React, { useState, useEffect } from "react";
import axios from "../../axios";

function HomeLogic() {
    const [loader, setLoader] = useState(true);
    const [countries, setCountries] = useState();
    const [searchResult, setSearchResult] = useState();
    const [filter, setFilter] = useState("all");
    const [regionFilter, setRegionFilter] = useState("None");

    useEffect(() => {
        axios.get(`${filter}`).then((response) => {
            console.log(response);
            setCountries(response.data);
            setLoader(null);
        });
        if (filter === "all") {
            setRegionFilter("None");
        } else {
            setRegionFilter(filter.slice(7));
        }
    }, [filter]);

    const handleSearch = (event) => {
        event.preventDefault();
        let value = event.target.value.toLowerCase();
        let result = [];
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

    return {
        loader,
        countries,
        searchResult,
        filter,
        setFilter,
        regionFilter,
        handleSearch,
        handleClick,
        handleClose,
        open,
        anchorEl,
    };
}

export default HomeLogic;
