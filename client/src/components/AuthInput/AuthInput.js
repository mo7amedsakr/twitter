import React, { forwardRef } from 'react';
import styled from 'styled-components';

const Label = styled.label`
  background-color: ${({ theme }) => theme.background_secondary};
  border-radius: 0.3rem;
  padding: 0.6rem;
  font-weight: 300;
  border-bottom: 3px solid ${({ theme }) => theme.user_color_hover};
  * {
    transition: all 0.1s;
  }

  &:focus-within {
    border-bottom: 3px solid ${({ theme }) => theme.user_color};
    p {
      color: ${({ theme }) => theme.user_color};
    }
  }
`;

const Input = styled.input`
  font-size: 1.8rem;
  font-weight: 400;
  padding: 0.5rem 0;
  width: 100%;
`;

export const AuthInput = forwardRef((props, ref) => {
  return (
    <Label>
      <p>{props.label}</p>
      <Input type={props.type} required ref={ref} />
    </Label>
  );
});
