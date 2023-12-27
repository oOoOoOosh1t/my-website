window.onload = function () {
    {
        let items = document.getElementsByClassName("item");
        let circles = document.getElementsByClassName("circle");
        let leftBtn = document.getElementById("btn-left");
        let rightBtn = document.getElementById("btn-right");
        let content = document.querySelector('.scontent');
        let index = 0;
        let timer = null;
        let MP3 = document.querySelector('audio');
        let musicBtn = document.querySelector('.music');
        let musicback = document.querySelector('#lmusic');
        let flag = false;
        musicBtn.onclick = function () {
            document.querySelector('audio').volume = 0.5;
            if (!flag) {
                musicback.style.backgroundColor = '#eB565B';
                musicback.style.color = '#fff';
                MP3.play();
            } else {
                musicback.style.backgroundColor = 'black';
                musicback.style.color = '#eB565B';
                MP3.pause();
            }
            flag = !flag;
        }
        document.body.style.backgroundColor = '#161210';
        items[index].className = "item active";
        circles[index].className = "circle white";
        //清除class
        let clearclass = function () {
            for (let i = 0; i < items.length; i++) {
                items[i].className = "item";
                circles[i].className = "circle";
                circles[i].setAttribute("num", i);
            }
        }

        /*只显示一个class*/
        function move() {
            clearclass();
            items[index].className = "item active";
            circles[index].className = "circle white";
            let backColor = ["#161210", "#110E17", "#222119", "#311E35", "#483C3B"]
            document.body.style.backgroundColor = backColor[index];
        }

        //点击右边按钮切换下一张图片
        rightBtn.onclick = function () {
            if (index < items.length - 1) {
                index++;
            } else {
                index = 0;
            }
            move();
        }
        //点击左边按钮切换上一张图片
        leftBtn.onclick = function () {
            if (index > 0) {
                index--;
            } else {
                index = items.length - 1;
            }
            move();
        }
        //开始定时器，点击右边按钮，实现轮播
        timer = setInterval(function () {
            rightBtn.onclick();
        }, 3500)
        //点击圆点时，跳转到对应图片
        for (let i = 0; i < circles.length; i++) {
            circles[i].addEventListener("click", function () {
                index = this.getAttribute("num");
                move();
            })
        }
        //鼠标移入清除定时器，并开启一个三秒的定时器，使慢慢转动
        content.onmouseover = function () {
            clearInterval(timer);
            timer = setInterval(function () {
                rightBtn.onclick(undefined);
            }, 9000)
        }
        //鼠标移出又开启定时器
        content.onmouseleave = function () {
            clearInterval(timer);
            timer = setInterval(function () {
                rightBtn.onclick(undefined);
            }, 3500)
        }
    }
    {
        let selectBtn = document.querySelectorAll('.selectType input');
        selectBtn.forEach(item => {
            item.onclick = function () {

            }
        })
    }
    {
        const getJsonFromid = (json, id) => {
            let list;
            json.forEach(item => {
                if (item.id === id) {
                    list = item.list;
                    return false;
                }
            });
            if (typeof list !== 'undefined') {
                return list;
            }
            return false;
        }

        $.getJSON("json/demo.json").then(json => {
            json = getJsonFromid(json, 1);
            let content = document.querySelector('.content ul');
            json.forEach(item => {
                let li = document.createElement('li');
                li.innerHTML =
                    `<a href="details.html?id=${item.id}" target="_blank" id="${item.id}">` +
                    `<div class='${item.kind}'>` +
                    '<div class="lbox">' +
                    '<div class="box-content">' +
                    `<img src="${item.imgUrl1}" alt="pri_logo" class="pri_logo"> ${item.price} <img src="${item.imgUrl2}" alt="pri_logo" class="lev_logo">` +
                    '</div>' +
                    '</div>' +
                    `<img src="${item.imgUrl3}" alt="wep" class="${item.length}">` +
                    `<div class="name"> ${item.name} </div>` +
                    '</div>' +
                    '</a>';
                content.append(li);
            })
        }).catch(e => {
            console.error(e + '请求数据失败');
        });
    }

    {
        const getJsonFromid = (json, id) => {
            let list;
            json.forEach(item => {
                if (item.id === id) {
                    list = item.list;
                    return false;
                }
            });
            if (typeof list !== 'undefined') {
                return list;
            }
            return false;
        }
        const fun = (index) => {
            $.getJSON('json/demo.json').then(json => {
                json = getJsonFromid(json, index);
                $('.content ul').empty();
                json.forEach(item => {
                    let li = document.createElement('li');
                    li.innerHTML =
                        `<a href="details.html?id=${item.id}" target="_blank" id="${item.id}">` +
                        `<div class='${item.kind}'>` +
                        '<div class="lbox">' +
                        '<div class="box-content">' +
                        `<img src="${item.imgUrl1}" alt="pri_logo" class="pri_logo"> ${item.price} <img src="${item.imgUrl2}" alt="pri_logo" class="lev_logo">` +
                        '</div>' +
                        '</div>' +
                        `<img src="${item.imgUrl3}" alt="wep" class="${item.length}">` +
                        `<div class="name"> ${item.name} </div>` +
                        '</div>' +
                        '</a>';
                    $('.content ul').append(li);
                })
            }).catch(error => {
                console.error(error + '数据请求失败');
            });
        }
        const pages = $('.pages li');
        pages.click(function () {
            const index = $(this).index() + 1;
            fun(index)
            $(this).addClass('pages-active').siblings().removeClass('pages-active');
        });
        const  type = document.querySelectorAll('.selectType input');
        type.forEach(item=>{
            item.onclick = function (){
                $('.content ul').empty();
                let temp = item.id.substring(4);
                console.log(temp)
                $.getJSON('json/demo.json').then(json=>{
                    let cnt = 0;
                    json.forEach(lito=>{
                        lito.list.forEach(x=>{
                            if(x.imgUrl3.indexOf(temp) !== -1){
                                let li = document.createElement('li');
                                li.innerHTML =
                                    `<a href="details.html?id=${x.id}" target="_blank" id="${x.id}">` +
                                    `<div class='${x.kind}'>` +
                                    '<div class="lbox">' +
                                    '<div class="box-content">' +
                                    `<img src="${x.imgUrl1}" alt="pri_logo" class="pri_logo"> ${x.price} <img src="${x.imgUrl2}" alt="pri_logo" class="lev_logo">` +
                                    '</div>' +
                                    '</div>' +
                                    `<img src="${x.imgUrl3}" alt="wep" class="${x.length}">` +
                                    `<div class="name"> ${x.name} </div>` +
                                    '</div>' +
                                    '</a>';
                                $('.content ul').append(li);
                            }
                        })
                    })
                })
            }
        })
    }
}