import React, { memo, useRef, useState } from 'react'
import { RoomItemWrapper } from './style'
import { Rating } from '@mui/material'
import { Carousel } from 'antd';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indictor from '@/base-ui/indicator';
import classNames from 'classnames';
const RoomItem = memo(({item, onItemClick}) => {
  const slickRef = useRef();
  const [curIdx, setCurIdx] = useState(0);

  function handleBtnClick(e, isRight = false) {
    e.stopPropagation();
    if (isRight) {
      slickRef.current.next();
    } else {
      slickRef.current.prev();
    }
  }

  function handleItemClick() {
    if (onItemClick) {
      onItemClick(item);
    }
  }

  const onChange = (currentSlide) => {
    setCurIdx(currentSlide);
  };
  return (
    <RoomItemWrapper onClick={handleItemClick}>
      <div className="cover">
        {
          item.picture_urls?.length > 1 ? (
            <>
              <Carousel className='slick' dots={false} ref={slickRef} infinite={true} afterChange={onChange}>
                {
                  item.picture_urls.map(item => (
                    <div className='item' key={item}>
                      <img src={item} alt="" />
                    </div>
                  ))
                }
              </Carousel>
              <div className="btns">
                <div className="left" onClick={(e) => handleBtnClick(e)}>
                  <IconArrowLeft size={30}/>
                </div>
                <div className="right" onClick={(e) => handleBtnClick(e,true)}>
                  <IconArrowRight size={30}/>
                </div>
              </div>
              <div className="indicator">

                <Indictor selectIdx={curIdx} dots={5}>
                  {
                    item.picture_urls.map((item, index) => (
                      <div key={item} className={classNames("item", {active: curIdx === index})}>
                        <span className="dot"></span>
                      </div>
                    ))
                  }
                </Indictor>
              </div>
            </>
        ) : (
        <img src={item.picture_url} alt="" />
      )
        }
      </div>
      <div className="info">
        <p className="desc" style={{color: item.verify_info?.text_color ?? '#767676'}}>
          {item.verify_info.messages.join(".")}
        </p>
        <h4 className="name">
          {item.name}
        </h4>
        <p className="price">
          ￥{item.price}/晚
        </p>
        <div className="bottom">
          <Rating name="half-rating-read" defaultValue={item.reviews_count ?? 5} precision={0.5} readOnly sx={{
            fontSize: 12,
            color: item.star_rating_color,
          }}/>  
          {
            item.bottom_info?.content && (
              <>
              <span className="dot">·</span>
              <span style={{
                fontSize: item.bottom_info?.font_size + 'px',
                color: item.bottom_info?.content_color,
              }}>{item.bottom_info?.content}</span>
              </>
            )
          }
        </div>
      </div>
    </RoomItemWrapper>
  )
})

export default RoomItem