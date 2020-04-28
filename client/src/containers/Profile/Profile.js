import React from 'react';
import { ProfileHeader } from '../../components/ProfileHeader/ProfileHeader';
import { ContainerHeader } from '../../components/UI/ContainerHeader/ContainerHeader';
import { Tweets } from '../../components/Tweets/Tweets';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

export const Profile = {
  Me: () => {
    const user = useSelector((state) => state.auth.user);
    return (
      <div>
        <ContainerHeader name={user.name} />
        <ProfileHeader.Me />
        <Tweets url={`/users/${user.username}/tweets`} />
      </div>
    );
  },
  User: () => {
    return (
      <div>
        <ContainerHeader name="Mohamed sakr" />
        <ProfileHeader.User />
        <Tweets url="/users/mo7amedsakr/tweets" />
      </div>
    );
  },
};
