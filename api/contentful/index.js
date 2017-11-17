import fetch from 'isomorphic-fetch'

export function getPortfolio (slug) {
  return fetch('https://cdn.contentful.com/spaces/3efe131fxlk7/entries', { method: 'get',
    headers: {
    //  'Authorization': 'Basic '+btoa('username:password'),
      'Authorization': 'Bearer ' + '71eebb48b1297ddd40debfd61cd1b1f777bb91f61381220157ff4cdfe374c42c',
    // 'Content-Type': 'application/x-www-form-urlencoded'
      'content_type': 'portfolioEntry',
      'slug': slug,
      'include': 2
    }
  })
}
