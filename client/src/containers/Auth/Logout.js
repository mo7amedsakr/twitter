import React, { useCallback, useEffect } from 'react';
import { logoutStart } from '../../store/actions/auth';
import { useDispatch } from 'react-redux';
import { Spinner } from '../../components/UI/Spinner/Spinner';

export const Logout = () => {
  const dispatch = useDispatch();

  const logout = useCallback(() => dispatch(logoutStart()), [dispatch]);

  useEffect(() => {
    logout();
  }, [logout]);

  return <Spinner />;
};
