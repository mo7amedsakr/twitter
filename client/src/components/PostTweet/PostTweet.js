import React, { useRef, useCallback, useState } from 'react';
import classes from './PostTweet.module.scss';
import { Button } from '../UI/Buttons/Button';
import { TextArea } from './Textarea/Textarea';
import { useDispatch, useSelector } from 'react-redux';
import { sendTweetStart } from '../../store/actions/home';
import { Action } from './Action/Action';
import { FiImage } from 'react-icons/fi';

const PostTweet = (props) => {
  const textAreaRef = useRef('');
  const imgRef = useRef(null);
  const [imgPreview, setImgPreview] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const tweetSent = useSelector((state) => state.home.tweetSent);

  const sendTweet = useCallback(
    () => dispatch(sendTweetStart(textAreaRef.current.value, imgRef.current)),
    [dispatch]
  );

  if (tweetSent) {
    textAreaRef.current.value = '';
    imgRef.current = null;
  }

  return (
    <div className={[classes.PostTweet, classes.Responsive].join(' ')}>
      <div className={classes.PostTweet_Img}>
        <img
          src={`http://127.0.0.1:4000/img/users/${user.photo}`}
          alt="profile"
        />
      </div>
      <div className={classes.PostTweet_Inputs}>
        <TextArea
          ref={textAreaRef}
          placeholder="What's Happening"
          rowsMin={2}
          onKeyDown={(e) => {
            if (e.keyCode === 13 && !e.shiftKey) {
              e.preventDefault();
              return sendTweet();
            }
          }}
        />
        {imgPreview && (
          <div className={classes.ImgPreview}>
            <img src={imgPreview} alt="" />
          </div>
        )}
        <div className={classes.PostTweet_Inputs_Buttons}>
          <Action
            type="file"
            id="image"
            preview={setImgPreview}
            ref={imgRef}
            accept="image/*"
          >
            <FiImage size="1.8em" />
          </Action>
          <Button.Full ptb={1} plr={1.5} onClick={sendTweet}>
            Tweet
          </Button.Full>
        </div>
      </div>
    </div>
  );
};
export default PostTweet;
