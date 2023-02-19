import axios from "axios";
import React, { useState, useEffect } from "react";
import HomeCard from "../HomeCard";
import { baseUrl, fetchApi } from "../../utils/FetchApi";
import InputArea from "../InputArea/InputArea";

const Rent = () => {
  const [rentalHomes, setRentalHomes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const [loadMessage, setLoadMessage] = useState(true);

  /* Creating a state variable called filters, and a function called setFilters here we store the filters applied */
  const [filters, setFilters] = useState({
    priceMax: "",
    furnishingStatus: "",
    sort: "",
  });

  /**
   * It takes a parameter called filters, and then it calls the setFilters function, passing in the
   * filters parameter.
   * @param filters - An object containing the filters that you want to apply to the data.
   */
  const getFilteredData = (filters) => {
    setFilters(filters);
  };

  console.log("filters", filters);

  useEffect(() => {
    const request = axios.CancelToken.source();
    const fetchHomesDetails = async () => {
      setLoadMessage(true);
      try {
        const rentalHomesData = await fetchApi(
          `${baseUrl}/properties/list?locationExternalIDs=5002,6020
          &purpose=for-rent&hitsPerPage=20&priceMax=${filters.priceMax}
            &furnishingStatus=${filters.furnishingStatus} 
            &sort=${filters.sort}
          `
        );

        setRentalHomes(rentalHomesData.hits);
        setIsLoading(false);
        setLoadMessage(false);
        setError(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setError(true);
      }
    };

    fetchHomesDetails();
    console.log("api CALL- RentProperty");

    return () => {
      request.cancel();
    };
  }, [filters]);

  if (isLoading) {
    return (
      <div className="App-header">
        <div className="spinner-border text-primary " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else if (error) {
    return <h1 className="App-header">Something went wrong...</h1>;
  } else {
    return (
      <>
        <InputArea getFilters={getFilteredData} />

        {loadMessage ? (
          <span className="App-header">Bringing Homes in a second...</span>
        ) : (
          " "
        )}
        <div className="homeList">
          <div className="row">
            {rentalHomes.map((rentalHome) => (
              <div className="col-sm-12 col-md-6 col-lg-4">
                <HomeCard home={rentalHome} />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
};

export default Rent;
