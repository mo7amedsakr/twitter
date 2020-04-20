import React, { useState } from 'react';
import { WithBorderBottom } from '../UI/WithBorderBottom/WithBorderBottom';
import classes from './NotificationsItem.module.scss';
import styled from 'styled-components';
import { ProfileModal } from '../ProfileModal/ProfileModal';
import { IoIosArrowDown } from 'react-icons/io';
import { Button } from '../UI/Buttons/Button';

const Icon = styled.i`
  color: ${({ theme }) => theme.user_color};
  font-size: 2.5em;
  margin-right: 1rem;
`;

const P = styled.p`
  color: ${({ theme }) => theme.text_secondary};
`;

export const NotificationsItem = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <WithBorderBottom>
      <div className={classes.NotificationsItem}>
        <Icon>{props.icon}</Icon>
        <div className={classes.NotificationsItem_Content}>
          <div className={classes.NotificationsItem_Content_Profile}>
            <img
              src={props.profile}
              alt="profile"
              className={classes.NotificationsItem_Content_Profile_Img}
              onMouseEnter={() => setShowModal(true)}
              onMouseLeave={() => setShowModal(false)}
            />
            <Button.Icon secondary>
              <IoIosArrowDown />
            </Button.Icon>
          </div>
          <p style={{ marginBottom: '1rem' }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <P>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum est
            unde, cupiditate tenetur quisquam qui! Ab nulla saepe est dolorum.
            Itaque consequuntur cumque est sapiente repudiandae fugiat
            doloribus, ut necessitatibus.
          </P>
        </div>
        {showModal ? (
          <ProfileModal
            profile={props.profile}
            name={props.name}
            username={props.username}
          />
        ) : null}
      </div>
    </WithBorderBottom>
  );
};
