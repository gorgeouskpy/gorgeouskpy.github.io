/*
功能：用于实现在页面输出一个计时器，which记录了从建站到用户访问两时间点的之间一段时间段。
日期：2019/10/25 KPY first release
*/ 
var daycount = function(){
    var myDay,myHour,myHourx,myMinute,myMinutex,mySecondx,mySecond;
    var today = new Date();
    var openday = new Date("2019/10/06");
    var mytimeinmilli = openday.getTime();//返回成立时间到1970.1.1的毫秒数
    var urtimeinmilli = today.getTime();//返回今天到时间1970.1.1的毫秒数
    var mytime,mytimeinmilli;
    var today,urtimeinmilli;
    today = urtimeinmilli;
    mytime = mytimeinmilli;
    var Totaltime = today-mytime;
    var text = "This is a test text";
    mySecondx=Math.floor(Totaltime/1000%60);
    if(mySecondx < 10)
    {
        mySecond = "0"+mySecondx;
    }
    else
    {
        mySecond = mySecondx;   
    }
    myMinutex=Math.floor(Totaltime/1000/60%60);
    if(myMinutex < 10)
    {
        myMinute = "0"+myMinutex;
    }
    else
    {
        myMinute = myMinutex;   
    }
    myHourx=Math.floor(Totaltime/1000/60/60%24);
    if(myHourx < 10)
    {
        myHour = "0"+myHourx;
    }
    else
    {
        myHour = myHourx;   
    }
    myDay=Math.floor(Totaltime/1000/60/60/24);
    var output = document.getElementById("timer");
    var timeroutput = "已陪伴了您:" +myDay + "天" +myHour + "时" + myMinute +"分"+ mySecond +"秒";
    output.innerHTML=timeroutput;
}
function printf(){
    setInterval(() => {
        daycount();
    }, 300);
}