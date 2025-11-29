import styled from "styled-components";

export const EntireRoomsWrapper = styled.div`
  position: relative;
  .title {
    margin: 20px 0 8px 0;
    font-size: 22px;
  }
  .list {
    display: flex;
    flex-flow: wrap;
    margin: 0 -8px;

    > .item {
      width: 20%;
      box-sizing: border-box;
      padding: 8px;
      cursor: pointer;
    }
  }
  .mask {
    position: absolute;
    inset: 0;
    background-color: rgba(255, 255, 255, .6);
  }
`