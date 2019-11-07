import styled from 'styled-components';
import { darken } from 'polished';

const accentColor = '#666';
const backgroundMain = '#ff6347';
const backgroundSecond = '#ff3938';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(90deg, ${backgroundMain}, ${backgroundSecond});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

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

    a {
      /* font: 'Roboto', sans-serif; */
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
