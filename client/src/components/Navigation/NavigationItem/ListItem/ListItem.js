import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
  color: ${({ theme, selected }) =>
    selected ? theme.user_color : theme.text_primary};

  margin-bottom: 1rem;

  border-radius: 5rem;
  transition: all 0.2s;

  &:hover {
    color: ${({ theme, nohover }) => !nohover && theme.user_color};
    background-color: ${({ theme, nohover }) =>
      !nohover && theme.user_color_hover};
  }
`;

const ListItem = (props) => {
  return <Li {...props}>{props.children}</Li>;
};
export default ListItem;
