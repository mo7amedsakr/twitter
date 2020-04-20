import React from 'react';
import classes from './SearchTweet.module.scss';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

const Form = styled.form`
  display: flex;
  align-items: center;
  &:focus-within {
    button {
      color: ${({ theme }) => theme.user_color};
    }
    input {
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.user_color};
    }
  }
`;

const Input = styled.input`
  background-color: ${({ theme }) => theme.background_secondary};
  &::placeholder {
    color: ${({ theme }) => theme.text_secondary};
  }
`;

const Button = styled.button`
  color: ${({ theme }) => theme.text_secondary};
`;

export const SearchTweet = (props) => {
  return (
    <Form className={classes.Form} {...props}>
      <Button className={classes.Form_Button}>
        <FiSearch />
      </Button>
      <Input
        type="text"
        className={classes.Form_Input}
        placeholder="Search Twitter"
      />
    </Form>
  );
};
