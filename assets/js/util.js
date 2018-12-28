//定义字体样式
if (window.screen.availWidth <= 750) {
    document.documentElement.style.fontSize = (100 / 750 * window.screen.availWidth) + 'px';
} else {
    document.documentElement.style.fontSize = '100px';
}

//判断是否填写信息

function isUserInfo(key){
    if(localStorage.getItem(key)){
        return localStorage.getItem(key);
    }else{
        return false;
    }
}