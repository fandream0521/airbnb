import airRequest from "..";


export function getEntireList(offset = 0, size = 20) {
  return airRequest.get({
    url: '/entire/list',
    params: {
      offset,
      size
    }
  })
}