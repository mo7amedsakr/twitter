import React from 'react';
import { errorColor } from '../../themes';

export const ErrorMessage = (props) => {
  return (
    <p style={{ color: errorColor, textAlign: 'center' }}>{props.children}</p>
  );
};
