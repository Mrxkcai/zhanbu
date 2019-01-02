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
};

//ajax
var Ajax={
    get: function(url, fn) {
      // XMLHttpRequest对象用于在后台与服务器交换数据   
      var xhr = new XMLHttpRequest();            
      xhr.open('GET', url, true);
      xhr.onreadystatechange = function() {
        // readyState == 4说明请求已完成
        if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) { 
          // 从服务器获得数据 
          fn.call(this, xhr.responseText);  
        }
      };
      xhr.send();
    },
    // datat应为'a=a1&b=b1'这种字符串格式，在jq里如果data为对象会自动将对象转成这种字符串格式
    post: function (url, data, fn) {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", url, true);
      // 添加http头，发送信息至服务器时内容编码类型
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");  
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
          fn.call(this, xhr.responseText);
        }
      };
      xhr.send(data);
    }
  }