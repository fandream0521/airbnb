import styled from "styled-components";

export const HeaderMenuWrapper = styled.div`
  width: 240px;

  border: 1px solid #eee;
  border-radius: 10px;
  background: white;
  color: black;


  .log-reg {
    padding: 10px 0;
    border-bottom: 1px solid #eee;
  }

  .other {
    padding: 10px 0;
  }

  .item {
    padding: 10px 15px;

    &:hover {
      background-color: #f5f5f5;
      color: black;
    }
  }
`