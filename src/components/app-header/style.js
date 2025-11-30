import styled from "styled-components";


export const AppHeaderWrapper = styled.div`
  .content {
    position: relative;
    z-index: 10;
    ${props => props.$fixed ? `
      position: fixed;
      left: 0;
      right: 0;
      z-index: 10;
    ` : ''}

    ${props => props.$reverse ? `
      color: #f8f8f8;
      
    ` : `
      background: linear-gradient(180deg, #ffffff 39.9%, #f8f8f8 100%);
      color: ${props => props.theme.textColor.primary};
      border-bottom: 1px solid #eee;
    `}

    font-size: 14px;
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 80px;
    }
    .search-area {
      transition: height 250ms ease;
      height: ${props => props.$isSearch ? '100px' : '0'}
    }
  }

  .cover {
    position: fixed;
    inset: 0;
    z-index: 9;
    background-color: rgba(0, 0, 0, .4)
  }

  
`

