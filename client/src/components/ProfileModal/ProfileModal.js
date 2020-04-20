import React from 'react';
import classes from './ProfileModal.module.scss';
import styled from 'styled-components';
import { Button } from '../UI/Buttons/Button';

const Div = styled.div`
  background-color: ${({ theme }) => theme.background_primary};
  box-shadow: ${({ theme }) => theme.shadow} 0px 0px 15px,
    ${({ theme }) => theme.shadow} 0px 0px 3px 1px;
  width: 30rem;
`;

const P = styled.p`
  color: ${({ theme }) => theme.text_secondary};
`;

export const ProfileModal = (props) => {
  return (
    <Div className={classes.ProfileModal}>
      <div className={classes.ProfileModal_Account}>
        <div className={classes.ProfileModal_Account_Profile}>
          <img src={props.profile} alt="profile" />
          <h4>{props.name}</h4>
          <P>@{props.username}</P>
        </div>
        <Button.Border>Follow</Button.Border>
      </div>
      <div className={classes.ProfileModal_Bio}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className={classes.ProfileModal_Info}>
        <h4>
          69 <P>Following</P>
        </h4>
        <h4>
          69 <P>Followers</P>
        </h4>
      </div>
    </Div>
  );
};
