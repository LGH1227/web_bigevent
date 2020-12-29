$(function () {

    resetui()

    $('#btnSend').on('click', function () {

        var text = $('#ipt').val().trim()
        if (text.length <= 0) {
            return $('#ipt').val('')
        }

        $('#talk_list').append('<li class="right_word"><img src="./img/person02.png"> <span>' + text + '</span> </li >')

        $('#ipt').val('')
        resetui()

        getMsg(text)
    })

    function getMsg(text) {

        $.ajax({

            method: 'GET',
            url: 'http://www.liulongbin.top:3006/api/robot',

            data: {
                spoken: text
            },
            success: function (res) {

                console.log(res);
                if (res.message === 'success') {

                    var msg = res.data.info.text

                    $('#talk_list').append('<li class="left_word"><img src="img/person01.png" /> <span>' + msg + '</span><li>')

                    resetui()
                    getVoice(msg)
                }

            }
        })
    }

    function getVoice(text) {

        $.ajax({
            method: 'GET',
            url: 'http://www.liulongbin.top:3006/api/synthesize',
            data: {
                text: text
            },
            success: function (res) {
                // console.log(res)
                if (res.status === 200) {
                    // 播放语音
                    $('#voice').attr('src', res.voiceUrl)
                }
            }
        })
    }

    // 为文本框绑定 keyup 事件
    $('#ipt').on('keyup', function (e) {
        // console.log(e.keyCode)
        if (e.keyCode === 13) {
            // console.log('用户弹起了回车键')
            $('#btnSend').click()
        }
    })
})