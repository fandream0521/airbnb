import airRequest from '@/services'
import React, { useEffect, useState } from 'react'
import { HomeWrapper } from './style';
import AppHeader from '@/components/app-header';
import HomeBanner from './c-cpns/home-banner';
import usePosition from '@/hooks/usePosition';

export default function Home() {
  const [isReverse, setReverse] = useState(1);

  const { y } = usePosition();

  useEffect(() => {
    if (y > 0) {
      setReverse(0);
    } else {
      setReverse(1);
    }
  }, [y])
  
  useEffect(() => {
    airRequest.get({
      url: "/home/highscore"
    }).then(res => {
      console.log(res);
    })
  }, [])
  return (
    <HomeWrapper>
      <AppHeader fixed={1} reverse={isReverse}/>
      <HomeBanner />
    </HomeWrapper>
  )
}
