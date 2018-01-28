/**
 * Created by Administrator on 2017/12/4.
 */
//轮播图----------------------------------------

/*
var circleList = document.getElementById("in-banner-circle").children;


var picture = document.getElementById("main-picture");

var box = document.getElementById("main-left");

var index =0;

setInterval(function () {
    if(index ==circleList.length) {
        index = 0;
        picture.style.left =0;
    }
    index++;
    for(var i = 0; i<circleList.length; i++) {
        circleList[i].removeAttribute("class");
    }
    if(index==circleList.length){
        circleList[0].setAttribute("class","gaoliang");
    }
    circleList[index].setAttribute("class","gaoliang");
    animate(picture,-index*box.offsetWidth);

},1000)

//点击小圆点高亮
for (var i = 0; i < circleList.length; i++) {

    //给圆添加索引
    circleList[i].setAttribute("index",i);

    circleList[i].onclick = function () {

        for(var j=0; j<circleList.length; j++) {
            circleList[j].removeAttribute("class");
        }
        this.setAttribute("class","gaoliang");
        indexNew = this.getAttribute("index");
        index =indexNew;
        animate(picture,-indexNew*box.offsetWidth);
    }
}
*/

//tab切换栏---------------------------------
var topListLi = document.getElementById("tab-top").children;

var buttomTabList = document.getElementById("tab-buttom").children;

//遍历tab导航栏头部li
for (var i = 0; i < topListLi.length; i++) {
    //添加index 属性 加索引
    topListLi[i].index = i;

    //添加点击事件
    topListLi[i].onclick = function () {
        //排他 设置高亮
        for (var j = 0; j < topListLi.length; j++) {
            topListLi[j].children[0].removeAttribute("class", "active");
        }
        this.children[0].setAttribute("class", "active");

        //切换对应内容
        var index = this.index;
        for (var z = 0; z < buttomTabList.length; z++) {
            buttomTabList[z].style.display = "none";
        }
        buttomTabList[index].style.display = "block";
    }
}
