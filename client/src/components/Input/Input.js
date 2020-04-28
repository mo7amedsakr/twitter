import React, { forwardRef } from 'react';
import styled from 'styled-components';

export const Label = styled.label`
  background-color: ${({ theme }) => theme.background_secondary};
  border-radius: 0.3rem;
  padding: 0.6rem;
  font-weight: 300;
  border-bottom: 3px solid ${({ theme }) => theme.user_color_hover};
  width: 100%;
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

const StyledInput = styled.input`
  font-size: 1.8rem;
  font-weight: 400;
  padding: 0.5rem 0;
  width: 100%;
`;

export const Input = forwardRef((props, ref) => {
  return (
    <Label>
      <p>{props.label}</p>
      <StyledInput
        type={props.type}
        required
        ref={ref}
        defaultValue={props.defaultValue}
      />
    </Label>
  );
});
