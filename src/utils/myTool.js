export default {
    setDate(date) {
        let now = new Date()
        let time = new Date(date)
        // 获取date具体时间
        let Y = time.getFullYear()
        let M = time.getMonth() + 1
        let D = time.getDate()
        let H = time.getHours()
        // 获取现在时间
        let nY = now.getFullYear()
        let nM = now.getMonth() + 1
        let nD = now.getDate()
        let nH = now.getHours()

        let timeFix = function (h) {
            if (h < 10) {
                h = '0' + h
            }
        }

        if (Y == nY && M == nM && D == nD) {
            return (nH - H) + "小时前"
        } else if (Y == nY && M == nM && D != nD) {
            return (nD - D) + "天前"
        } else if (Y == nY && M != nM) {
            return (nM - M) + "月前"
        } else if (Y + 1 == nY) {
            return 1 + "年前"
        } else {
            return Y + '年' + M + '月' + D + '日'
        }
    },
    dateFormat(date) {
        let time = new Date(date)

        let s = time.getTime()
        let h = time.getHours()
        let m = time.getMinutes()

        let Y = time.getFullYear()
        let M = time.getMonth() + 1
        let D = time.getDate()

        let timeFix = function (m, h, s) {
            if (m < 10) {
                m = '0' + m
            }
            if (h < 10) {
                h = '0' + h
            }
            if (s < 10) {
                s = '0' + s
            }
        }
        timeFix(m, h, s)

        return Y + '年' + M + '月' + D + '日' + ' ' + h + ':' + m
    },
    setNum(number) {
        if (number < 10000) {
            return number
        } else if (number >= 10000) {
            return (number / 1000).toFixed(0) / 10 + "w"
        } else {
            return 0
        }
    }
}