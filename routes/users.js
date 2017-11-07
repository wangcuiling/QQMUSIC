var express = require('express');
var router = express.Router();
var axios = require('axios')

router.get('/getDiscList', function (req, res) {
    let url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
    axios.get(url, {
        // 设置成和qq音乐请求相同的请求头部,以便服务器相应返回数据
        headers: {
            referer: 'https://y.qq.com/',
            host: 'c.y.qq.com'
        },
        params: req.query
    }).then((response) => {
        // console.log('请求成功')
        res.json(response.data)
}).catch((e) => {
        // console.log('请求失败')
        console.log(e)
})
})

router.get('/lyric', function (req, res) {
    let url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg'
    axios.get(url, {
        // 设置成和qq音乐请求相同的请求头部,以便服务器相应返回数据
        headers: {
            referer: 'https://y.qq.com/',
            host: 'c.y.qq.com'
        },
        params: req.query
    }).then((response) => {
        // console.log('请求成功')
        var ret = response.data
        if (typeof ret === 'string') {
        var reg = /^\w+\(({[^()]+})\)$/ // 正则匹配以括号开始，以括号结束，不包括括号的任意字符一个或多个，处理jsonp字符
        var mathes = ret.match(reg)
        if (mathes) {
            ret = JSON.parse(mathes[1])
        }
    }
    res.json(ret)
}).catch((e) => {
        // console.log('请求失败')
        console.log(e)
})
})

router.get('/getSongList', function (req, res) {
    let url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
    axios.get(url, {
        // 设置成和qq音乐请求相同的请求头部,以便服务器相应返回数据
        headers: {
            referer: 'https://y.qq.com/',
            host: 'c.y.qq.com'
        },
        params: req.query
    }).then((response) => {
        res.json(response.data)
}).catch((e) => {
        // console.log('请求失败')
        console.log(e)
})
})

router.get('/getTopList', function (req, res) {
    let url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_opt.fcg'
    axios.get(url, {
        // 设置成和qq音乐请求相同的请求头部,以便服务器相应返回数据
        headers: {
            referer: 'https://y.qq.com/',
            host: 'c.y.qq.com'
        },
        params: req.query
    }).then((response) => {
        res.json(response.data)
}).catch((e) => {
        // console.log('请求失败')
        console.log(e)
})
})


module.exports = router;
