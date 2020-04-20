import React from 'react';
import classes from './Recommendation.module.scss';
import { SearchTweet } from '../SearchTweet/SearchTweet';
import { Trendsforyou } from '../Trendsforyou/Trendsforyou';
import { WhoToFollow } from '../WhoToFollow/WhoToFollow';

export const Recommendation = (props) => {
  return (
    <div className={classes.Recommendation}>
      <div style={{ position: 'fixed', width: '35rem' }}>
        <SearchTweet />
        <Trendsforyou />
        <WhoToFollow />
      </div>
    </div>
  );
};
