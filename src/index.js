import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";
import DropDown from "./components/DropDown";

const coinDataApi =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true";
const coinListApi = "https://api.coingecko.com/api/v3/coins/list";
const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [coinList, setCoinList] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState([]);
  const [coinDropDown, setCoinDropDown] = useState([]);
let selectCoin = "";
  selectedCoin.forEach(select => {
    // getSelectCoin(select.value);
    return selectCoin = select.value;

  });
  console.log(" Hello from foreach", selectCoin);
  const DropdDownCoinURL = `https://api.coingecko.com/api/v3/coins/${selectCoin}?tickers=true&market_data=true&sparkline=true`;

  useEffect(() => {
    const getCoinData = axios.get(coinDataApi);
    const getCoinList = axios.get(coinListApi);
    const getDropDownCoin = axios.get(DropdDownCoinURL);
    Promise.all([getCoinData, getCoinList,getDropDownCoin])
      .then(([coinDataRes, coinListRes, DropDownRes]) => {
        setCoinData(coinDataRes.data);
        setCoinList(coinListRes.data);
        setCoinDropDown(DropDownRes.data)
        
        console.log("response from coin data", coinDataRes);
        console.log("response from coin list", coinListRes);
        console.log("response from dropdown coin URL", coinDropDown);
      })
      .catch(err => console.log(err));
  }, [selectedCoin]);
  return (
    <div className="App">
      <Navbar />
      <DropDown
        selectedCoin={selectedCoin}
        setSelectedCoin={setSelectedCoin}
        coinList={coinList}
      />
      <Charts coinDropDown={coinDropDown} coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
