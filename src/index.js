import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

const coinDataApi =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true";
const coinListApi = "https://api.coingecko.com/api/v3/coins/list";
const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [coinList, setCoinList] = useState([]);
  useEffect(() => {
    const getCoinData = axios.get(coinDataApi);
    const getCoinList = axios.get(coinListApi);
    Promise.all([getCoinData, getCoinList])
      .then(([coinDataRes, coinListRes]) => {
        setCoinData(coinDataRes.data)
        setCoinList(coinListRes.data)
        console.log("response from coin data", coinDataRes);
        console.log("response from coin list", coinListRes);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Charts coinData={coinData} />
      
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
