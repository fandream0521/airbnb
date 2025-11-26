import styled from "styled-components";

export const SectionFooterWrapper = styled.footer`
  margin-top: 10px;
  display: flex;
  .info {
    display: flex;
    align-items: center;
    cursor: pointer;

    font-size: 17px;
    font-weight: 700;
    color: black;

    .text {
      margin-right: 6px;
    }

    &:hover {
      text-decoration: underline;
    }

    .active {
      color: ${props => props.theme.color.secondary};
    }
  }
`