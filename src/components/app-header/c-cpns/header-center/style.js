import styled from "styled-components";

export const HeaderCenterWrapper = styled.div`
  .search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    padding: 6px 6px 6px 14px;
    border: 1px solid #eee;
    border-radius: 50px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);

    ${props => props.theme.mixin.boxShadow}
    

    .text {
      font-size: 14px;
      font-weight: 600;
      color: black
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px;
      border-radius: 50%;
      color: white;
      background-color: var(--primary-color);
    }
  }
`