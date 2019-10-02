// @flow

import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();
 const coinslist = "https://api.coingecko.com/api/v3/coins/list";
export default function AnimatedMulti() {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={}
      isMulti
      options={}
    />
  );
}
