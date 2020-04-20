import styled from 'styled-components';
export const WithBorderBottom = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(204, 204, 204, 0.2);
  background-color: transparent;
  transition: all 0.1s;
  &:hover {
    background-color: ${({ theme }) => theme.background_hover};
  }
`;
