/*
练习一
程序：给网页中所有的p元素添加onclick事件doingsomething
*/
//用JS实现以上功能
function AllOnclickInJS(){
    var items = document.getElementsByTagName("p");
    for(var i=0; items.length>i;i++){
        items[i].onclick = function(){
            //doing something
        }
    }
}
//用JQ实现以上功能
function AllOnclickInJQ(){

}

/*
练习二
程序：使一个特定的表格隔行变色
*/
//用JS实现以上功能
function TabChangeColorInJS(){
    var item = document.getElementById("demo");//获取id为demo的表格table
    var tbody = item.getElementsByTagName("tbody");//获取table的第一个tbody元素
    var trs = tbody.getElementsByTagName("tr");//获取tbody下所有的tr元素，会得到一个数组
    for( var i=0; trs.length>i; i++){
        if(trs[i]%2==0){
            trs[i].style.color="blue";
        }
    }
}