import styled from "styled-components";

export const SectionTabsWrapper = styled.ul`
  display: flex;
  margin-bottom: 10px;

  .item {
    padding: 10px 30px;
    margin-right: 20px;
    border-radius: 5px; 
    border: 1px solid #eee;
    cursor: pointer;

    ${props => props.theme.mixin.boxShadow}

    &.active {
      background-color: ${props => props.theme.color.secondary};
      border-color: ${props => props.theme.color.secondary};
      color: white;
    }
  }


`