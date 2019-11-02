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
    $("p").click(function(){
        //doing something
    })
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
//用JQ实现以上功能
function TabChangeColorInJQ(){
    $("#tb tbody tr:even").css("backgroundColor","#888");
}

/*
练习三
程序：对多选框进行操作，输出选中的多选框的个数；
*/

//用JS实现以上功能
function NumOfChkInJS(){
    var btn = document.getElementById("btn");
    btn.onclick = function(){
        var arrays = new Array();
        var items = document.getElementsByTagName("check");
        for(var i=0; i<items.length;i++){
            if(items[i].checked){//检查是否选中
                arrays.push(items[i].value);//把符合条件的数据添加到数组中
            }
        }
    }
}
//用JQ实现以上功能
function NumOfChkInJQ(){
    $("#btn").click(function(){
        var items = $("input[name='check']:checked");
        alert("I've done something");
    })
}
