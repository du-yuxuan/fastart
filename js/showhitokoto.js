function startHitokoto() {
    document.getElementById("hitokoto").style.bottom = "15vh";
    setTimeout('document.getElementById("hitokoto").style.bottom = "13vh";', 1000);

    var xhr = new XMLHttpRequest();
    xhr.open('get', 'https://v1.hitokoto.cn?c=d&c=e&c=i&c=j&c=k%max_length=15');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var data = JSON.parse(xhr.responseText);
            var hitokoto_text = document.getElementById('hitokoto_text');
            var hitokoto_from = document.getElementById('hitokoto_from');
            hitokoto_text.href = 'https://www.baidu.com/s?ie=UTF-8&wd=' + data.hitokoto.replace(/[\r\n]/g,"");
            hitokoto_text.innerText = "『" + data.hitokoto.replace(/[\r\n]/g,"") + "』";
            hitokoto_from.href = 'https://hitokoto.cn/?uuid=' + data.uuid.replace(/[\r\n]/g,"");
            if (data.from_who) { hitokoto_from.innerText = "——" + data.from_who.replace(/[\r\n]/g,"") + " 「" + data.from.replace(/[\r\n]/g,"") + "」"; }
            else { hitokoto_from.innerText = "——" + "「" + data.from.replace(/[\r\n]/g,"") + "」"; }
        }
    }
    xhr.send();
}

function startHitokoto2() {
    startHitokoto();
    setTimeout('startHitokoto2()', 30000);
}

startHitokoto2();