import React, { Fragment } from 'react';
import classes from './NavigationModal.module.scss';
import { Backdrop } from '../../UI/Backdrop/Backdrop';
import styled from 'styled-components';
import profile from '../../../assests/jeffrey_000.png';
import Item from './NavigationModalItem/NavigationModalItem';
import { TiFolder } from 'react-icons/ti';
import { GiElectric } from 'react-icons/gi';
import { FaBattleNet } from 'react-icons/fa';
import {
  FiExternalLink,
  FiSettings,
  FiHelpCircle,
  FiEdit,
} from 'react-icons/fi';
import { IoIosPulse } from 'react-icons/io';

const Div = styled.div`
  width: 25.5rem;
  height: auto;
  position: absolute;
  background-color: ${({ theme }) => theme.background_primary};
  z-index: 200;
  box-shadow: ${({ theme }) => theme.shadow} 0px 0px 15px,
    ${({ theme }) => theme.shadow} 0px 0px 3px 1px;
  border-radius: 0.6rem;
  overflow: hidden;
`;

const H5 = styled.h4`
  color: ${({ theme }) => theme.text_primary};
`;

const P = styled.p`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 1.5rem;
`;

const NavigationModal = (props) => {
  return props.show ? (
    <Fragment>
      <Backdrop.Transparent onClick={props.setShow} />
      <Div onClick={props.setShow}>
        <div className={classes.BorderBottom}>
          <div className={classes.Modal_Accounts}>
            <div className={classes.Modal_Accounts_Pics}>
              <img
                className={classes.Modal_Accounts_Pics_Pic}
                src={profile}
                alt="your profile"
              />
            </div>
            <div className={classes.Modal_Accounts_Info}>
              <H5>Mohamed Sakr</H5>
              <P>@m07amedsakr</P>
            </div>
          </div>
        </div>
        <div className={classes.BorderBottom}>
          <div className={classes.Modal_Section}>
            <Item to="/topics" name="Topics">
              <TiFolder />
            </Item>
            <Item to="/moments" name="Moments">
              <GiElectric />
            </Item>
            <Item to="/promotemode" name="Promote Mode">
              <FaBattleNet />
            </Item>
            <Item to="/twitterads" name="Twitter Ads">
              <FiExternalLink />
            </Item>
            <Item to="/analytics" name="Analytics">
              <IoIosPulse />
            </Item>
          </div>
        </div>
        <div className={classes.BorderBottom}>
          <div className={classes.Modal_Section}>
            <Item to="/settings" name="Settings">
              <FiSettings />
            </Item>
            <Item to="/helpcenter" name="Help Center">
              <FiHelpCircle />
            </Item>
            <Item to="/display" name="Display">
              <FiEdit />
            </Item>
          </div>
        </div>

        <Item to="/logout" name="Log out" style={{ margin: '0' }} />
      </Div>
    </Fragment>
  ) : null;
};
export default NavigationModal;
