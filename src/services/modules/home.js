import airRequest from "..";

export function getGoodPriceInfo() {
  return airRequest.get({
    url: '/home/goodprice'
  })
}

export function getHighScoreInfo() {
  return airRequest.get({
    url: '/home/highscore'
  })
}

export function getDiscountInfo() {
  return airRequest.get({
    url: 'home/discount'
  })
}

export function getHotRecommendInfo() {
  return airRequest.get({
    url: '/home/hotrecommenddest'
  })
}

export function getPlusInfo() {
  return airRequest.get({
    url: "/home/plus"
  })
}