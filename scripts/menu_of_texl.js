/*
程序：实现二级菜单的功能。
日期：2019/11/11 KPY First release.
*/
$().ready(function(){
    $(".textbox").mouseover(function(){
        $(this).addClass("textbox2");
    });
    $(".textbox").mouseout(function(){
        $(this).removeClass();
        $(this).addClass("textbox");
    });
    $(".textbox").click(function(){
        if($(this).children(".father").siblings().is(":visible")){
            $(this).children(".father").siblings().fadeOut(0);
        }
        else{
            $(this).children(".father").siblings().fadeIn();
        }
    });
    $(".textbox").click();
});