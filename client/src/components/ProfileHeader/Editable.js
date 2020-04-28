import React, { useState, useRef, useEffect } from 'react';
import classes from './ProfileHeader.module.scss';
import styled from 'styled-components';
import { TextArea } from '../../components/PostTweet/Textarea/Textarea';
import { FiCamera } from 'react-icons/fi';
import { Input, Label as StyledLabel } from '../Input/Input';
import { Button } from '../UI/Buttons/Button';

export const Label = styled.label`
  background-color: ${({ theme }) => theme.user_color};
`;

export const Editable = (props) => {
  const [coverPreview, setCoverPreview] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const coverRef = useRef(null);
  const photoRef = useRef(null);

  const nameRef = useRef(null);
  const usernameRef = useRef(null);
  const bioRef = useRef(null);

  const onChangeInputFileHandler = (e, imageRef, setImagePreview) => {
    imageRef.current = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = (e) => {
      setImagePreview(e.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    console.log('[EDITABLE] RENDER');
  });

  return (
    <>
      <div className={[classes.Header, classes.EditableImages].join(' ')}>
        <input
          type="file"
          id="cover"
          name="cover"
          accept="image/*"
          onChange={(e) =>
            onChangeInputFileHandler(e, coverRef, setCoverPreview)
          }
        />
        <Label htmlFor="cover" className={classes.Header_Cover}>
          <i className={classes.LabelIcon}>
            <FiCamera />
          </i>
          <img
            src={
              coverPreview ||
              (props.cover && `http://127.0.0.1:4000/img/users/${props.cover}`)
            }
            alt=""
            className={classes.LabelImg}
          />
        </Label>
        <input
          type="file"
          id="profile"
          name="profile"
          accept="image/*"
          onChange={(e) =>
            onChangeInputFileHandler(e, photoRef, setPhotoPreview)
          }
        />
        <Label htmlFor="profile" className={classes.Header_Photo}>
          <i className={classes.LabelIcon}>
            <FiCamera />
          </i>
          <img
            src={
              photoPreview || `http://127.0.0.1:4000/img/users/${props.photo}`
            }
            alt=""
            className={classes.LabelImg}
          />
        </Label>
      </div>
      <div className={classes.User}>
        <div className={classes.UserAction}>
          <Button.Border
            className={classes.UserActionEdit}
            onClick={props.close}
          >
            Cancel
          </Button.Border>
          <Button.Full>Save</Button.Full>
        </div>
        <Input
          label="Name"
          type="text"
          defaultValue={props.name}
          ref={nameRef}
        />
        <Input
          label="Username"
          type="text"
          defaultValue={props.username}
          ref={usernameRef}
        />
        <StyledLabel>
          <p>Bio</p>
          <TextArea defaultValue={props.bio} ref={bioRef} />
        </StyledLabel>
      </div>
    </>
  );
};
