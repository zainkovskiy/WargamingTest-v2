import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { CardShip } from 'components/CardShip';
import './Cards.scss';

export const Cards = () => {
  const { flag } = useParams();
  const location = useLocation();
  const ships = useSelector((state) => state.ships.get('ships').filter(item => item.nation === flag));
  const sortShips = () => {
    ships.sort((a, b) => {
      if (a.level < b.level) {
        return -1;
      }
      if (a.level > b.level) {
        return 1;
      }
      return 0;
    })
  };
  sortShips();
  return (
    <div className='cards'>
      {
        ships.map((ship, idx) =>
          <CardShip
            key={idx}
            ship={ship}
            urlFlag={location.state.url}
          />
        )
      }
    </div>
  );
};
