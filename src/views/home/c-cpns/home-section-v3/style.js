import styled from "styled-components";

export const HomeSectionV3Wrapper = styled.section.attrs(props => ({
  $col: props.$col || 4,
  $gap: props.$gap || 16
}))`
  .list {
    display: flex;


    .item {
      flex-shrink: 0;
      width: calc(${props => 100 / props.$col}% - ${props => (((props.$col - 1) * props.$gap) / props.$col)}px);
      margin-right: ${props => props.$gap}px;
    }
  }
`