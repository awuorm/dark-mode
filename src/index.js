import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";
import DropDown from "./components/DropDown";

const App = () => {
  const [selectedCoin, setSelectedCoin] = useState([]); // Set initial array received from API before user clicks on dropdown
  const [coinDropDown, setCoinDropDown] = useState([]); // Set  array received when user clicks on dropdown
  let selectCoin = ""; //Why couldn't  I set state for this? Resulted in re-rendering error...
  selectedCoin.forEach(select => { // How do I fix this bug ?
    return (selectCoin = select.value);
  });
  const DropdDownCoinURL = `https://api.coingecko.com/api/v3/coins/${selectCoin}?tickers=true&market_data=true&sparkline=true`;

  useEffect(() => {
    const getDropDownCoin = axios.get(DropdDownCoinURL);
    getDropDownCoin
      .then(DropDownRes => {
        setCoinDropDown(DropDownRes.data);
      })
      .catch(err => console.log(err.message));
  }, [selectedCoin]);
  return (
    <div className="App">
      <Navbar />
      <DropDown selectedCoin={selectedCoin} setSelectedCoin={setSelectedCoin} />
      <Charts coinDropDown={coinDropDown} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
