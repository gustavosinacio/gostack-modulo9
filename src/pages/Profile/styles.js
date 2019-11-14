import styled from 'styled-components';
import { darken } from 'polished';

import { accentColor } from '~/assets/colors';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: #00000016;
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: #fffd;
      }
    }

    span {
      color: #fff;
      align-self: flex-start;
      margin: 0 0 10px 10px;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: ${accentColor};
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      transition: background 0.35s;

      &:hover {
        background: ${darken(0.1, accentColor)};
      }
    }
  }

  // get only the instance of the button inside container
  > button {
    width: 100%;
    margin: 10px 0 0;
    height: 44px;
    background: #ff3c35;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    transition: background 0.35s;

    &:hover {
      background: ${darken(0.1, '#ff3c35')};
    }
`;
