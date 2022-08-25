import request from '../utils/request'

export const getarticletagAPI = function (index, num, keyword, order) {
    return request.post('/post/getarticletag', {
        index: index,
        num: num,
        keyword: keyword,
        order: order
    }).then(res => {
        return res.data
    }).catch(err => console.log(err))
}