import styled from "styled-components";


export const AppHeaderWrapper = styled.div`

  ${props => props.$fixed ? `
    position: fixed;
    left: 0;
    right: 0;
    z-index: 10;
  ` : ''}
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  

  font-size: 14px;
  ${props => props.$reverse ? `
    color: #f8f8f8;
    
  ` : `
    background: linear-gradient(180deg, #ffffff 39.9%, #f8f8f8 100%);
    color: ${props => props.theme.textColor.primary};
    border-bottom: 1px solid #eee;
  `}
`

