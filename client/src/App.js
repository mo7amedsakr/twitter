import React, { useCallback, useEffect } from 'react';
import './App.scss';
import styled, { ThemeProvider } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import themes from './themes';
import Layout from './hoc/Layout/Layout';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './containers/Home/Home';
import { PageNotFound } from './containers/PageNotFound/PageNotFound';
import { PhotoModal } from './components/PhotoModal/PhotoModal';
import Display from './components/Display/Display';
import { Notifications } from './containers/Notifications/Notifications';
import { PostTweetModal } from './components/PostTweet/PostTweetModal/PostTweetModal';
import { Login } from './containers/Auth/Login/Login';
import { Signup } from './containers/Auth/Signup/Signup';
import { Profile } from './containers/Profile/Profile';
import { authInitStart } from './store/actions/auth';
import { Spinner } from './components/UI/Spinner/Spinner';

const Background = styled.div`
  background-color: ${({ theme }) => theme.background_primary};
  color: ${({ theme }) => theme.text_primary};
`;

const AuthContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const App = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);
  const color = useSelector((state) => state.theme.color);
  const user = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const getMe = useCallback(() => dispatch(authInitStart()), [dispatch]);

  useEffect(() => {
    getMe();
  }, [getMe]);

  const theme = { ...themes[mode], ...themes[color] };

  let render = <Spinner />;

  if (!user && !isLoading) {
    render = (
      <AuthContainer>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Redirect to="/login" />
        </Switch>
      </AuthContainer>
    );
  } else if (user && !isLoading) {
    render = (
      <Layout>
        <Switch>
          <Route path="/login">
            <Redirect to="/home" />
          </Route>
          <Route path="/signup">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/notifications">
            <Notifications />
          </Route>
          <Route path="/photo/:id">
            <PhotoModal />
          </Route>
          <Route path="/display">
            <Display />
          </Route>
          <Route path="/tweet">
            <PostTweetModal />
          </Route>
          <Route path="/pagenotfound">
            <PageNotFound />
          </Route>
          <Route path={`/${user.username}`}>
            <Profile.Me />
          </Route>
          <Route path={'/:username'}>
            <Profile.User />
          </Route>
        </Switch>
      </Layout>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Background>{render}</Background>
    </ThemeProvider>
  );
};

export default App;
