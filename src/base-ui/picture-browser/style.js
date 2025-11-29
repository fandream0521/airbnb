import styled from "styled-components";

export const PictureBrowserWrapper = styled.div`
  position: fixed;
  inset: 0;

  display: flex;
  flex-flow: column;
  justify-content: center;

  padding: 50px 0;
  background-color: black;

  .close {
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 40px;
    color: white;
  }

  .show-content {
    position: relative;
    .screen {
      width: 60%;
      margin: 0 auto;
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
    width: 50%;
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