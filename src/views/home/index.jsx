import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { HomeWrapper } from './style';
import AppHeader from '@/components/app-header';
import HomeBanner from './c-cpns/home-banner';
import usePosition from '@/hooks/usePosition';

import { fetchDiscountInfo, fetchGoodPriceInfo, fetchHighScoreInfo, fetchHotRecommendInfo, fetchPlusInfo } from '@/store/modules/home';
import HouseList from '@/components/app-home-house-list';

export default function Home() {
  const [isReverse, setReverse] = useState(1);
  const { y } = usePosition();
  const dispatch = useDispatch();
  const {goodPriceInfo, discountInfo, hotRecommendInfo, highScoreInfo, plusInfo} = useSelector(state => state.home)

  console.log(goodPriceInfo);
  console.log(discountInfo);
  console.log(hotRecommendInfo);
  console.log(highScoreInfo);
  console.log(plusInfo);
  useEffect(() => {
    if (y > 0) {
      setReverse(0);
    } else {
      setReverse(1);
    }
  }, [y])
  
  useEffect(() => {
    dispatch(fetchGoodPriceInfo());
    dispatch(fetchDiscountInfo());
    dispatch(fetchHighScoreInfo());
    dispatch(fetchHotRecommendInfo());
    dispatch(fetchPlusInfo())
  }, [dispatch])
  return (
    <HomeWrapper>
      <AppHeader fixed={1} reverse={isReverse}/>
      <HomeBanner />
      <main className="home">
        <HouseList listInfo={highScoreInfo} />
      </main>
    </HomeWrapper>
  )
}
