window.addEventListener('load', function () {
    // this.alert(123);

    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;

    focus.addEventListener('mouseenter', function () {

        console.log('ac');
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave', function () {

        console.log('cd');
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function () {
            arrow_r.click();
        }, 2000);

    })

    // var ul = document.querySelector('.focus ul');
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    // console.log(ul.children.length);

    for (var i = 0; i < ul.children.length; i++) {
        // 利用for循环，动态创建小圆圈
        var li = document.createElement('li');
        li.setAttribute('index', i);
        // 把生成的小圆圈添加到ol里边
        ol.appendChild(li);
        // 给每个li 绑定一个点击事件
        li.addEventListener('click', function () {

            for (var i = 0; i < ol.children.length; i++) {
                // 点击时，先把所有的li清空
                ol.children[i].className = '';
            }
            // 再让当前的 li 的类名变成 ‘current’
            this.className = 'current';
            // ul 的移动距离 小圆圈的索引号 乘以 图片的宽度 注意是负值
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            // animate(obj, target, callback);
            animate(ul, -index * focusWidth);
        })
    }
    ol.children[0].className = 'current';

    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);

    var num = 0;
    var circle = 0;
    var flag = true;

    arrow_r.addEventListener('click', function () {
        // alert('ccc')
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            circleChange()
        }
    });
    arrow_l.addEventListener('click', function () {
        // alert('ccc')
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';
            }
            num--;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });
            circle--;
            // if (circle < 0) {
            //     circle = ol.children.length - 1;
            // }
            circle = circle < 0 ? ol.children.length - 1 : circle;
            circleChange()

        }
    });
    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {

            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';

    }

    var timer = setInterval(function () {
        arrow_r.click();
    }, 2000);
    // focus.addEventListener('mouseover', function () {
    //     clearInterval(timer);
    //     timer = null;
    // })
    // focus.addEventListener('mouseout', function () {

    //     timer = setInterval(function () {
    //         arrow_r.click();
    //     }, 2000);
    // })

})