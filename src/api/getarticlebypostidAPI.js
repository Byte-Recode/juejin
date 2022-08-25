import request from '../utils/request'

export const getarticlebypostidAPI = function (postid) {
    // console.log(typeof order);
    return request.post('/post/getarticlebypostid', {
        postid: postid
    }).then(res => {
        return res.data
    }).catch(err => console.log(err))
}