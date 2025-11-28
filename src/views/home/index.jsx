import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { HomeWrapper } from './style';
import AppHeader from '@/components/app-header';
import HomeBanner from './c-cpns/home-banner';
import usePosition from '@/hooks/usePosition';

import { fetchHomeDataInfo } from '@/store/modules/home';
import HomeSectionV1 from './c-cpns/home-section-v1';
import HomeSectionV2 from './c-cpns/home-section-v2';
import { hasProperty } from '@/utils/object';
import HomeLongFor from './c-cpns/home-long-for';
import HomeSectionV3 from './c-cpns/home-section-v3';

export default function Home() {
  const [isReverse, setReverse] = useState(1);
  const { y } = usePosition();
  const dispatch = useDispatch();
  const {goodPriceInfo, highScoreInfo, discountInfo, hotRecommendInfo, longFor, plusInfo} = useSelector(state => state.home)

  console.log(plusInfo);
  useEffect(() => {
    if (y > 0) {
      setReverse(0);
    } else {
      setReverse(1);
    }
  }, [y])
  
  useEffect(() => {
    dispatch(fetchHomeDataInfo());
  }, [dispatch])
  return (
    <HomeWrapper>
      <AppHeader fixed={1} reverse={isReverse}/>
      <HomeBanner />
      <main className="home">
        {hasProperty(discountInfo) && (<HomeSectionV2 listInfo={discountInfo} />)}
        {hasProperty(hotRecommendInfo) && (<HomeSectionV2 listInfo={hotRecommendInfo} />)}
        {hasProperty(longFor) && (<HomeLongFor listInfo={longFor} />)}
        {hasProperty(highScoreInfo) && (<HomeSectionV1 listInfo={highScoreInfo} />)}
        {hasProperty(goodPriceInfo) && (<HomeSectionV1 listInfo={goodPriceInfo} />)}
        {hasProperty(plusInfo) && (<HomeSectionV3 listInfo={plusInfo} name={'plus房源'} />)}
      </main>
    </HomeWrapper>
  )
}
