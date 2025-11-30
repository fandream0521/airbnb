import styled from "styled-components";

export const HeaderCenterWrapper = styled.div`

  .infos {

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    >* {
      position: absolute;
      top: 30px;
    }
  }


  .bar-enter {
    transform: scale(1.428) translateY(80px) ;
    opacity: 0;
  }

  .bar-exit {
    transform: scale(1) translateY(0) ;
    opacity: 1;
  }

  .bar-enter-active {
    transform: scale(1) translateY(0) ;
    opacity: 1;
  }

  .bar-exit-active {
    transform: scale(1.428) translateY(80px) ;
    opacity: 0;
  }

  .bar-enter-active,
  .bar-exit-active {
    transition: all 250ms ease;
  }



  .tabs-enter {
    transform: scale(0.7) translateY(-60px) ;
    opacity: 0;
  }

  .tabs-exit {
    transform: scale(1) translateY(0) ;
    opacity: 1;
  }

  .tabs-enter-active {
    transform: scale(1) translateY(0) ;
    opacity: 1;
  }

  .tabs-exit-active {
    transform: scale(0.7) translateY(-60px) ;
    opacity: 0;
  }

  .tabs-enter-active,
  .tabs-exit-active {
    transition: all 250ms ease;
  }
`