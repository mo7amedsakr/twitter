import React, { useRef, useCallback } from 'react';
import { Auth } from './Auth';
import { Input } from '../../components/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { authUserStart } from '../../store/actions/auth';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';

export const Signup = (props) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  const nameRef = useRef(null);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);

  const onSubmitHandler = useCallback(() => {
    dispatch(
      authUserStart('/signup', {
        name: nameRef.current.value,
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        passwordConfirm: passwordConfirmRef.current.value,
      })
    );
  }, [dispatch]);

  return (
    <Auth
      btnLabel="Signup"
      label="Sign up for Twitter"
      submit={onSubmitHandler}
    >
      {error ? <ErrorMessage>{error.message}</ErrorMessage> : null}
      <Input type="text" label="Name" ref={nameRef} />
      <Input type="text" label="Username" ref={usernameRef} />
      <Input type="email" label="Email" ref={emailRef} />
      <Input type="password" label="Password" ref={passwordRef} />
      <Input
        type="password"
        label="Password confirm"
        ref={passwordConfirmRef}
      />
    </Auth>
  );
};
