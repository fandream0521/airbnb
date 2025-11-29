import styled from "styled-components";

export const IndicatorWrapper = styled.div.attrs(props => ({
  $dots: props.$dots || 5
}))`
  flex: 1;
  overflow: hidden;
  .content {
    display: flex;
    flex-flow: nowrap;
    align-items: center;

    transition: transform .2s linear;

    > * {
      flex-shrink: 0;
      width: ${props => 100 /props.$dots}%;
    }
  }
`