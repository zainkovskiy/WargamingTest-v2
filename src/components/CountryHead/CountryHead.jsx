import React from 'react';
import './CountryHead.scss';

export const CountryHead = ({ url, currentFlag }) => {
  return (
    <div
      className='country-head'
      style={{ backgroundImage: `url(${url})` }}
    >
      <span className='country-head__title'>{currentFlag}</span>
    </div>
  );
};
