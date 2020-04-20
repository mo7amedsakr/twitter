import React from 'react';
import classes from './RecommendationSection.module.scss';
import styled from 'styled-components';
import { Button } from '../Buttons/Button';

const Container = styled.div`
  background-color: ${({ theme }) => theme.background_secondary};
`;

const Showmore = styled.div`
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    background-color: ${({ theme }) => theme.background_hover};
  }
`;

export const RecommendationSection = (props) => {
  return (
    <Container className={classes.RecommendationSection}>
      <div className={classes.RecommendationSection_Header}>
        <h3>{props.title}</h3>
        <Button.Icon>{props.icon}</Button.Icon>
      </div>
      <div className={classes.RecommendationSection_Content}>
        {props.children}
      </div>
      <Showmore className={classes.RecommendationSection_Showmore}>
        <Button.Text>Show more</Button.Text>
      </Showmore>
    </Container>
  );
};
