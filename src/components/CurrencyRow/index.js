import React from 'react';

import { Input, Select } from './styles';


export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount
  } = props
  return (
    <>
      <div>
        <Input type="number" value={amount} onChange={onChangeAmount} />
        <Select value={selectedCurrency} onChange={onChangeCurrency}>
          {currencyOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </Select>
      </div>

    </>
  );
}
