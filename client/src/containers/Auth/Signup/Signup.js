import React, { useRef, useCallback } from 'react';
import { Auth } from '../Auth';
import { AuthInput } from '../../../components/AuthInput/AuthInput';
import { useDispatch, useSelector } from 'react-redux';
import { authUserStart } from '../../../store/actions/auth';
import { ErrorMessage } from '../../../components/ErrorMessage/ErrorMessage';

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
      <AuthInput type="text" label="Name" ref={nameRef} />
      <AuthInput type="text" label="Username" ref={usernameRef} />
      <AuthInput
        type="email"
        label="Phone, email, or username"
        ref={emailRef}
      />
      <AuthInput type="password" label="Password" ref={passwordRef} />
      <AuthInput
        type="password"
        label="Password confirm"
        ref={passwordConfirmRef}
      />
    </Auth>
  );
};
