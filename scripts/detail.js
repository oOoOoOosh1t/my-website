window.onload = function () {
    {
        function getQueryVariable(variable) {
            let query = window.location.search.substring(1);
            let vars = query.split("&");
            for (let i = 0; i < vars.length; i++) {
                let pair = vars[i].split("=");
                if (pair[0] === variable) {
                    return pair[1];
                }
            }
            return false;
        }

        let id = getQueryVariable("id");
        fetch('json/item.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                for (let index = 0; index < json.length; index++) {
                    const temp = json[index];
                    if (temp.id === id) {
                        document.title = temp.name + ' - Vshop';
                        document.querySelector('.cbar p').innerHTML = temp.name + ' - ' + temp.englishName;
                        document.querySelector('.mainContent .wep').src = temp.imgUrl3;
                        document.querySelector('.mainContent .wep').className = temp.length;
                        document.querySelector('.mainContent #l1').innerHTML = temp.time1;
                        document.querySelector('.mainContent #r1').innerHTML = temp.time2;
                        document.querySelector('.mainContent #l2').innerHTML = temp.time3;
                        document.querySelector('.mainContent #r2').innerHTML = temp.time4;
                        document.querySelector('.mainContent #r3').innerHTML = temp.Collection;
                        document.querySelector('.mainContent #r4').innerHTML = temp.isPass;
                        document.querySelector('.mainContent #r5').innerHTML = temp.Contract;
                        document.querySelector('.mainContent #r6').innerHTML = temp.price + "<img\n" +
                            "                src=\"images/icon/vp.webp\" alt=\"vp\">";
                        let content = document.querySelector('.content .rightContent');
                        let content2 = document.querySelector('.content');
                        temp.colors.forEach(item => {
                            let div = document.createElement('div');
                            div.className = 'gun';
                            div.innerHTML = `<img src="${item.img}" alt="" class="${temp.length}">` +
                                `<div class="name"><img src="${item.levtag}" alt="icon" class="lev_logo">${item.name} </div>`
                            content.append(div);

                        });
                        temp.videos.forEach(item=>{
                            let div = document.createElement('div');
                            div.className = 'videobox';
                            div.innerHTML = `<video src="${item.video}" controls></video>`+
                                `<div class="vcontent">${item.videoName}</div>`;
                            content2.append(div);
                        });
                    }
                }
            })
            .catch(function (e) {
                console.log("读取json数据失败");
            })
    }
}