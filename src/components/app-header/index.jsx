import React, { memo } from 'react'

import { AppHeaderWrapper } from './style'
import HeaderRight from './c-cpns/header-right'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
const AppHeader = memo(({fixed, reverse}) => {
  return (
    <AppHeaderWrapper $fixed={fixed} $reverse={reverse}>
      <HeaderLeft reverse={reverse}/>
      <HeaderCenter reverse={reverse}/>
      <HeaderRight reverse={reverse}/>
    </AppHeaderWrapper>
  )
})

export default AppHeader