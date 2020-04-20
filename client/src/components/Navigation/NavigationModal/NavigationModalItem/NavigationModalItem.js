import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import classes from './NavigationModalItem.module.scss';

const Div = styled.div`
  color: ${({ theme }) => theme.text_secondary};
  width: 100%;
  transition: background-color 0.1s;
  &:hover {
    background-color: ${({ theme }) => theme.background_hover};
  }
`;

const Span = styled.span`
  color: ${({ theme }) => theme.text_primary};
  margin-left: 1.1rem;
`;

const NavigationModalItem = (props) => {
  return (
    <Div>
      <Link className={classes.Link} to={props.to}>
        {props.children}
        <Span style={props.style}>{props.name}</Span>
      </Link>
    </Div>
  );
};
export default NavigationModalItem;
