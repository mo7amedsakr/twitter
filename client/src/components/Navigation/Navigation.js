import React, { useState, useCallback } from 'react';
import classes from './Navigation.module.scss';
import Item from './NavigationItem/NavigationItem';
import { GoHome } from 'react-icons/go';
import {
  FiHash,
  FiBell,
  FiMail,
  FiBookmark,
  FiMoreHorizontal,
} from 'react-icons/fi';
import { FaRegListAlt, FaTwitter } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Li from './NavigationItem/ListItem/ListItem';
import { Button } from '../UI/Buttons/Button';
import Modal from './NavigationModal/NavigationModal';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Img = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;

  border: solid 2px
    ${({ theme, selected }) =>
      selected ? `${theme.user_color}` : 'transparent'};
`;

const Navigation = () => {
  const user = useSelector((state) => state.auth.user);
  const [showModal, setShowModal] = useState(false);

  const { pathname } = useLocation();

  const toggleModal = useCallback(() => {
    setShowModal((prev) => !prev);
  }, [setShowModal]);

  return (
    <nav className={classes.Navigation}>
      <ul className={classes.Navigation_Items}>
        <Item to="/home" nohover>
          <FaTwitter />
        </Item>

        <Item name="Home" to="/home" selected={pathname === '/home'}>
          <GoHome />
        </Item>
        <Item name="Explore" to="/explore" selected={pathname === '/explore'}>
          <FiHash />
        </Item>
        <Item
          name="Notifications"
          to="/notifications"
          selected={pathname === '/notifications'}
        >
          <FiBell />
        </Item>
        <Item name="Messages" to="/message" selected={pathname === '/message'}>
          <FiMail />
        </Item>
        <Item
          name="Bookmarks"
          to="/bookmarks"
          selected={pathname === '/bookmarks'}
        >
          <FiBookmark />
        </Item>
        <Item name="Lists" to="/lists" selected={pathname === '/lists'}>
          <FaRegListAlt />
        </Item>
        <Item
          name="Profile"
          to={`/${user.username}`}
          selected={pathname === `/${user.username}`}
        >
          <Img
            src={`/img/users/${user.photo.img}`}
            alt=""
            selected={pathname === '/profile'}
          />
        </Item>
        <Li>
          <button
            className={classes.Navigation_Items_MoreBtn}
            onClick={toggleModal}
          >
            <FiMoreHorizontal
              className={classes.Navigation_Items_MoreBtn_Icon}
            />
            <h3 className={classes.Navigation_Items_MoreBtn_Name}>More</h3>
          </button>
        </Li>
      </ul>
      <Link to="/tweet" className={classes.Navigation_TweetBtn}>
        <Button.Full
          ptb={1.2}
          plr={8}
          size={2}
          className={classes.Navigation_TweetBtn_Btn}
        >
          <IoMdAdd className={classes.Navigation_TweetBtn_Btn_Icon} />
          <span className={classes.Navigation_TweetBtn_Btn_Text}>Tweet</span>
        </Button.Full>
      </Link>
      <Modal show={showModal} setShow={toggleModal} />
    </nav>
  );
};

export default Navigation;
