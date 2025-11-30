import styled from "styled-components";

export const DetailPicturesWrapper = styled.div`


  .content {
    display: flex;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      transition: transform .3s ease;
    }

    .mask {
      background: rgba(0, 0, 0, 0);
      transition: background-color .3s ease;
    }
    
    &:hover .mask {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, .4);
    }

    .left {
      position: relative;
      flex: 1;
      border: 1px solid black;
      box-sizing: border-box;
      overflow: hidden;

      &:hover img {
        transform: scale(1.1);
      }

      &:hover .mask {
        background: none;
      }
      
    }

    .right {
      flex: 1;
      display: flex;
      flex-flow: wrap;
      .item {
        position: relative;
        width: 50%;
        box-sizing: border-box;
        border: 1px solid black;
        overflow: hidden;
        
        &:hover img {
          transform: scale(1.1);
        }
        &:hover .mask {
          background: none;
        }
      }
    }
  }


`