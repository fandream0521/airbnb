import styled from "styled-components";

export const SectionTabsWrapper = styled.div`
  margin: 10px 0;
  .list {
    display: flex;
    

    .item {
      flex: 0;
      padding: 10px 40px;
      margin-right: 20px;
      border-radius: 5px; 
      border: 1px solid #eee;
      cursor: pointer;
      white-space: nowrap;

      ${props => props.theme.mixin.boxShadow}

      &.active {
        background-color: ${props => props.theme.color.secondary};
        border-color: ${props => props.theme.color.secondary};
        color: white;
      }
    }
  }


`