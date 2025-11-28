import React, { memo } from 'react'
import { SectionFooterWrapper } from './style'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import { useNavigate } from 'react-router-dom'

const SectionFooter = memo(({name, type}) => {
  const navigate = useNavigate();
  function handleMoreClick() {
    navigate(`/entire?type=${type}&name=${name}`)
  }
  return (
    <SectionFooterWrapper>
      <div className="info" onClick={handleMoreClick}>
        {!name && <span className="text">显示全部</span>}
        {name && <span className="text active" >显示全部{name}房源</span>}
        <IconArrowRight />
      </div>
    </SectionFooterWrapper>
  )
})

export default SectionFooter