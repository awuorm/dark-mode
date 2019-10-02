import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {coinsOptions} from "../components/Data";
 

const animatedComponents = makeAnimated();
const DropDown = props => {
//   console.log("props from dropdown", props);
//   const coins = props.coinList;
//   const reducedCoins = coins.filter((coin, index) => {
//     if (index < 20) return coin;
//   });
//   const rCoins = reducedCoins.map((coin, index) => {
//     if (index < 20) return coin.id;
//   });
//   console.log(" 20 coins", rCoins);
  const handleChange = (selectedOption) => {
    props.setSelectedCoin(selectedOption);
    console.log(`Option selected:`, props.selectedCoin);
  }

  return (
    <Select className="drop-down" 
      closeMenuOnSelect={false}
     onChange={handleChange}
      components={animatedComponents}
      isMulti
      options={coinsOptions}
    />
    
  );
};

export default DropDown;

