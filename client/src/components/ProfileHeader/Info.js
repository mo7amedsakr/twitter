import React from 'react';
import classes from './ProfileHeader.module.scss';
import styled from 'styled-components';

const P = styled.p`
  color: ${({ theme }) => theme.text_secondary};
`;

export const Info = (props) => {
  return (
    <div className={classes.User}>
      {props.children}
      <h3>{props.name}</h3>
      <P>@{props.username}</P>
      <p>{props.bio}</p>
    </div>
  );
};
