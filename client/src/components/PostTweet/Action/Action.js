import React, { forwardRef } from 'react';
import { ColorWrapper } from '../../UI/ColorWrapper/ColorWrapper';

export const Action = forwardRef((props, ref) => {
  return (
    <ColorWrapper>
      <input
        type={props.type}
        id={props.id}
        style={{ display: 'none' }}
        name={props.id}
        accept={props.accept}
        onChange={(e) => {
          ref.current = e.target.files[0];
          const reader = new FileReader();
          reader.onloadend = () => {
            props.preview(reader.result);
          };
          reader.readAsDataURL(e.target.files[0]);
          // props.preview(URL.createObjectURL(e.target.files[0]));
        }}
      />

      <label htmlFor={props.id}>{props.children}</label>
    </ColorWrapper>
  );
});
