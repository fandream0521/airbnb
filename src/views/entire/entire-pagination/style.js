import styled from "styled-components";

export const EntirePaginationWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  

  margin: 20px 0;

  .MuiPaginationItem-page {

    &:hover {
      text-decoration: underline;
    }

    &.Mui-selected {
      background-color: black;

      &:hover {
        background-color: black;
      }
    }
  }

  .MuiPaginationItem-icon {
    font-size: 1.5rem;
  }

  .desc {
    text-align: center;
    font-size: 12px;
    color: #111;
    margin: 12px;
  }
`