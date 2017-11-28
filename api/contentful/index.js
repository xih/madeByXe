import fetch from 'isomorphic-fetch'
import queryString from 'query-string'

export function getPortfolio (slug) {
  const params = {
    'fields.slug': slug,
    'content_type': 'portfolioEntry'
    // 'sys.id': '1XX8rMrJnCG4ACqksEucSq',
  }

  return fetch(`https://cdn.contentful.com/spaces/3efe131fxlk7/entries?${queryString.stringify(params)}`, { method: 'get',
    headers: {
      'Authorization': 'Bearer ' + '71eebb48b1297ddd40debfd61cd1b1f777bb91f61381220157ff4cdfe374c42c'
    }
  })
}
