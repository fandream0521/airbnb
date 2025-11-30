import styled from "styled-components";

export const SearchTabsWrapper = styled.div`
  .list {
    display: flex;

    .item {
      margin: 0 15px;
      padding: 5px 0;
      cursor: pointer;

      white-space: nowrap;

      &.active {
        border-bottom: 2px solid currentColor;
      }
    }
  }
`