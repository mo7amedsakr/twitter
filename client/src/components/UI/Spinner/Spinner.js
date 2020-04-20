import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  &,
  &:after {
    border-radius: 50%;
    width: 8em;
    height: 8em;
  }
  margin: 0 auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1em solid ${({ theme }) => theme.user_color_hover};
  border-right: 1em solid ${({ theme }) => theme.user_color_hover};
  border-bottom: 1em solid ${({ theme }) => theme.user_color_hover};
  border-left: 1em solid ${({ theme }) => theme.user_color};
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;

  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export const Spinner = () => {
  return (
    <div style={{ height: '100vh', padding: '6rem 0' }}>
      <Div>Loading...</Div>
    </div>
  );
};
