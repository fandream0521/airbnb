import styled from "styled-components";


export const AppFooterWrapper = styled.footer`
  padding: 20px 0;
  background: #f7f7f7;
  border-top: 1px solid #ccc;

  .links {
    display: flex;
    width: 1032px;
    margin: 0 auto;
    border-bottom: 1px solid #ccc;
    padding: 20px 0;


    .item {
      flex: 1;

      .title {
        font-size: 14px;
        font-weight: 800;
        color: black;
        margin: 14px 0;
      }

      .link {
        font-size: 14px;
        color: #f4f4f4;
        margin: 6px 0;

        a:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .copyright {
    text-align: center;
    padding: 20px 0;
    font-size: 13px;
    color: #544;
  }
`