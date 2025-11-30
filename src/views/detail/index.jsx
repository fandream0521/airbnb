import AppHeader from '@/components/app-header';
import { DetailWrapper } from './style'
import { useSelector } from 'react-redux'
import DetailPictures from './c-cpns/detail-pictures';
import { hasProperty } from '@/utils/object';

export default function Detail() {
  const { detailInfo } = useSelector(state => state.detail);

  console.log(detailInfo);
  return (
    <DetailWrapper >
      <AppHeader fixed={0}  reverse={0}/>
      <main className="detail">
        {hasProperty(detailInfo) && <DetailPictures pictures={detailInfo.picture_urls}/>}
      </main>
    </DetailWrapper>
  )
}
