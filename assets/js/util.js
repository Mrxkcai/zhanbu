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
  var Token = 'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyIiwidXNlcklkIjoiMSIsIm5hbWUiOiJoYWhhIiwiZXhwIjoxNTQ4MDQ2NDkwfQ.eQJpxXCQyn-PgC3uD_tOdPY7TPe_rSgfPVm1ja1L031KQl2_wODtoiy5zTDLgSvQZPn45AhqdpOrYq4irtiSIsNb4Lu_0xQX9fL6jzi54xxf1bexZ-eGWw3dt-_BMNGJhP6G_D5_conl7CKSym8Tgs5SPz5HW6bVnczDxQkvkQU';
	
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
	    xhr.setRequestHeader("Authorization", Token);  
	    xhr.onreadystatechange = function() {
	      if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
	        fn.call(this, xhr.responseText);
	      }
	    };
	    xhr.send(data);
	  }
}
  var code = ''
  Ajax.post(baseUrl + 'jwt/token', code, function(res){
  		console.log(res)
  })
// if(Token){
//   localStorage.setItem('token',Token);
// }else{
//
// }

  function getData(url,params,type){
    
      // if(type == 'get'){
      //     $.ajax({
      //         url: baseUrl + url,
      //         type:type,
      //         data:params,
      //         success:function(res){
      //           // console.log(res)
      //         }
      //     })

      // }
  }


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