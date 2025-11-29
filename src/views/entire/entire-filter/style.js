import styled from "styled-components";

export const EntireFilterWrapper = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  .list {
    display: flex;

    .item {
      padding: 8px 12px;
      margin-right: 10px;
      white-space: nowrap;

      border: 1px solid #666;
      border-radius: 4px;
      background-color: #fafafa;
      color: black;
      cursor: pointer;


      &.active {
        background-color: ${props => props.theme.color.secondary};
        color: white;
        border-color: ${props => props.theme.color.secondary};
      }
    }
  }
`