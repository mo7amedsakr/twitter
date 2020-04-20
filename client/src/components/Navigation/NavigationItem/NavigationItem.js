import React from 'react';
import classes from './NavigationItem.module.scss';
import { Link } from 'react-router-dom';
import Li from './ListItem/ListItem';

const NavigationItem = (props) => {
  return (
    <Li selected={props.selected} nohover={props.nohover}>
      <Link to={props.to} className={classes.NavigationItem}>
        {props.children}
        {props.name && (
          <h3 className={classes.NavigationItem_H3}>{props.name}</h3>
        )}
      </Link>
    </Li>
  );
};
export default NavigationItem;
