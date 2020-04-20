import React from 'react';
import styled from 'styled-components';
import classes from './TweetPreview.module.scss';

const Span = styled.span`
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 300;
  margin-left: 1rem;
`;

const TweetPreview = (props) => {
  return (
    <div className={classes.TweetPreview}>
      <div className={classes.TweetPreview_Info}>
        <img
          className={classes.TweetPreview_Info_Profile}
          src={props.profile}
          alt="preview"
        />
        <h4>
          {props.name}
          <Span>@{props.username}</Span>
        </h4>
      </div>
      <div className={classes.TweetPreview_Content}>{props.children}</div>
    </div>
  );
};
export default TweetPreview;
