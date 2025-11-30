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
    transform: translateY(60px) scale(1.428) ;
    opacity: 0;
  }

  .bar-exit {
    transform: translateY(0) scale(1) ;
    opacity: 1;
  }

  .bar-enter-active {
    transform: translateY(0) scale(1) ;
    opacity: 1;
  }

  .bar-exit-active {
    transform: translateY(60px) scale(1.428) ;
    opacity: 0;
  }

  .bar-enter-active,
  .bar-exit-active {
    transition: all 250ms ease;
  }



  .tabs-enter {
    transform: translateY(-60px) scale(0.7) ;
    opacity: 0;
  }

  .tabs-exit {
    transform: translateY(0) scale(1) ;
    opacity: 1;
  }

  .tabs-enter-active {
    transform: translateY(0) scale(1) ;
    opacity: 1;
  }

  .tabs-exit-active {
    transform: translateY(-60px) scale(0.7) ;
    opacity: 0;
  }

  .tabs-enter-active,
  .tabs-exit-active {
    transition: all 250ms ease;
  }
`