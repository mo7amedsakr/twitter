import React from 'react';
import classes from './WhoToFollowItem.module.scss';
import { WithBorderBottom } from '../../UI/WithBorderBottom/WithBorderBottom';
import { Button } from '../../UI/Buttons/Button';
import styled from 'styled-components';

const P = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.text_secondary};
`;

export const WhoToFollowItem = (props) => {
  return (
    <WithBorderBottom className={classes.WhoToFollowItem}>
      <div className={classes.WhoToFollowItem_Img}>
        <img src={props.img} alt="profile" />
      </div>
      <div className={classes.WhoToFollowItem_Names}>
        <h4>{props.name}</h4>
        <P>@{props.username}</P>
      </div>
      <div className={classes.WhoToFollowItem_Button}>
        <Button.Border>Follow</Button.Border>
      </div>
    </WithBorderBottom>
  );
};
