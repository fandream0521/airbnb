import React, { memo } from 'react'
import { AppFooterWrapper } from './style'
import footerList from "@/assets/data/footer.json"

const AppFooter = memo(() => {
  return (
    <AppFooterWrapper>
      <div className="links">
        {
          footerList.map(item => (
            <dl key={item.name} className='item'>
              <dt className='title'>{item.name}</dt>
              {
                item.list.map(it => (
                  <dd className='link' key={it}>
                    <a href='/#'>{it}</a>
                  </dd>
                ))
              }
            </dl>
          ))
        }
      </div>
      <div className="copyright">
        © 2025 Airbnb, Inc.·隐私条款 京ICP备16017121号京ICP证 160773号京公网安备 12345违法和不良信息举报邮箱 jubao@airbnb.com
      </div>
    </AppFooterWrapper>
  )
})

export default AppFooter