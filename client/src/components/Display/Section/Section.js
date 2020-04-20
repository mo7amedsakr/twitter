import React from 'react';
import styled from 'styled-components';
import classes from './Section.module.scss';

const Div = styled.div`
  background-color: ${({ theme }) => theme.background_secondary};
  border-radius: 1.6rem;
  padding: 1rem 2.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const H5 = styled.h5`
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 1rem;
  font-size: 1.4rem;
`;

const Section = (props) => {
  return (
    <div className={classes.Section}>
      <H5>{props.title}</H5>
      <Div>{props.children}</Div>
    </div>
  );
};

export default Section;
