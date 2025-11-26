import styled from "styled-components";

export const SectionRoomsWrapper = styled.ul.attrs(props => ({
  $col: props.$col || 4,
  $gap: props.$gap || 16
}))`
  display: flex;
  flex-flow: wrap;
  margin: 0 -${props => props.$gap / 2}px;

  .item {
    box-sizing: border-box;
    width: ${props => 100 / props.$col}%;
    padding: 0 ${props => props.$gap / 2}px;
  }

`