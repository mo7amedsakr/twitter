import React from 'react';
import { RecommendationSection } from '../UI/RecommendationSection/RecommendationSection';
import { FiSettings } from 'react-icons/fi';
import { TrendsItem } from './TrendsItem/TrendsItem';
import { WithBorderBottom } from '../UI/WithBorderBottom/WithBorderBottom';

export const Trendsforyou = (props) => {
  return (
    <RecommendationSection
      title="Trends for you"
      icon={<FiSettings size="1.4em" />}
    >
      <WithBorderBottom>
        <TrendsItem number="1" />
      </WithBorderBottom>
      <WithBorderBottom>
        <TrendsItem number="2" />
      </WithBorderBottom>
      <WithBorderBottom>
        <TrendsItem number="3" />
      </WithBorderBottom>
      <WithBorderBottom>
        <TrendsItem number="4" />
      </WithBorderBottom>
      <WithBorderBottom>
        <TrendsItem number="5" />
      </WithBorderBottom>
    </RecommendationSection>
  );
};
