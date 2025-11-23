import airRequest from '@/services'
import React, { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    airRequest.get({
      url: "/home/highscore"
    }).then(res => {
      console.log(res);
    })
  }, [])
  return (
    <div>Home</div>
  )
}
