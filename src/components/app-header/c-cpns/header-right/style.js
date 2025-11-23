import styled from "styled-components";

export const HeaderRightWrapper = styled.div`
  flex: 1;

  display: flex;
  justify-content: flex-end;

  margin-right: 24px;

  .btns {
    display: flex;
    align-items: center;
    span {
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      margin: 0 5px;
      cursor: pointer;
      border-radius: 20px;
      transition: background-color .2s ease;

      font-size: 14px;

      &:hover {
        background-color: ${props => props.$reverse ? 'rgba(0, 0, 0, .5)': 'rgb(242, 242, 242)'};
      }
    }

    .online {
      display: flex;
      justify-content: center;
      align-items: center;
    }

  }


  .profile {
    position: relative;
    display: flex;
    align-items: center;

    cursor: pointer;
    border: 1px solid #eee;
    background-color: ${props => props.$reverse ? 'white' : ''};
    border-radius: 50px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);

    ${props => props.theme.mixin.boxShadow}
    

    .menu {
      padding: 4px 8px;
      color: black;
    }

    .avatar {
      position: relative;
      padding: 4px;
      color: black;
      &::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        background: var(--primary-color);
        border-radius: 10px;
        border: 1px solid white;
        top: 3px;
        right: 3px;

      }
    }

    .menu-list {
      position: absolute;
      top: 120%;
      right: 0;
    }
  }
`