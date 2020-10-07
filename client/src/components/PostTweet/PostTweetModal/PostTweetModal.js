import React, { useRef, useCallback, useState } from 'react';
import classes from './PostTweetModal.module.scss';
import PTclasses from '../PostTweet.module.scss';
import { Backdrop } from '../../UI/Backdrop/Backdrop';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { FiImage } from 'react-icons/fi';
import { Button } from '../../UI/Buttons/Button';
import { TextArea } from '../Textarea/Textarea';
import { useDispatch, useSelector } from 'react-redux';
import { sendTweetStart } from '../../../store/actions/tweets';
import { Action } from '../Action/Action';
import { ImagePreview } from '../ImagePreview/ImagePreview';

const Div = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background_primary};
  min-height: 30rem;
  width: 60rem;
  z-index: 300;
  border-radius: 1.5rem;
  padding: 2rem 0;
  color: ${({ theme }) => theme.text_primary};
  overflow: hidden;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
    overflow-x: hidden;
  }
`;

export const PostTweetModal = () => {
  const dispatch = useDispatch();
  const { goBack } = useHistory();
  const textAreaRef = useRef(null);
  const imgRef = useRef(null);
  const [imgPreview, setImgPreview] = useState(null);
  const user = useSelector((state) => state.auth.user);

  const sendTweet = useCallback(() => {
    dispatch(
      sendTweetStart({
        content: textAreaRef.current.value,
        image: imgRef.current,
      })
    );
    goBack();
  }, [dispatch, goBack]);

  return (
    <div className={classes.PostTweetModal}>
      <Backdrop.WithColor onClick={goBack} />
      <Div>
        <div className={classes.PostTweetModal_Header}>
          <Button.Text onClick={goBack}>
            <IoMdClose size="1.8em" />
          </Button.Text>
          <Button.Full
            ptb={1}
            plr={1.5}
            className={classes.PostTweetModal_Header_TweetBtn}
            onClick={sendTweet}
          >
            Tweet
          </Button.Full>
        </div>
        <div className={classes.PostTweetModal_BorderBottom}></div>
        <div className={PTclasses.PostTweet}>
          <div className={PTclasses.PostTweet_Img}>
            <img src={user.photo.img} alt="" />
          </div>
          <div className={PTclasses.PostTweet_Inputs}>
            <TextArea
              ref={textAreaRef}
              placeholder="What's Happening"
              rowsMin={5}
              onKeyDown={(e) => {
                if (e.keyCode === 13 && !e.shiftKey) {
                  e.preventDefault();
                  return sendTweet();
                }
              }}
            />
            {imgPreview && <ImagePreview img={imgPreview} />}
            <div className={PTclasses.PostTweet_Inputs_Buttons}>
              <Action
                type="file"
                id="image"
                ref={imgRef}
                preview={setImgPreview}
                accept="image/*"
              >
                <FiImage size="1.5em" />
              </Action>
              <Button.Full
                ptb={1}
                plr={1.5}
                onClick={sendTweet}
                className={PTclasses.Responsive}
              >
                Tweet
              </Button.Full>
            </div>
          </div>
        </div>
      </Div>
    </div>
  );
};
