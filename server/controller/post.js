const database = require("../database/mysql")

class PostController {
    async getarticle(req, res, next) {
        // 判断查询排序依据
        let order
        // console.log(req.body.order)
        switch (req.body.order) {
            case 'new':
                order = 'article.posttime'
                break;
            case 'hot':
                order = 'article.followcount'
                break;
            case 'recommend':
                order = 'article.id'
                break;
            default:
                order = 'article.id'
        }
        // console.log(order)
        // sql查询语句
        let querySql = `SELECT article.id, article.userid, article.title, article.abstract, article.content, article.keywords, article.followcount, article.replycount, article.viewcount, article.posttime, article.photo, users.username, users.profile FROM juejin.article INNER JOIN juejin.users ON article.userid=users.id ORDER BY ${order} DESC LIMIT ?,?;`
        // 查询参数
        let params = [
            // order,
            req.body.index,
            req.body.num,
        ]
        // console.log(params);
        try {
            let result = await database.exec(querySql, params)
            // console.log(result);
            if (result.length > 0) {
                res.json({
                    code: 201,
                    msg: "请求推荐列表成功",
                    data: result
                })
            } else {
                res.json({
                    code: 409,
                    msg: "请求推荐列表失败",
                })
            }
            // console.log(result);
        } catch (error) {
            res.json({
                code: 500,
                msg: "服务器错误",
                error
            })
        }
    }

    async getarticletag(req, res, next) {
        let sqlreg
        // sql查询正则表达式
        if (req.body.keyword instanceof Array) {
            sqlreg = req.body.keyword.join('|')
        } else {
            sqlreg = req.body.keyword
        }
        // 排序依据order
        let order
        switch (req.body.order) {
            case 'new':
                order = 'article.posttime'
                break;
            case 'hot':
                order = 'article.followcount'
                break;
            case 'recommend':
                order = 'article.id'
                break;
            default:
                order = 'article.id'
        }
        // 查询标签名
        // sql查询语句
        let querySql = `SELECT article.id, article.userid, article.title, article.abstract, article.content, article.keywords, article.followcount, article.replycount, article.viewcount, article.posttime, article.photo, users.username, users.profile FROM juejin.article INNER JOIN juejin.users ON article.userid=users.id WHERE article.keywords REGEXP '${sqlreg}' ORDER BY ${order} DESC LIMIT ?,?;`
        // 查询参数
        let params = [
            // order,
            req.body.index,
            req.body.num,
        ]
        // console.log(params);
        try {
            let result = await database.exec(querySql, params)
            // console.log(result);
            if (result.length > 0) {
                res.json({
                    code: 201,
                    msg: "请求推荐列表成功",
                    data: result
                })
            } else {
                res.json({
                    code: 409,
                    msg: "请求推荐列表失败",
                })
            }
            // console.log(result);
        } catch (error) {
            res.json({
                code: 500,
                msg: "服务器错误",
                error
            })
        }



    }

    async publish(req, res, next) {
        let querySql = 'INSERT INTO juejin.article(userid, title, keywords, content, abstract, photo, posttime) VALUES (?,?,?,?,?,?,?)'
        let params = [
            req.body.userid,
            req.body.title,
            req.body.keywords,
            req.body.content,
            req.body.abstract,
            req.body.photourl,
            new Date()
        ]
        console.log(req.body);
        console.log(params);
        try {
            let result = await database.exec(querySql, params)
            console.log(result)
            if (result && result.affectedRows >= 1) {
                res.json({
                    postid: result.insertId,
                    code: 201,
                    msg: "发布文章成功"
                })
            } else {
                res.json({
                    code: 202,
                    msg: "发布文章失败"
                })
            }
        } catch (error) {
            res.json({
                code: 500,
                msg: "服务器异常",
                error
            })
        }
    }


}
module.exports = new PostController()