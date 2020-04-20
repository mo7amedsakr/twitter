import React from 'react';
import classes from './Layout.module.scss';
import Navigation from '../../components/Navigation/Navigation';
import { Recommendation } from '../../components/Recommendation/Recommendation';
import Container from '../Container/Container';

const Layout = (props) => {
  return (
    <Container>
      <Navigation />
      <div className={classes.Layout}>
        <main className={classes.Main}>{props.children}</main>
        <Recommendation />
      </div>
    </Container>
  );
};
export default Layout;
