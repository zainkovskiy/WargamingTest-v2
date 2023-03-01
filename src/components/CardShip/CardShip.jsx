import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { classes } from 'assets/classes';
import { level } from 'assets/levels';
import premium from 'images/premium.png';
import './CardShip.scss';

export const CardShip = ({ ship, urlFlag }) => {
  const lng = useSelector((state) => state.language.get('language'));
  const getPremium = () => {
    if (ship.tags.includes('premium')) {
      return <span className='card-small__prem card-small__icon' style={{ backgroundImage: `url(${premium})` }}></span>
    }
  }
  return (
    <Link to={`/ship/${ship.name}`} state={{ ship: ship, urlFlag: urlFlag }}> 
      <div className='card-small'>
        <div className='card-small__top'>
          <span className='card-small__title'>{ship.localization.mark[lng]}</span>
          <span className='card-small__title'>{level[ship.level]}</span>
        </div>
        <div className='card-small__bottom'>
          {
            getPremium()
          }
          <img className='card-small__img' src={`https://glossary-wows-global.gcdn.co/icons/${ship.icons.contour_alive}`} alt="ship" />
          <span className="card-small__class card-small__icon" style={{ backgroundImage: `url(${classes[ship.tags[0]]})` }}></span>
        </div>
      </div>
    </Link>
  )
};
