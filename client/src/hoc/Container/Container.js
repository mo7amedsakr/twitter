import React from 'react';
import { Container, useMediaQuery, useTheme } from '@material-ui/core';

const ResponsiveContainer = (props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container fixed disableGutters={matches}>
      {props.children}
    </Container>
  );
};
export default ResponsiveContainer;
