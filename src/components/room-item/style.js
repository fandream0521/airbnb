import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  height: 100%;
  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;
    > img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .slick {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        object-fit: cover;
      }
    }


    &:hover .btns {
        display: block;
      }

    .btns {
      display: none;
      position: absolute;
      inset: 0;
      z-index: 100;

      color: white;
      font-size: 25px;
      

      .left {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 25%;

        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(to left, transparent, rgba(0, 0, 0, .4));
      }

      .right {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: 30%;

        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(to right, transparent, rgba(0, 0, 0, .5));
      }
    }

    .indicator {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 200;

      width: 100px;
      margin: 0 auto;

      overflow: hidden;

      display: flex;
      align-items: center;
      justify-content: center;
      height: 26px;

      .item {
        display: flex;
        align-items: center;
        justify-content: center;

        .dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;

          background-color: white;

          transition: all .2s ease;
        }
        
        &.active .dot{
          width: 8px;
          height: 8px;
        }
        
      }
    }
  }

  .info {
    .desc {
      font-size: 12px;
      margin: 5px 0;
    }

    .name {
      font-size: 16px;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .price {
      font-size: 15px;
      margin: 6px 0;
    }

    .bottom {

      display: flex;
      align-items: center;

      margin: 5px 0;

          
      .MuiRating-decimal {
        margin-right: -2px;
      }

      .dot {
        margin: 0 3px;
      }
    }
  }
  
  
`