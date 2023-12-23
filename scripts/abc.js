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
        selectBtn.forEach(item=>{
            item.onclick = function (){

            }
        })
    }
    {
        fetch('json/item.json')
            .then(
                function (response) {
                    return response.json();
                }).then(function (json) {
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
            });
        })
            .catch(function (e) {
                console.log(e);
            })
    }
}