import React from 'react';
import classes from './Home.module.scss';
import { ContainerHeader } from '../../components/UI/ContainerHeader/ContainerHeader';
import { WiStars } from 'react-icons/wi';
import PostTweet from '../../components/PostTweet/PostTweet';

import { Tweets } from './Tweets/Tweets';

const Home = (props) => {
  return (
    <div className={classes.Home}>
      <ContainerHeader name="Home">
        <WiStars size="2.5em" />
      </ContainerHeader>
      <PostTweet />
      <div className={classes.BorderBottom}></div>
      <Tweets />
    </div>
  );
};

export default Home;
