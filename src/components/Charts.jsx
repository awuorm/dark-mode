import React from "react";
import Chart from "./Chart";

const Charts = props => {
  const { coinData, coinDropDown } = props;
  return (
    <div className="charts">
      {Array.isArray(coinDropDown) ? (
        coinDropDown.map(coin => (
          <div className="chart__container" key={coin.name}>
            <h2 className="coin__title">{coin.name}</h2>
            <h4 className="coin__symbol">{coin.symbol}</h4>
            <div className="coin__logo">
              <img src={coin.image} height="40" alt={coin.name} />
            </div>
            <Chart sparklineData={coin.market_data.sparkline_7d.price} />
          </div>
        ))
      ) : (
        <div className="chart__container" key={coinDropDown.name}>
          <h2 className="coin__title">{coinDropDown.name}</h2>
          <h4 className="coin__symbol">{coinDropDown.symbol}</h4>
          <div className="coin__logo">
            <img src={coinDropDown.image} height="40" alt={coinDropDown.name} />
          </div>
          <Chart sparklineData={coinDropDown.market_data.sparkline_7d.price} />
        </div>
      )}
    </div>
  );
};
export default Charts;
