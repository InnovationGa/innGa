/**
 * Created by Administrator on 2017/3/23.
 */
$('#pic1').slideDown(500);
//   页面加载自动显示顶部顶部banner动画
$('#btn').click(function () {
    if($('#pic2').is(':hidden')){
        $('#pic2').slideDown(500);
        $('#pic1').slideToggle(500);
        $('#btn').html('展开<i></i>');
    }else{
        $('#pic2').slideUp(500);
        $('#pic1').slideDown(500);
        $('#btn').html('收起<i></i>');
    }
});
//    点击收起展开banner动画

function show() {
    var sanjiao = document.getElementById('login'),
        arr = document.getElementById('arr');
    sanjiao.onmouseover=function () {
        arr.style.display='none';
    };
    sanjiao.onmouseout=function () {
        arr.style.display='block';
    }
}
//导航菜单的箭头
function login(clc,xg) {
    $(clc).click(function (){
        $(xg).animate({
            'top':'0px'
        });
        $('.index-box').show();
    });
    $('.close').click(function () {
        $('.login-box').animate({
            'top':-363
        });
        $('.index-box').hide();
    });
}
//  点击订单出现隐藏动画
function inp() {
    $('.input').click(function () {
        $(this).addClass('border-col');
        $(this).val('');
    });
    $('html').mousedown(function () {
        $('input').removeClass('border-col');
    });
}
//登陆框的input样式
function shop() {
    var num =0;
    $("#shop").click(function() {
        num++;
        if(num%2!=0){
            $('aside').animate({
                'right':'360px'
            },100);
        }else{
            $('aside').animate({
                'right':'0px'
            },100);
        }
    });
}
// 点击购物车出现隐藏动画
$(window).scroll(function () {
    var gao = $(document).scrollTop();
    if (gao>350){
        $('#gb_right_box').css("display","block");
    }
    else{
        $('#gb_right_box').css("display","none");
    }
    //吸顶
    if(gao>1500){
        $('#top-header-nav').css('display','block');
    }
    else{
        $('#top-header-nav').css('display','none');
    }
});
//滚动监听事件
function cBanner(){
    var iNow=0; //初始化自定义值
    var col =['#56d5ce','#e0191b','#d9edec','#f5f5f5'];
    var w = $('#pic-list img').width(); //获取图片宽度
    function bTimer(){
//定时器
        clearInterval(b_timer);
//先关后开
        var b_timer = setInterval(function(){
            iNow++;
            if(iNow == $('#pic-list li').length){ //判断是否最后一张图片
                iNow=0;
            }
            var j =iNow;
            tab(); //当前分页器高亮
            $('#pic-list').animate({ //ul运动距离
                left:-iNow*w
            },0);
            $('#bgc').css('background',col[j]);

        },2000); //定时器时间
        $('.banner-index').mouseover(function(){ //鼠标移入关闭定时器
            clearInterval(b_timer);
            $('.btn-menu').css('display','block');
        });
    }
    bTimer(); //定时器函数调用
    $('.banner-index').mouseout(function(){
//鼠标移出调用定时器
        bTimer();
        $('.btn-menu').css('display','none');
    });
    $('.right-btn').click(function (){
//点击切换下一个图片
        iNow++;
        if(iNow==$('#pic-list li').length){ //判断iNow是否为最后一张图片
            iNow=0;
        }
        var j =iNow;
        $('#pic-list').eq(0).animate({  //运动距离
            left:-iNow*w
        },0);
        $('#bgc').css('background',col[j]);
        tab(); //当前分页器高亮

    });
    $('.left-btn').click(function (){  //点击切换上一个
        iNow--;
        if(iNow==-1){ //判断是否是第一张图片
            iNow = $('#pic-list li').length-1 ;
        }
        var j = iNow;
        $('#pic-list').animate({ //运动距离
            left:-iNow*w
        },0);
        $('#bgc').css('background',col[j]);
        tab(); //当前分页器高亮
    });
    $('#btn-list li').click(function (){
//点击分页器选择图片
        iNow=$(this).index();
        var j =iNow;
//iNow赋值为当前分页器索引值
        $('#pic-list').animate({
            left:-iNow*w
        },0);
        $('#bgc').css('background',col[j]);
        tab();
    });
    function tab(){
//分页器高亮效果
        $('#btn-list li').removeClass('active');
        $('#btn-list li').eq(iNow).addClass('active');
    }
}
//选项卡轮播
show();//header的三角
shop();//右侧购物车
login('.login','.login-box');//右侧订单，抵用券，收藏夹
inp();//登录框的input清除
cBanner();//banner图轮播
$('.province').on('mouseover',function () {
   $('.province_box').css('display','block');
});
$('.province_box').on('mouseout',function () {
    $(this).css('display','none');
});












