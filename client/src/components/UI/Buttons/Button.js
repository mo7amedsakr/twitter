import styled from 'styled-components';

export const Button = {
  Border: styled.button`
    font-size: ${({ size }) => (size ? `${size}rem` : 'inherit')};
    padding: 0.5rem 1.5rem;
    border-radius: 5rem;
    color: ${({ theme }) => theme.user_color};
    border: 1px solid ${({ theme }) => theme.user_color};
    font-weight: 600;
    &:hover {
      background-color: ${({ theme }) => theme.user_color_hover};
    }
  `,
  Full: styled.button`
    padding: ${({ ptb, plr }) => `${ptb ? ptb : 0}rem ${plr ? plr : 0}rem`};
    background-color: ${({ theme }) => theme.user_color};
    font-size: ${({ size }) => (size ? size : 1.6)}rem;
    border-radius: 10rem;
    color: rgb(255, 255, 255);
    font-weight: ${({ weight }) => (weight ? weight : 500)};
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
