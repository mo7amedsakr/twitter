import React, { useState } from 'react';
import classes from './ProfileHeader.module.scss';
import { Header } from './Header';
import { Info } from './Info';
import { Editable } from './Editable';
import { Button } from '../UI/Buttons/Button';
import { useSelector } from 'react-redux';

export const ProfileHeader = {
  Me: () => {
    const [editable, setEditable] = useState(true);
    const user = useSelector((state) => state.auth.user);
    return (
      <div className={classes.Container}>
        {editable ? (
          <Editable
            close={() => setEditable(false)}
            cover={user.cover?.img}
            photo={user.photo.img}
            name={user.name}
            username={user.username}
            bio={user.bio}
          />
        ) : (
          <>
            <Header cover={user.cover} photo={user.photo} />
            <Info name={user.name} username={user.username} bio={user.bio}>
              <div className={classes.UserAction}>
                <Button.Border
                  className={classes.UserActionEdit}
                  onClick={() => setEditable(true)}
                >
                  Edit profile
                </Button.Border>
              </div>
            </Info>
          </>
        )}
      </div>
    );
  },
  User: (props) => {
    return (
      <div className={classes.Container}>
        <Header />
        <Info />
      </div>
    );
  },
};
