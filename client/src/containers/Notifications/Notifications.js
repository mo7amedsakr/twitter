import React from 'react';
import classes from './Notifications.module.scss';
import { ContainerHeader } from '../../components/UI/ContainerHeader/ContainerHeader';
import { FiSettings } from 'react-icons/fi';
import { NotificationsItem } from '../../components/NotificationsItem/NotificationsItem';
import profile from '../../assests/jeffrey_000.png';
import { MdNotifications } from 'react-icons/md';

export const Notifications = (props) => {
  return (
    <div className={classes.Notifications}>
      <ContainerHeader name="Notifications">
        <FiSettings size="1.3em" />
      </ContainerHeader>
      <NotificationsItem
        profile={profile}
        name="Mohamed Sakr"
        username="m07amedsakr"
        icon={<MdNotifications />}
      />
      <NotificationsItem
        profile={profile}
        name="Mohamed Sakr"
        username="m07amedsakr"
        icon={<MdNotifications />}
      />
      <NotificationsItem
        profile={profile}
        name="Mohamed Sakr"
        username="m07amedsakr"
        icon={<MdNotifications />}
      />
      <NotificationsItem
        profile={profile}
        name="Mohamed Sakr"
        username="m07amedsakr"
        icon={<MdNotifications />}
      />
      <NotificationsItem
        profile={profile}
        name="Mohamed Sakr"
        username="m07amedsakr"
        icon={<MdNotifications />}
      />
      <NotificationsItem
        profile={profile}
        name="Mohamed Sakr"
        username="m07amedsakr"
        icon={<MdNotifications />}
      />
      <NotificationsItem
        profile={profile}
        name="Mohamed Sakr"
        username="m07amedsakr"
        icon={<MdNotifications />}
      />
    </div>
  );
};
