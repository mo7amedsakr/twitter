import React from 'react';
import { RecommendationSection } from '../UI/RecommendationSection/RecommendationSection';
import { WhoToFollowItem } from './WhoToFollowItem/WhoToFollowItem';
import profile from '../../assests/jeffrey_000.png';

export const WhoToFollow = (props) => {
  return (
    <RecommendationSection title="Who to follow">
      <WhoToFollowItem
        img={profile}
        name="Mohamed Sakr"
        username="m07amedsakr"
      />
      <WhoToFollowItem
        img={profile}
        name="Mohamed Sakr"
        username="m07amedsakr"
      />
      <WhoToFollowItem
        img={profile}
        name="Mohamed Sakr"
        username="m07amedsakr"
      />
    </RecommendationSection>
  );
};
