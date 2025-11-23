import styled from "styled-components";

export const HeaderLeftWrapper = styled.div`
  flex: 1;
  
  .logo {
    display: inline-block;
    margin-left: 24px;
    color: ${props => props.$reverse ? 'white' : props.theme.color.primary};
    cursor: pointer;
    .text {
      font-size: 0;
    }
  }
`