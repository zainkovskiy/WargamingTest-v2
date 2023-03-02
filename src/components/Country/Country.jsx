import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { CountryHead } from 'components/CountryHead';
import { ButtonUp } from 'components/ButtonUp';
import { Cards } from 'components/Cards';
import './Country.scss';

export const Country = () => {
  const { flag } = useParams();
  const location = useLocation();

  return (
    <>
      <div className='container' name='country-top'>
        <div className='country'>
          <CountryHead/>
          <Cards/>
        </div>
      </div>
      <ButtonUp
        to='country-top'
        offset={-70}
      />
    </>
  );
};
