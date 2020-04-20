import React from 'react';
import classes from './Auth.module.scss';
import styled from 'styled-components';
import { FaTwitter } from 'react-icons/fa';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const Auth = (props) => {
  const SubmitBtn = styled.input`
    background-color: ${({ theme }) => theme.user_color};
    padding: 1rem;
    border-radius: 5rem;
    &:disabled {
      opacity: 0.6;
    }
  `;

  return (
    <Container fixed maxWidth="sm">
      <div className={classes.Auth}>
        <i>
          <FaTwitter size="3em" />
        </i>
        <h2>{props.label}</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            return props.submit();
          }}
          className={classes.AuthForm}
        >
          {props.children}
          <SubmitBtn
            type="submit"
            className={classes.AuthSubmitBtn}
            placeholder={props.btnLabel}
          />
        </form>
        {props.btnLabel === 'Login' ? (
          <Link to="/signup">Sign up for twitter</Link>
        ) : (
          <Link to="/login">Log in to twitter</Link>
        )}
      </div>
    </Container>
  );
};
