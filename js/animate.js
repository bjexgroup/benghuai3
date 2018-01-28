/**
 * Created by J-LIN on 2017/11/26.
 */
function animate(obj, target) {

    //在开启之前先清除一下之前开启的计时器
    clearInterval(obj.timerID); //如果obj是红色进来，就只能停红色自己，是蓝色就只能停蓝色自己

    obj.timerID = setInterval(function () {

        //取出当前位置
        var currentLeft = obj.offsetLeft;

        //设置每步走多少，往右走为正，往左走为负
        var step = target > currentLeft ? 10 : -10;

        //如果目标和当前位置之间的距离大于1步的距离，那么这一步我就走！
        if (Math.abs(target - currentLeft) > Math.abs(step)) {

            //距离还够走，就走这一步
            obj.style.left = currentLeft + step + "px";

        } else {
            //如果当前位置和目标位置不够1步或刚好1步，就直接到目标位置
            obj.style.left = target + "px";
            //如果到了目标位置，就应该停止计时器
            clearInterval(obj.timerID);
        }

    }, 10);
}
