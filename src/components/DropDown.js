import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {coinsOptions} from "../components/Data";
 

const animatedComponents = makeAnimated();
const DropDown = props => {
  const handleChange = (selectedOption) => {
    props.setSelectedCoin(selectedOption);
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

