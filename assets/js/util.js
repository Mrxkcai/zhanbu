//定义字体样式
if (window.screen.availWidth <= 750) {
    document.documentElement.style.fontSize = (100 / 750 * window.screen.availWidth) + 'px';
} else {
    document.documentElement.style.fontSize = '100px';
}