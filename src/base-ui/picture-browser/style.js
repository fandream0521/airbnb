import styled from "styled-components";

export const PictureBrowserWrapper = styled.div`
  position: fixed;
  inset: 0;

  display: flex;
  flex-flow: column;
  justify-content: center;

  background-color: black;

  padding-bottom: 60px;

  .close {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    height: 100px;
    padding: 0 20px;
    font-size: 40px;
    color: white;
  }

  .show-content {
    flex: 1;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: flex-end;

    .pic-enter {
      transform: translateX(${props => props.$isNext ? '100%' : '-100%'});
    }
    .pic-exit{
      transform: translateX(0);
      opacity: 1;
    }

    .pic-enter-active{
      transform: translateX(0);
    }
    .pic-exit-active{
      transform: translateX(${props => props.$isNext ? '-100%' : '100%'});
      opacity: 0;
    }
    .pic-enter-active,
    .pic-exit-active{
      transition: all .4s ease;
    }
    .cover {
      max-width: 80%;
      height: 100%;
      max-height: 80vh;
      overflow: hidden;

      img {
        height: 100%;
      }
    }

    .left,.right {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      color: white;
    }

    .left {
      left: 10px;
    }

    .right {
      right: 10px;
    }
  }




  .indicator {
    width: 60%;
    margin: 0 auto;

    .desc {
      display: flex;
      justify-content: space-between;
      color: white;
      font-size: 18px;

      .right {
        position: relative;
        cursor: pointer;

        &::after {
          content: "";
          position: absolute;
          left: 105%;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          display: inline-block;
          border: 7px solid transparent;

          border-left-color: white;

          transition: transform .4s ease;
          transform-origin:  center 25%;

          ${props => props.$isShowList ? "transform: rotate(90deg)" : ""}
        }
      }
    }

    .indicator-list {
      overflow: hidden;
      transition: max-height .4s ease;
      .item {
        padding: 10px;

        .cover {
          position: relative;

          img {
            width: 100%;
          }

          .mask {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, .5);
          }
        }

        &.active .mask {
          background: none;
        }
      }
    }

    
  }
`