import React from 'react';
import classes from './ImagePreview.module.scss';

export const ImagePreview = (props) => {
  return (
    <div className={classes.ImgPreview}>
      <img src={props.img} alt="" />
    </div>
  );
};
