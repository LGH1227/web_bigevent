$(function () {

    template.defaults.imports.dateFormat = function (dtStr) {

        var dt = new Date(dtStr)

        var y = dt.getFullYear()
        var m = dt.getMonth() + 1
        var d = dt.getDate()
        var h = dt.getHours()
        var mt = dt.getMinutes()
        var s = dt.getSeconds()
        m = m < 10 ? '0' + m : m
        d = d < 10 ? '0' + d : d
        h = h < 10 ? '0' + h : h
        mt = mt < 10 ? '0' + mt : mt
        s = s < 10 ? '0' + s : s
        return y + '-' + m + '-' + d + ' ' + h + ':' + mt + ':' + s

    }
    function getNewsList() {

        $.get('http://www.liulongbin.top:3006/api/news',
            function (res) {

                if (res.status !== 200) {

                    return alert('获取新闻列表失败!')
                }
                console.log(res.data);

                for (var i = 0; i < res.data.length; i++) {
                    res.data[i].tags = res.data[i].tags.split(',')
                }
                var htmlstr = template('tpl-news', res)
                $('#news-list').html(htmlstr)
            })
    }

    getNewsList()
})