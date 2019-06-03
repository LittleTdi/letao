
$(function(){
   $(".product>.product_left li>img").click(function(){
      var src=$(this).attr("alt");
      $(".product>.product_left>div>img").attr({src});
   })
   $(".product>div.fr>div:nth-child(3)>button").click(function(){
      if(!$(this).is(".down")){
         $(this).addClass("down").siblings().removeClass("down");
      }else{
         $(this).removeClass("down");
      }
   })
   $(".product>div.fr>div:nth-child(4)>button").click(function(){
      var input=$(".product>div.fr>div:nth-child(4)>input");
      // console.log(input.val());
      var n=parseInt(input.val());
      if($(this).html()=="+"){
         n++;
      }else if(n>1){
         n--;
      }
      $(".product>div.fr>div:nth-child(4)>input").val(n);
   })
   $("[data-toogle=joinShopping]>button:first-child").click(function(){
      var $a=$("#cart>div:nth-child(3)>a");
      var n=$a.html();
      if(confirm("您确定要加入购物车吗？")){
         n++;
      }
      $a.html(n);
   })
})
