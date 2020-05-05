import React from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import { Button } from '../../UI/Buttons/Button';

const Div = styled.div`
  color: ${({ theme }) => theme.text_secondary};
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
`;

const H4 = styled.h4`
  color: ${({ theme }) => theme.text_primary};
  margin-top: -5px;
`;

export const TrendsItem = (props) => {
  return (
    <Div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <p style={{ fontSize: '1.4rem' }}>{props.number}. Trending</p>
        <Button.Icon secondary>
          <IoIosArrowDown />
        </Button.Icon>
      </div>
      <H4>#Test</H4>
      <p>0 Tweets</p>
    </Div>
  );
};
