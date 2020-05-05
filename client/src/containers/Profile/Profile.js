import React, { useEffect, useState } from 'react';
import { ProfileHeader } from '../../components/ProfileHeader/ProfileHeader';
import { ContainerHeader } from '../../components/UI/ContainerHeader/ContainerHeader';
import { Tweets } from '../../components/Tweets/Tweets';
import { useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import axios from '../../axios';
import { Spinner } from '../../components/UI/Spinner/Spinner';

export const Profile = {
  Me: () => {
    const user = useSelector((state) => state.auth.user);
    return (
      <>
        <ContainerHeader name={user.name} />
        <ProfileHeader.Me />
        <Tweets url={`/users/${user.username}/tweets`} />
      </>
    );
  },
  User: () => {
    const { username } = useParams();
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const getUser = async () => {
      try {
        const res = await axios.get(`/users/${username}`);
        setUser(res.data.data);
      } catch (error) {
        setError(error.response.data);
      }
    };

    useEffect(() => {
      getUser();
    }, []);

    let render = <Spinner />;

    if (user) {
      render = (
        <>
          <ContainerHeader name={user.name} />
          <ProfileHeader.User user={user} />
          <Tweets url={`/users/${username}/tweets`} />
        </>
      );
    }

    if (error) {
      render = <Redirect to="/pagenotfound" />;
    }

    return render;
  },
};
