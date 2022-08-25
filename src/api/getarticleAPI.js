import request from '../utils/request'

export const getarticleAPI = function (index, num, order) {
    // console.log(typeof order);
    return request.post('/post/getarticle', {
        index: index,
        num: num,
        order: order,
    }).then(res => {
        return res.data
    }).catch(err => console.log(err))
}