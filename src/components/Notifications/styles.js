import styled, { css } from 'styled-components';
// import { lighten } from 'polished';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { backgroundSecond } from '~/assets/colors';

const orangeNotification = '#ff892e';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 0;
    height: 15px;
    padding: 0 3px;
    background: ${orangeNotification};
    border-radius: 35%;
  }
`;

export const NotificationsList = styled.div`
  position: absolute;
  width: 260px;
  left: calc(50% - 130px);
  top: calc(100% + 30px);
  background: #0009;
  border-radius: 4px;
  padding: 15px 5px;
  transition: display 0.35s;
  display: ${props => (props.visible ? 'flex' : 'none')};
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;

    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid #0009;
  }

  a {
    width: 100%;
    text-align: center;
    color: #fff;
    margin-top: 15px;
    font-size: 14px;
    opacity: 0.6;
    transition: opacity 0.35s;

    &:hover {
      opacity: 0.99;
    }
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 270px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  color: #fff;

  //self reference only when followed by a div
  & + div {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    font-size: 12px;
    opacity: 0.6;
  }

  button {
    font-size: 12px;
    border: 0;
    background: none;
    color: ${backgroundSecond};
    padding: 0 5px;
    margin: 0 5px;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }

  ${props =>
    props.unread &&
    css`
      &::after {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background: ${orangeNotification};
        border-radius: 50%;
      }
    `}
`;
