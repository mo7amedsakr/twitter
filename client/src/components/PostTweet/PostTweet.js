import React, { useRef, useCallback, useState, useEffect } from 'react';
import classes from './PostTweet.module.scss';
import { Button } from '../UI/Buttons/Button';
import { TextArea } from './Textarea/Textarea';
import { useDispatch, useSelector } from 'react-redux';
import { sendTweetStart } from '../../store/actions/tweets';
import { Action } from './Action/Action';
import { FiImage } from 'react-icons/fi';
import { ImagePreview } from './ImagePreview/ImagePreview';

const PostTweet = () => {
  const dispatch = useDispatch();
  const textAreaRef = useRef('');
  const imgRef = useRef(null);
  const [imgPreview, setImgPreview] = useState(null);
  const user = useSelector((state) => state.auth.user);
  const tweetSent = useSelector((state) => state.tweets.tweetSent);

  const sendTweet = useCallback(
    () =>
      dispatch(
        sendTweetStart({
          content: textAreaRef.current.value,
          image: imgRef.current,
        })
      ),
    [dispatch]
  );

  useEffect(() => {
    if (tweetSent) {
      textAreaRef.current.value = '';
      imgRef.current = null;
      setImgPreview(null);
    }
  }, [tweetSent]);

  return (
    <div className={[classes.PostTweet, classes.Responsive].join(' ')}>
      <div className={classes.PostTweet_Img}>
        <img src={`/img/users/${user.photo.img}`} alt="" />
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
        {imgPreview && <ImagePreview img={imgPreview} />}
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
