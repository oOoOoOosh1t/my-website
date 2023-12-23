window.onload = function (){
    {
        function btnSelect(){
            let selectButton = document.querySelectorAll('.pAddress');
            selectButton.forEach(x=>{
                x.onclick = function (){
                    selectButton.forEach(item=>{
                        item.className = 'pAddress';
                    })
                    x.className = 'pAddress selected'
                }
            })
        }
        function getSubPrice(){
            let count = document.querySelectorAll('.count');
            let lprice = document.querySelectorAll('.lprice');
            let subPrice = document.querySelectorAll('.subprice');
            for (let index = 0; index < count.length; index++) {
                subPrice[index].innerHTML = parseInt(count[index].innerHTML) * parseFloat(lprice[index].innerHTML);
            }
        }
        function getSumPrice(){
            let sum = 0;
            let subPrice = document.querySelectorAll('.subprice');
            subPrice.forEach(item => {
                    sum += parseFloat(item.innerHTML);
            })
            document.querySelector('.sumPrice').innerHTML = String(sum);
        }
    }
    // 求随机数
    {
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
    }
    // 悬浮窗口提示
    {
        function window(){
            // 获取模态
            let window = document.querySelector(".flexWindow");
            // 获取打开模态的按钮
            let btn = document.querySelector(".submit");
            // 获取关闭 window 的 <span> 元素
            let span = document.querySelector(".close");
            // 当用户点击按钮时，打开模式
            btn.onclick = function() {
                let address = document.querySelector('.pAddress.selected').cloneNode(true);
                document.querySelector('.window-content .content').append(address);
                window.style.display = "block";
                document.querySelector('.windowBar.totalMoney p').innerHTML = document.querySelector('.sumPrice').innerHTML;
            }
            // 当用户点击 <span>(x) 时，关闭 window
            span.onclick = function() {
                window.style.display = "none";
                let father = document.querySelector('.window-content .content');
                while(father.firstChild){
                father.removeChild(father.firstChild);
                }
            }
            // 当用户点击模态框外的任意位置时，将其关闭
            window.onclick = function(event) {
                if (event.target === window) {
                    window.style.display = "none";
                }
            }
        }
    }
    // 商品数据导入
    {
        fetch('json/item.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                let arr = myNum(3, 0, json.length - 1);
                let content = document.querySelector('.content');
                arr.forEach(x => {
                    let div = document.createElement('div');
                    div.className = 'goods';
                    div.innerHTML = `<div class="mainI" id="maind">` +
                        `<p>${json[x].name}</p>` +
                        `<img src="${json[x].imgUrl3}" alt="" id="${json[x].length}">` +
                        '</div>' +
                        '<div class="mainI">' +
                        '<div class="num"><p class="num1">数量</p>' +
                        '<p class="num2">' +
                        `<span class="count">${selectFrom(1,10)}</span>` +
                        '</p>' +
                        '</div>' +
                        '<div class="num">' +
                        `<p class="num11">单价: <span class="lprice">${json[x].price}</span>` +
                        '<br/>' +
                        `小计: <span class="subprice">${json[x].price}</span>` +
                        '</p>' +
                        '</div>' +
                        '<div class="collection"><p>藏品</p>' +
                        `<span class="co_de">${json[x].Collection}</span>` +
                        '</div>' +
                        '</div>';
                    content.append(div);
                })
                btnSelect();
                getSubPrice();
                getSumPrice();
                window();
            })
            .catch(function (e) {
                console.log(`读取json数据失败:${e}`);
            })
    }
}