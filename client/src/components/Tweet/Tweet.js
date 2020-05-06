import React, { useState } from 'react';
import styled from 'styled-components';
import classes from './Tweet.module.scss';
import { FiMessageSquare, FiRepeat, FiHeart, FiShare } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import { Button } from '../UI/Buttons/Button';
import { Link } from 'react-router-dom';
import { ProfileModal } from '../ProfileModal/ProfileModal';

const Container = styled.div`
  color: ${({ theme }) => theme.text_primary};
  &:hover {
    background-color: ${({ theme }) => theme.background_secondary};
  }
`;
const SpanSecondaryColor = styled.span`
  color: ${({ theme }) => theme.text_secondary};
`;

const ActionButton = styled.button`
  padding: 1rem;
  font-size: 1.1em;
  border-radius: 50%;
  display: flex;
  color: ${({ theme }) => theme.text_secondary};
  transition: all 0.1s;

  &:hover {
    ${({ type }) => {
      switch (type) {
        case 'blue':
          return `color:rgb(29, 161,242);background-color:rgba(29, 161,242, 0.07);`;
        case 'green':
          return `color:rgb(23, 191, 99);background-color:rgb(23, 191, 99,0.07);`;
        case 'pink':
          return `color:rgb(224, 36, 94);background-color:rgb(224, 36, 94,0.07);`;
        default:
          return;
      }
    }}
  }
`;

export const Tweet = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container className={classes.Tweet}>
      <div className={classes.Tweet_Img}>
        <img
          src={props.profile}
          alt=""
          onMouseEnter={() => setShowModal(true)}
        />
      </div>
      <div className={classes.Tweet_Content}>
        <div className={classes.Tweet_Content_Info}>
          <h4>
            <Link to={`/${props.username}`}>
              {props.name}{' '}
              <SpanSecondaryColor style={{ fontWeight: '400' }}>
                @{props.username}
              </SpanSecondaryColor>
            </Link>
          </h4>
          <Button.Icon secondary>
            <IoIosArrowDown />
          </Button.Icon>
        </div>
        <div className={classes.Tweet_Content_Tweet}>
          {props.children}
          {props.img && (
            <Link
              to={{
                pathname: `/photo/${props.img
                  .split('/')
                  .pop()
                  .replace('?size=small', '')}`,
                state: {
                  img: props.img.replace('?size=small', '?size=large'),
                  color: props.color,
                },
              }}
              className={classes.Tweet_Content_Tweet_Img}
            >
              <img src={props.img} alt="tweet" />
            </Link>
          )}
        </div>
        <div className={classes.Tweet_Content_Buttons}>
          <ActionButton type="blue">
            <FiMessageSquare />
          </ActionButton>
          <ActionButton type="green">
            <FiRepeat />
          </ActionButton>
          <ActionButton type="pink">
            <FiHeart />
          </ActionButton>
          <ActionButton type="blue">
            <FiShare />
          </ActionButton>
        </div>
      </div>
      {showModal ? (
        <ProfileModal
          close={() => setShowModal(false)}
          profile={props.profile}
          name={props.name}
          username={props.username}
        />
      ) : null}
    </Container>
  );
};
