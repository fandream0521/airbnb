import styled from "styled-components";

export const SearchSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  
  background-color: white;


  border: 1px solid #eee;
  border-radius: 50px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .1);

  ${props => props.theme.mixin.boxShadow}

  color: #666;

  .item {
    flex: 1;
    box-sizing: border-box;
    width: 300px;
    padding: 6px 6px 6px 14px;

    &:not(&:first-child) {
      border-left: 1px solid #eee;
    }
  }
`;