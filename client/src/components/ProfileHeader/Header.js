import React from 'react';
import classes from './ProfileHeader.module.scss';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Label } from './Editable';

const StyledLink = styled(Link)`
  border: 5px solid ${({ theme }) => theme.background_primary};
`;

export const Header = (props) => {
  return (
    <div className={classes.Header}>
      {props.cover ? (
        <Link
          to={{
            pathname: `/photo/${props.cover.img}`,
            state: {
              img: props.cover.img,
              color: props.cover.color,
            },
          }}
          className={classes.Header_Cover}
        >
          <img src={props.cover.img} alt="" />
        </Link>
      ) : (
        <Label style={{ height: '10rem' }} as="div" />
      )}
      <StyledLink
        to={{
          pathname: `/photo/${props.photo.img}`,
          state: {
            img: props.photo.img,
            color: props.photo.color,
          },
        }}
        className={classes.Header_Photo}
      >
        <img src={props.photo.img} alt="" />
      </StyledLink>
    </div>
  );
};
