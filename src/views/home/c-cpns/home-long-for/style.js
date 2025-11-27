import styled from "styled-components";

export const LongForWrapper = styled.div.attrs(props => ({
  $col: props.$col || 4,
  $gap: props.$gap || 16,
}))`
  .list {
    display: flex;
    flex-flow: nowrap;

    .item {
      flex-shrink: 0;
      box-sizing: border-box;
      
      width: calc(${props => 100 / props.$col}% - ${props => ((props.$col - 1) * props.$gap) / props.$col}px);
      margin-right: ${props => props.$gap}px;
      .cover {
        position: relative;
        border-radius: 5px;
        overflow: hidden;
        
        img {
          width: 100%;
        }

        .bg {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 60%;
          background: linear-gradient(transparent, rgba(0, 0, 0, .6));
        }

        .info {
          position: absolute;
          bottom: 40px;
          left: 0;
          right: 0;
          color: white;
          
          text-align: center;

          .city {
            font-size: 18px;
            font-weight: 700;
          }

          .price {
            margin-top: 3px;
            font-size: 16px;
          }
        }
      }
      
    } 
  } 
`