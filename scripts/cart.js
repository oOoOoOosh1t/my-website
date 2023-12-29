window.onload = function () {

    let body = document.querySelector('body');
    {
        let btnLeft = null;
        let btnRight = null;

        function getBtnLeft() {
            btnLeft = document.querySelectorAll('button.left')
        }

        function getBtnRight() {
            btnRight = document.querySelectorAll('button.right')
        }

        //各按钮的功能实现
        function btnFuncton() {
            for (let i = 0; i < btnLeft.length; ++i) {
                btnLeft[i].onclick = function () {
                    let count = parseInt(btnLeft[i].parentElement.children[1].textContent);
                    let lPrice = parseInt(btnLeft[i].parentNode.parentNode.parentNode.querySelector('.lprice').innerHTML);
                    let subPrice = btnLeft[i].parentNode.parentNode.parentNode.querySelector('.subprice');
                    ++count;
                    // let subprice = parseInt(btnLeft[i].parentNode.)
                    subPrice.innerHTML = lPrice * count;
                    btnLeft[i].parentElement.children[1].textContent = count;
                }
            }
            for (let i = 0; i < btnRight.length; ++i) {
                btnRight[i].onclick = function () {
                    let count = parseInt(btnRight[i].parentElement.children[1].textContent);
                    --count;
                    let lPrice = parseInt(btnLeft[i].parentNode.parentNode.parentNode.querySelector('.lprice').innerHTML);
                    let subPrice = btnLeft[i].parentNode.parentNode.parentNode.querySelector('.subprice');
                    // let subprice = parseInt(btnLeft[i].parentNode.)
                    if (count < 1) count = 1;
                    subPrice.innerHTML = lPrice * count;
                    btnRight[i].parentElement.children[1].textContent = count;
                }
            }
        }
    }

    {
        //判断购物车是否为空
        function pageIsEmpty() {
            body.onmouseover = function () {
                if (document.querySelector('.goods') === null) {
                    document.querySelector('.content').innerHTML = '<div class="empty">你的购物车是空的</div>';
                }
            }
        }

        //商品的删除
        function myDelete() {
            let selectAll = document.querySelector('.selectAll');
            let del = document.querySelectorAll('.delete');
            del.forEach(item => {
                item.onclick = function () {
                    item.parentNode.parentNode.parentNode.parentNode.removeChild(item.parentNode.parentNode.parentNode);
                    let selectButton = document.querySelectorAll('.select');
                    let lflag = 1;
                    selectButton.forEach(x => {
                        console.log(x.innerHTML)
                        if (x.innerHTML === '选中') {
                            lflag = 0;
                        }
                    })
                    if (lflag === 1) {
                        for (let i = 0; i < selectButton.length; i++) {
                            if (selectButton[i].innerHTML === '选中') {
                                selectButton[i].parentNode.parentNode.parentNode.querySelector('#maind').style.background = 'linear-gradient(to left, #242040, rgba(145, 152, 229, 0.42))';
                                selectButton[i].parentNode.parentNode.parentNode.style.border = '1px solid #eB565B';
                                selectButton[i].innerHTML = '取消';
                                selectButton[i].style.background = '#eB565B';
                                selectButton[i].style.color = '#eee';
                                selectButton[i] = 1;
                            }
                        }
                        selectAll.innerHTML = '取消全选';
                        flag = 0;
                    }
                    else{
                        selectAll.innerHTML = '全选';
                    }
                }
            });

        }

        //商品的选中
        function myselect() {
            let selectButton = document.querySelectorAll('.select');
            let flag = 1;
            let selectAll = document.querySelector('.selectAll');
            for (let i = 0; i < selectButton.length; i++) {
                selectButton[i].onclick = function () {
                    if (selectButton[i].innerHTML === '选中') {
                        selectButton[i].parentNode.parentNode.parentNode.querySelector('#maind').style.background = 'linear-gradient(to left, #242040, rgba(145, 152, 229, 0.42))';
                        selectButton[i].parentNode.parentNode.parentNode.style.border = '1px solid #eB565B';
                        selectButton[i].innerHTML = '取消';
                        selectButton[i].style.background = '#eB565B';
                        selectButton[i].style.color = '#eee';
                    } else {
                        selectButton[i].parentNode.parentNode.parentNode.querySelector('#maind').style.background = 'none';
                        selectButton[i].parentNode.parentNode.parentNode.style.border = 'none';
                        selectButton[i].innerHTML = '选中';
                        selectButton[i].style.background = 'transparent';
                        selectButton[i].style.color = '#eB565B';
                    }
                    let lflag = 1;
                    selectButton.forEach(x => {
                        if (x.innerHTML === '选中') {
                            lflag = 0;
                        }
                    })
                    if (lflag === 1) {
                        for (let i = 0; i < selectButton.length; i++) {
                            if (selectButton[i].innerHTML === '选中') {
                                selectButton[i].parentNode.parentNode.parentNode.querySelector('#maind').style.background = 'linear-gradient(to left, #242040, rgba(145, 152, 229, 0.42))';
                                selectButton[i].parentNode.parentNode.parentNode.style.border = '1px solid #eB565B';
                                selectButton[i].innerHTML = '取消';
                                selectButton[i].style.background = '#eB565B';
                                selectButton[i].style.color = '#eee';
                                selectButton[i] = 1;
                            }
                        }
                        selectAll.innerHTML = '取消全选';
                        flag = 0;
                    }
                    else{
                        selectAll.innerHTML = '全选';
                    }
                }
            }
            selectAll.onclick = function () {
                if (flag === 1) {
                    for (let i = 0; i < selectButton.length; i++) {
                        if (selectButton[i].innerHTML === '选中') {
                            selectButton[i].parentNode.parentNode.parentNode.querySelector('#maind').style.background = 'linear-gradient(to left, #242040, rgba(145, 152, 229, 0.42))';
                            selectButton[i].parentNode.parentNode.parentNode.style.border = '1px solid #eB565B';
                            selectButton[i].innerHTML = '取消';
                            selectButton[i].style.background = '#eB565B';
                            selectButton[i].style.color = '#eee';
                        }
                    }
                    selectAll.innerHTML = '取消全选';
                    flag = 0;
                } else {
                    for (let i = 0; i < selectButton.length; i++) {
                        if (selectButton[i].innerHTML === '取消') {
                            selectButton[i].parentNode.parentNode.parentNode.querySelector('#maind').style.background = 'none';
                            selectButton[i].parentNode.parentNode.parentNode.style.border = 'none';
                            selectButton[i].innerHTML = '选中';
                            selectButton[i].style.background = 'none';
                            selectButton[i].style.color = '#eB565B';
                        }
                    }
                    selectAll.innerHTML = '全选';
                    flag = 1;
                }

            }
        }

        //取总价
        function getSumPrice() {
            let click = document.querySelector('body');
            click.onclick = function () {
                let sum = 0;
                let cnt = 0;
                let subPrice = document.querySelectorAll('.subprice');
                subPrice.forEach(item => {
                    if (item.parentNode.parentNode.parentNode.parentElement.style.border === '1px solid rgb(235, 86, 91)') {
                        sum += parseFloat(item.innerHTML);
                        cnt += parseInt(item.parentNode.parentNode.parentElement.querySelector('.count').innerHTML)
                    }
                })
                document.querySelector('.mcnt').innerHTML = cnt;
                document.querySelector('.personal_detail span span').innerHTML = `(${cnt})`;
                document.querySelector('.sumPrice').innerHTML = String(sum);
            }
        }
    }
//随机数
    {
        function selectFrom(min, max) {
            let sum = max - min + 1;
            return Math.floor(Math.random() * sum + min);
        }

        //函数2 求指定范围内n个不重复的随机数
        function myNum(n, min, max) {
            let a = [];
            for (let i = 0; i < n; i++) {
                a[i] = selectFrom(min, max);
                for (let z = 0; z < i; z++) {
                    if (a[i] === a[z]) {
                        i--;
                        break;
                    }
                }

            }
            return a;
        }
    }
    // 购物车内商品的动态填充
    {
        fetch('json/item.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                let arr = myNum(4, 0, json.length - 1);
                let content = document.querySelector('.content');
                arr.forEach(x => {
                    let div = document.createElement('div');
                    div.className = 'goods';
                    div.innerHTML = `<div class="mainI" id="maind">` +
                        `<p>${json[x].name}</p>` +
                        `<img src="${json[x]['imgUrl3']}" alt="" id="${json[x].length}">` +
                        '</div>' +
                        '<div class="mainI">' +
                        '<div class="num"><p class="num1">数量</p>' +
                        '<p class="num2">' +
                        '<button class="left">+</button>' +
                        '<span class="count">1</span>' +
                        '<button class="right">-</button>' +
                        '</p>' +
                        '</div>' +
                        '<div class="num">' +
                        `<p class="num11">单价: <span class="lprice">${json[x].price}</span>` +
                        '<br/>' +
                        '<br/>' +
                        `小计: <span class="subprice">${json[x].price}</span>` +
                        '</p>' +
                        '</div>' +
                        '<div class="num">' +
                        '<button class="delete">删除</button>' +
                        '<button class="select">选中</button>' +
                        '</div>' +
                        '</div>';
                    content.append(div);
                })
                getBtnLeft();
                getBtnRight();
                btnFuncton();
                myDelete();
                pageIsEmpty();
                myselect();
                getSumPrice();
            })
            .catch(function (e) {
                console.log(`读取json数据失败:${e}`);
            })
    }
}