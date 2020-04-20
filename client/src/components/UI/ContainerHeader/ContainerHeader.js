import React from 'react';
import styled from 'styled-components';
import classes from './ContainerHeader.module.scss';
import { Button } from '../Buttons/Button';

const Div = styled.div`
  background-color: ${({ theme }) => theme.background_primary};
  color: ${({ theme }) => theme.text_primary};
`;

export const ContainerHeader = (props) => {
  return (
    <Div className={classes.ContainerHeader}>
      <h4>{props.name}</h4>
      <Button.Icon>{props.children}</Button.Icon>
    </Div>
  );
};
