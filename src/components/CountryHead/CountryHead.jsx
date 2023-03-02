import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Filter } from 'components/Filter';
import './CountryHead.scss';

export const CountryHead = () => {
  const { flag } = useParams();
  const location = useLocation();
  return (
    <div
      className='country-head'
      style={{ backgroundImage: `url(${location.state.url})` }}
    >
      <span className='country-head__title'>{flag}</span>
      <Filter/>
    </div>
  );
};
