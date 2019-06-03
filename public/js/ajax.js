//封装ajax步骤:
function ajax(method,url,data,callback){
    //如果类型是get
    if(method=='get'){
        url = url + '?' + data;
        data = null;
    }
    //到这里类型为Post
    var xhr = new XMLHttprequest();
    xhr.open(method,url);
    xhr.send(data);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.statu == 200){
            callback(this.responseText);
        }
    }
}
