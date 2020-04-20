import React from 'react';
import { Container, useMediaQuery, useTheme } from '@material-ui/core';

const ResponsiveContainer = (props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return matches ? (
    <Container fixed disableGutters>
      {props.children}
    </Container>
  ) : (
    <Container fixed>{props.children}</Container>
  );
};
export default ResponsiveContainer;
