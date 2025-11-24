import styled from "styled-components";


export const HouseListWrapper = styled.section.attrs(props => ({
  $col: props.$col || 4
}))`

  .house-list {
    display: flex;
    flex-flow: wrap;
    margin: 0 -8px;

    .item {
      box-sizing: border-box;
      width: ${props => 100 / props.$col}%;
      padding: 8px;
    }
  }
`