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



var baseUrl = 'https://wxcs.nuoweibd.com/';
var baseUrl2 = 'http://114.115.161.114:8220/';
var baseImgUrl = 'https://wxcs.nuoweibd.com/statics';

	
var Ajax={
    get: function(url, fn) {
      // XMLHttpRequest对象用于在后台与服务器交换数据   
      var xhr = new XMLHttpRequest();        
      xhr.open('GET', url, true);
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");  
      console.log(getLocalStorage('token'))
      xhr.setRequestHeader("Authorization", getLocalStorage('token'));
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
    post: function (url, data, fn, bool) {
      var xhr = new XMLHttpRequest();
      var boole;
      if(bool===false){boole = bool}else{boole = true}
      xhr.open("POST", url, boole);
      // 添加http头，发送信息至服务器时内容编码类型
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");  
      xhr.setRequestHeader("Authorization", getLocalStorage('token'));  
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
          fn.call(this, xhr.responseText);
        }
      };
      xhr.send(data);
    }
};


//获取 CODE;
function getCode(){
  var data = {
      code:getUrlParam('code')?getUrlParam('code'):'123456'
  };
  // return false

  if(!getLocalStorage('token')){
    console.log(getLocalStorage('token'))
    //传餐数据是json格式
    Ajax.post(baseUrl + 'auth/jwt/token', JSON.stringify(data), function(res){
        console.log(JSON.parse(res))
        if(JSON.parse(res).code == 200){
            setLocalStorage('token', JSON.parse(res).data) 
        }
        
  
    if(!getLocalStorage('token')){
      //传餐数据是json格式
      Ajax.post(baseUrl + 'auth/jwt/token', JSON.stringify(data), function(res){
          console.log(JSON.parse(res))
          setLocalStorage('token', JSON.parse(res).data)
          // localStorage.setItem('token', JSON.parse(res).data)
      },false);
      
    }else if(getLocalStorage('token') == '存储已过期'){
        refreshToken()
    }
  
  
};


//刷新token方法
function refreshToken(){
  var token = localStorage.getItem('token');
  console.log(token)

  Ajax.get(baseUrl + 'auth/jwt/refresh' + "?" + token, function(res){
      console.log(JSON.parse(res))
      setLocalStorage('token', JSON.parse(res).data)
  });
};

// refreshToken()

//setlocalstorage
function setLocalStorage(key, value){
    var curtime = new Date().getTime(); // 获取当前时间 ，转换成JSON字符串序列 
    var valueDate = JSON.stringify({
        val: value,
        timer: curtime
    });

    try {
        localStorage.setItem(key, valueDate);
    } catch (e) {
        // 兼容写法
        if(isQuotaExceeded(e)) {
          console.log("Error: 本地存储超过限制");
          localStorage.clear();
        } else {
          console.log("Error: 保存到本地存储失败");
        }
    }
};

//  检测出错方法
function isQuotaExceeded(e) {
     var quotaExceeded = false;
     if(e) {
         if(e.code) {
             switch(e.code) {
                 case 22:
                     quotaExceeded = true;
                     break;
                 case 1014: // Firefox 
                     if(e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                         quotaExceeded = true;
                     }
                     break;
             }
         } else if(e.number === -2147024882) { // IE8 
             quotaExceeded = true;
         }
     }
     return quotaExceeded;
};

//  获取localstorage
function getLocalStorage(key) {
     var exp = 60 * 60 * 1000 - 5000; 
    // var exp = 5000; 
     if(localStorage.getItem(key)) {
         var vals = localStorage.getItem(key); // 获取本地存储的值 
         var dataObj = JSON.parse(vals); // 将字符串转换成JSON对象
         // 如果(当前时间 - 存储的元素在创建时候设置的时间) > 过期时间 
         var isTimed = (new Date().getTime() - dataObj.timer) > exp;
         if(isTimed) {
             console.log("存储已过期");
             //localStorage.removeItem(key);
             getLocalStorage('token')
             refreshToken();
             return "存储已过期";
         } else {
             var newValue = dataObj.val;
         }
         return newValue;
     } else {
         getCode();
         return null;
     }
};




// 一位数组转二维数组
function arr(n,array){
    var num = n;//每个子数组里的元素个数
    var arr = array;
    var Arr = new Array(Math.ceil(arr.length/num));
    for(var i = 0; i<Arr.length;i++){
    Arr[i] = new Array();
    for(var j = 0; j<num; j++){
    Arr[i][j] = '';
    }
    }
    for(var i = 0; i<arr.length;i++){
        Arr[parseInt(i/num)][i%num] = arr[i]; 
    } 

    return Arr
};


//解析url
function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg); //匹配目标参数
	if (r != null) return decodeURI(r[2]);
	return null; //返回参数值
};


//转化个位数
function tranformTow(number) {
  return number < 10 ? '0'+number:number
}

//消息提示
function myFunction(name,txt){
  var x = document.getElementById(name)
  x.className = "show";
  x.innerHTML = txt;
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

}