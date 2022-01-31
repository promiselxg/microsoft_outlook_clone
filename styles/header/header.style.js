import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  background: var(--blue-bg);
  height: 50px;
  max-width: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled.div`
  display: flex;
  flex: 0.15;
  align-items: center;

  span:nth-child(1) {
    margin: 0 20px;
    cursor: pointer;
    .icon {
      font-size: 20px;
    }
  }
  span:nth-child(2) {
    h2 {
      font-size: 15px;
      margin-top: -2px;
    }
  }
`;
export const HeaderSearchBox = styled.div`
  display: flex;
  flex: 0.25;

  .input__wrapper {
    width: 100%;
    background: #173b56;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 8px;
    border-radius: 3px;

    span:nth-child(1) {
      margin: 0 5px;
      transform: rotate(90deg);
    }
    span:nth-child(2) {
      width: 100%;
      margin-left: 5px;
      color: #fff;
      input {
        width: 100%;
        background: transparent;
        outline: none;
        border: none;
        color: #fff !important;
        font-size: 14px;
      }
    }
  }
`;
export const HeaderRight = styled.div`
  display: flex;
  flex: 0.6;
  margin-left: 10px;
  justify-content: right;

  .header__links {
    margin-right: 20px;
    display: flex;
    align-items: center;

    a {
      display: flex;
      justify-content: space-between;
      margin: 0 10px;
      padding: 15px 0;

      &:hover {
        background: rgba(0, 0, 0, 0.2);
      }
    }
  }
  .header__right__avatar {
    margin-right: 10px;
    display: flex;
    align-items: center;
    background: #ccc;
    justify-content: center;
    cursor: pointer;
    width: 35px;
    height: 35px;
    margin: 6px 10px;
    border-radius: 50%;
  }
`;
