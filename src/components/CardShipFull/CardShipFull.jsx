import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classes } from 'assets/classes';
import { level } from 'assets/levels';
import premium from 'images/premium.png';
import './CardShipFull.scss';

export const CardShipFull = () => {
  const lng = useSelector((state) => state.language.get('language'));
  const location = useLocation();
  const ship = location.state.ship;
  const urlFlag = location.state.urlFlag;
  const getPremium = () => {
    if (ship.tags.includes('premium')) {
      return <span className='card-full__icon' style={{ backgroundImage: `url(${premium})` }}></span>
    }
  }
  return (
    <div className="container">
      <div className='card-full'>
        <div className='card-full__top'>
          <div className='card-full__top_left'>
            <span className='card-full__flag' style={{ backgroundImage: `url(${urlFlag})` }}></span>
            <span className='card-full__title'>{ship.localization.mark[lng]}</span>
          </div>
          <span className='card-full__title'>{level[ship.level]}</span>
        </div>
        <div className='card-full__bottom'
          style={{ backgroundImage: `url(https://glossary-wows-global.gcdn.co/icons/${ship.icons.large})` }}
        >
          <div className='card-full__info'>
            <p className='card-full__descrition'>{ship.localization.description[lng]}</p>
            <div className='card-full__icons'>
              {
                getPremium()
              }
              <span className=" card-full__icon" style={{ backgroundImage: `url(${classes[ship.tags[0]]})` }}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
