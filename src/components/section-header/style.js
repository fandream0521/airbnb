import styled from "styled-components";

export const SectionHeaderWrapper = styled.header`
  display: flex;
  padding: 10px 0 0 0;
  margin: 10px 0;

  .titles {
    position: relative;
    cursor: pointer;

    .title {
      font-size: 24px;
    }

    .subtitle {
      font-size: 16px;
      margin-top: 10px;
      font-weight: 400;
    }

    .arrow {
      display: none;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: -30px;
    }

    &:hover .arrow {
      display: block;
    }
  }


`;