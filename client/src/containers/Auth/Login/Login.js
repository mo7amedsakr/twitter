import React, { useRef, useCallback } from 'react';
import { Auth } from '../Auth';
import { Input } from '../../../components/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { authUserStart } from '../../../store/actions/auth';
import { ErrorMessage } from '../../../components/ErrorMessage/ErrorMessage';

export const Login = (props) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onSubmitHandler = useCallback(() => {
    dispatch(
      authUserStart('/login', {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
    );
  }, [dispatch]);

  return (
    <Auth btnLabel="Login" label="Log in to Twitter" submit={onSubmitHandler}>
      {error ? <ErrorMessage>{error.message}</ErrorMessage> : null}
      <Input type="email" label="Phone, email, or username" ref={emailRef} />
      <Input type="password" label="Password" ref={passwordRef} />
    </Auth>
  );
};
