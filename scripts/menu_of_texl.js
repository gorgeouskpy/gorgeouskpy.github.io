/*
程序：实现二级菜单的功能。
日期：2019/11/11 KPY First release.
*/
$().ready(function(){
    $(".textbox").mouseover(function(){
        
    });
    $(".textbox").click(function(){
        if($(".son").is(":visible")){
            $(".son").fadeOut(0);
        }
        else{
            $(".son").fadeIn();
        }
    });
    $(".textbox").click();
});