import styled from "styled-components";


export const ScrollViewWrapper = styled.div`


  position: relative;

  .scroll-content {
    overflow: hidden;
    .scroll-inner {
      transform: translateX(0);
      
      transition: transform .3s ease;
    }
  }


  .left,.right {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;

    border-radius: 50%;
    background-color: #eee;
  }

  .left {
    left: 0;
    transform: translateX(-50%);
  }

  .right {
    right: 0;
    transform: translateX(50%);
  }
`