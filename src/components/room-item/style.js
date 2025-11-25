import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  height: 100%;
  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
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