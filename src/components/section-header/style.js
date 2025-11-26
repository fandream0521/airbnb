import styled from "styled-components";

export const SectionHeaderWrapper = styled.header`
  display: flex;
  padding: 10px 0 0 0;

  .titles {
    position: relative;
    cursor: pointer;

    .title {
      font-size: 24px;
      margin-bottom: 10px;
    }

    .subtitle {
      font-size: 16px;
      margin: 10px 0;
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