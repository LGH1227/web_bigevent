var that;
class Tab {

    constructor(id) {

        that = this;

        this.main = document.querySelector(id);
        // this.lis = this.main.querySelectorAll('li');
        // this.sections = this.main.querySelectorAll('section');
        // this.remove = this.main.querySelectorAll('.icon-guanbi');
        this.add = this.main.querySelector('.tabadd');
        this.ul = this.main.querySelector('.fisrstnav ul:first-child');
        this.fsection = this.main.querySelector('.tabscon');
        this.init();
    }
    init() {

        this.updateNode();
        this.add.onclick = this.addTab;
        for (var i = 0; i < this.lis.length; i++) {

            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            this.remove[i].onclick = this.removeTab;
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        };
        // this.sections[i].onclick = this.toggleTab;

    }
    updateNode() {

        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.remove = this.main.querySelectorAll('.icon-guanbi');
        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child');
    }

    // 切换功能
    toggleTab() {

        that.clearClass();
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';
    }

    clearClass() {

        for (var i = 0; i < this.lis.length; i++) {

            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    // 添加功能
    addTab() {

        that.clearClass();
        // alert(11);
        var random = Math.random();
        var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
        var section = '<section class="conactive">测试' + random + '</section>';
        that.ul.insertAdjacentHTML('beforeend', li);
        that.fsection.insertAdjacentHTML('beforeend', section);

        that.init();

    }
    // 删除功能
    removeTab(e) {

        e.stopPropagation();
        var index = this.parentNode.index;
        console.log(index);

        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        if (document.querySelector('.liactive')) return;
        index--;
        // 如果有索引号对应的li, 就做自动点击事件,反之，就不做点击事件
        that.lis[index] && that.lis[index].click();

    }
    // 修改功能
    editTab() {
        var str = this.innerHTML;
        // 双击禁止选中文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        // alert(11);
        this.innerHTML = '<input type="text"/>';
        var input = this.children[0];
        input.value = str;
        input.select(); // 文本框内文字处于选定状态
        input.onblur = function () {

            this.parentNode.innerHTML = this.value;
        }

        input.onkeyup = function (e) {

            if (e.keyCode === 13) {

                // this.parentNode.innerHTML = this.value;
                this.blur();
            }
        }
    }
}

new Tab('#tab');

