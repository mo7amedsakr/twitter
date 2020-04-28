import styled from 'styled-components';

const MainButton = styled.button`
  border-radius: 10rem;
  padding: ${({ ptb, plr }) => `${ptb ? ptb : 0.5}rem ${plr ? plr : 1.5}rem`};
  font-size: ${({ size }) => (size ? `${size}rem` : 'inherit')};
  font-weight: ${({ weight }) => (weight ? weight : 500)};
`;

export const Button = {
  Border: styled(MainButton)`
    color: ${({ theme }) => theme.user_color};
    border: 1px solid ${({ theme }) => theme.user_color};
    &:hover {
      background-color: ${({ theme }) => theme.user_color_hover};
    }
  `,
  Full: styled(MainButton)`
    background-color: ${({ theme }) => theme.user_color};
    color: rgb(255, 255, 255);
  `,
  Icon: styled.button`
    color: ${({ theme, secondary }) =>
      secondary ? theme.text_secondary : theme.user_color};
    border-radius: 50%;
    display: flex;
    padding: 0.5rem;
    transition: all 0.1s;

    &:hover {
      color: ${({ theme }) => theme.user_color};
      background-color: ${({ theme }) => theme.user_color_hover};
    }
  `,
  Text: styled.button`
    font-size: ${({ size }) => (size ? `${size}rem` : 'inherit')};
    color: ${({ theme }) => theme.user_color};
  `,
};
