import styled from 'styled-components';

const MainBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
`;

export const Backdrop = {
  Transparent: styled(MainBackdrop)`
    background-color: transparent;
  `,
  WithColor: styled(MainBackdrop)`
    background-color: ${({ theme, bgcolor }) =>
      bgcolor ? bgcolor : theme.default_backdrop};
  `,
};
