import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setFilterCountry, resetFilter } from 'actions/ships';
import { CardShip } from 'components/CardShip';
import './Cards.scss';

export const Cards = () => {
  const { flag } = useParams();
  const ships = useSelector((state) => state.ships.get('filterCountry'));
  const dispatch = useDispatch();

  useEffect(() => {
    getFiltredShips();
  }, [])

  const getFiltredShips = () => {
    dispatch(setFilterCountry(flag));
    dispatch(resetFilter(flag));
  }

  return (
    <div className='cards'>
      {
        ships.map((ship, idx) =>
          <CardShip
            key={idx}
            ship={ship}
          />
        )
      }
    </div>
  );
};
