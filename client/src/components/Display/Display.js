import React, { useCallback } from 'react';
import classes from './Display.module.scss';
import { Backdrop } from '../UI/Backdrop/Backdrop';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Tweet from '../TweetPreview/TweetPreview';
import Logo from '../../assests/zRim1x6M_bigger.jpg';
import Section from './Section/Section';
import ColorInput from './ColorInput/ColorInput';
import blue from '../../assests/blue.svg';
import yellow from '../../assests/yellow.svg';
import pink from '../../assests/pink.svg';
import purple from '../../assests/purple.svg';
import orange from '../../assests/orange.svg';
import green from '../../assests/green.svg';
import { Button } from '../UI/Buttons/Button';
import BackgroundInput from './BackgroundInput/BackgroundInput';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../store/actions/theme';

const Div = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background_primary};
  height: 65rem;
  width: 60rem;
  z-index: 300;
  border-radius: 1.5rem;
  padding: 2rem 2.5rem;
  color: ${({ theme }) => theme.text_primary};
  overflow: hidden;
  user-select: none;
  @media only screen and (max-width: 1024px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;

const P = styled.p`
  color: ${({ theme }) => theme.text_secondary};
`;

const Display = (props) => {
  const dispatch = useDispatch();

  const { goBack } = useHistory();

  const close = useCallback(() => {
    goBack();
  }, [goBack]);

  const colors = [
    { id: 'blue', img: blue },
    { id: 'yellow', img: yellow },
    { id: 'pink', img: pink },
    { id: 'purple', img: purple },
    { id: 'orange', img: orange },
    { id: 'green', img: green },
  ];
  const mode = useSelector((state) => state.theme.mode);
  const color = useSelector((state) => state.theme.color);

  const onColorChangeHandler = useCallback(
    (mode) => dispatch(action.colorChange(mode)),
    [dispatch]
  );
  const onModeChangeHandler = useCallback(
    (color) => dispatch(action.modeChange(color)),
    [dispatch]
  );

  const colorChange = useCallback((e) => onColorChangeHandler(e.target.id), [
    onColorChangeHandler,
  ]);

  const modeChange = useCallback((e) => onModeChangeHandler(e.target.id), [
    onModeChangeHandler,
  ]);

  return (
    <div className={classes.DisplayContainer}>
      <Backdrop.WithColor onClick={close} />
      <Div>
        <div className={classes.MainText}>
          <h2 className={classes.MainText_Title}>Customize your view</h2>
          <P className={classes.MainText_Paragraph}>
            Display settings affect all of your Twitter accounts on this
            browser. These settings are only visible to you.
          </P>
        </div>
        <div className={classes.TweetPreview}>
          <Tweet profile={Logo} name="Twitter" username="twitter">
            At the heart of Twitter are short messages called Tweets — just like
            this one — which can include photos, videos, links and text.
          </Tweet>
        </div>
        <div className={classes.Sections}>
          <Section title="Font size">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            soluta
          </Section>
          <Section title="Color">
            <form
              action=""
              onChange={colorChange}
              className={[classes.Form, classes.Form_Colors].join(' ')}
            >
              {colors.map((el) => (
                <ColorInput
                  key={el.id}
                  id={el.id}
                  img={el.img}
                  checked={el.id === color}
                />
              ))}
            </form>
          </Section>
          <Section title="Background">
            <form
              action=""
              onChange={modeChange}
              className={[classes.Form, classes.Form_Background].join(' ')}
            >
              <BackgroundInput
                id="LIGHT_MODE"
                name="Default"
                checked={mode === 'LIGHT_MODE'}
              />
              <BackgroundInput
                id="DIM_MODE"
                name="Dim"
                checked={mode === 'DIM_MODE'}
              />
              <BackgroundInput
                id="DARK_MODE"
                name="Lights out"
                checked={mode === 'DARK_MODE'}
              />
            </form>
          </Section>

          <Button.Full ptb={1} plr={1.5} size={1.8} onClick={close}>
            Done
          </Button.Full>
        </div>
      </Div>
    </div>
  );
};

export default Display;
