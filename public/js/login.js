/**
 * Created by web on 2019/3/13.

function query(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        console.log(xhr.readyState,xhr.status);
        if(xhr.readyState == 4 && xhr.status == 200){
            var result=xhr.responseText;
            var arr=JSON.parse(result);
            // console.log(arr.code);
            if(arr.code==-1){
                check1.innerHTML=arr.msg;
            }else if(arr.code==0){
                check2.innerHTML=arr.msg;
            }
        }
    }
    var queryString=`/user/query?uname=${uname.value}&upwd=${upwd.value}`;
    xhr.open("get",queryString,true);
    xhr.send(null);
}
*/
function login(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.statu == 200){
            var result=xhr.responseText;
            var arr=JSON.parse(result);
            alert(arr.msg);
        }
    }
    var queryString=`/user/query?uname=${uname.value}&upwd=${upwd.value}`;
    xhr.open("get",queryString,true);
    xhr.send(null);
}


function query(){
    var uname=document.getElementById("uname");
    var upwd=document.getElementById("upwd");
    var check1=document.getElementById("check1");
    var check2=document.getElementById("check2");
    if(uname.value==""){
        check1.innerHTML="用户名不能为空";
        check1.style.display="block";
        ok1.style.display="none";
    }
    else if(uname.value!=""){
        check1.style.display="none";
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            var ok1=document.getElementById("ok1");
            if(xhr.readyState == 4 && xhr.status == 200){
                var result=xhr.responseText;
                var arr=JSON.parse(result);
                if(arr.code==1){
                    ok1.innerHTML=arr.msg;
                    ok1.style.display="block";
                }else{
                    ok1.innerHTML=arr.msg;
                    ok1.style.display="block";
                }
            }
        }
        var queryString=`/user/query?uname=${uname.value}&upwd=${upwd.value}`;
        xhr.open("get",queryString,true);
        xhr.send(null);
    }
    if(upwd.value!=""){
        console.log(upwd.value);
        check2.style.display="none";
    }
    else if(upwd.value==""){
        check2.innerHTML="密码不能为空";
        check2.style.display="block";
    }
    
}
