import request from '../utils/request'

export const publisharticleAPI = function (userid, title, keywords, content, abstract, photourl) {
    return request.post('/post/publish', {
        userid: userid,
        title: title,
        keywords: keywords,
        content: content,
        abstract: abstract,
        photourl: photourl
    }).then(res => {
        return res.data
    }).catch(err => console.log(err))
}