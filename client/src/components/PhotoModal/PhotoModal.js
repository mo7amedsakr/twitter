import React from 'react';
import { Backdrop } from '../UI/Backdrop/Backdrop';
import { useLocation, useHistory } from 'react-router-dom';
import classes from './PhotoModal.module.scss';
import { IoIosClose } from 'react-icons/io';

export const PhotoModal = (props) => {
  const { state } = useLocation();
  const { goBack } = useHistory();

  return (
    <div className={classes.PhotoModal}>
      <Backdrop.WithColor
        bgcolor={state.color && `rgba(${state.color},0.4)`}
        onClick={goBack}
      />
      <button className={classes.Close} onClick={goBack}>
        <IoIosClose size="3em" />
      </button>
      <img src={state.img} alt="t" />
    </div>
  );
};
