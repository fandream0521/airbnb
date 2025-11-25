import styled from "styled-components";

export const SectionRoomsWrapper = styled.ul.attrs(props => ({
  $col: props.$col || 4
}))`
  display: flex;
  flex-flow: wrap;
  margin: 10px -8px;

  .item {
    box-sizing: border-box;
    width: ${props => 100 / props.$col}%;
    padding: 8px;
  }

`