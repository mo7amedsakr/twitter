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
              img: `http://127.0.0.1:4000/img/users/${props.cover.img}?size=large`,
              color: props.cover.color,
            },
          }}
          className={classes.Header_Cover}
        >
          <img
            src={`http://127.0.0.1:4000/img/users/${props.cover.img}?size=small`}
            alt=""
          />
        </Link>
      ) : (
        <Label style={{ height: '10rem' }} as="div" />
      )}
      <StyledLink
        to={{
          pathname: `/photo/sakrphoto`,
          state: {
            img: `http://127.0.0.1:4000/img/users/${props.photo.img}?size=large`,
            color: props.photo.color,
          },
        }}
        className={classes.Header_Photo}
      >
        <img
          src={`http://127.0.0.1:4000/img/users/${props.photo.img}?size=small`}
          alt=""
        />
      </StyledLink>
    </div>
  );
};
