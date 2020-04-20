import React from 'react';
import styled from 'styled-components';
import classes from './PageNotFound.module.scss';

export const PageNotFound = (props) => {
  const H1 = styled.h1`
    color: ${({ theme }) => theme.text_primary};
  `;

  return (
    <div className={classes.PageNotFound}>
      <H1>Page not done yet :(</H1>
    </div>
  );
};
