/**
 * Created by Administrator on 2017/3/13.
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
function vip() {
    $('#vip-btn>li').on('mouseover',function () {
        var clasName = $(this).attr('class');
        if(clasName == 'tab1'){
            $('#vip-list').animate({
                'top':'5px'
            });
            $('.vip1').css('display','block');
            $('#vip-tit a:first').addClass('active');

        }else if(clasName == 'tab2'){
            $('#vip-list').animate({
                'top':'5px'
            });
            $('.vip2').css('display','block');
            $('#vip-tit a:nth-child(2)').addClass('active');
        }else if(clasName == 'tab3'){
            $('#vip-list').animate({
                'top':'5px'
            });
            $('.vip3').css('display','block');
            $('#vip-tit a:last').addClass('active');
        }
        else{
        }
    });
    //出现下拉
    $('#vip-tit>a').on('mouseover',function () {
        var a =$(this).index();
        if (a == 0){
            $('#vip-tit>a').removeClass();
            $(this).addClass('active');
            $('#vip-menu div').css('display','none');
            $('#vip-menu div:first').css('display','block');
        }else if(a == 1){
            $('#vip-tit>a').removeClass();
            $(this).addClass('active');
            $('#vip-menu div').css('display','none');
            $('#vip-menu div:nth-child(2)').css('display','block');
        }else {
            $('#vip-tit>a').removeClass();
            $(this).addClass('active');
            $('#vip-menu div').css('display','none');
            $('#vip-menu div:last').css('display','block');
        }
    });
    //鼠标经过
    $('#close').click(function () {
        $('#vip-list').animate({
            'top':'190px'
        });
        $('#vip-menu div').css('display','none');
        $('#vip-tit a').removeClass();
    });
    //关闭按钮
}
//快讯处的下拉列表
$(window).scroll(function () {
    var gao = $(document).scrollTop();
    if (gao>850){
        $('#header-nav').css("display","block");
    }else{
        $('#header-nav').css("display","none");
    }
    //吸顶
    if(gao>1100){
        $('.left-box').fadeIn("slow");
        if(gao>1100&&gao<1500){
            $('.left-box i').css("display","block");
            $('.left-box .ices1').css("display","none");
        //    进口
        }else if(gao>1500&&gao<1800){
            $('.left-box i').css("display","block");
            $('.left-box .ices2').css("display","none");
        //    生鲜
        }else if(gao>1830&&gao<2250){
            $('.left-box i').css("display","block");
            $('.left-box .ices3').css("display","none");
        //    食品
        }else if(gao>2250&&gao<2850){
            $('.left-box i').css("display","block");
            $('.left-box .ices4').css("display","none");
        //    厨卫
        }else if(gao>2850&&gao<3200){
            $('.left-box i').css("display","block");
            $('.left-box .ices5').css("display","none");
        //    母婴
        }
        else if(gao>3200&&gao<3500){
            $('.left-box i').css("display","block");
            $('.left-box .ices6').css("display","none");
        //    家居
        }
        else if(gao>3500&&gao<4150){
            $('.left-box i').css("display","block");
            $('.left-box .ices7').css("display","none");
        //    百货
        }
        else if(gao>4150&&gao<4670){
            $('.left-box i').css("display","block");
            $('.left-box .ices8').css("display","none");
        //    家电
        }
        else if(gao>4570&&gao<4900){
            $('.left-box i').css("display","block");
            $('.left-box .ices9').css("display","none");
        }else{
            $('.left-box i').css("display","block");
            $('.left-box .ices0').css("display","none");
        }
    }
    else{
        $('.left-box').fadeOut("slow");
    }
    //左侧固定定位
});
//滚动监听事件
function cBanner(){
    var iNow=0; //初始化自定义值
    var col =['#2d95fe','#81bdf8','#da22da','#366d4d','#e5eebf','#719a00','#f9f9f9','#e5fee1','#bcfee3'];
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
function activity(){
    var iNow=0; //初始化自定义值
    var w = $('.activity-pic ul').width(); //获取图片宽度
    
    $('.btn-right').click(function (){
//点击切换下一个图片
        iNow++;
        if(iNow==$('.activity-pic ul').length){ //判断iNow是否为最后一张图片
            iNow=0;
        }
        $('.activity-pic').eq(0).animate({  //运动距离
            left:-iNow*w
        },1000);
        tab(); //当前分页器高亮

    });
    $('.btn-left').click(function (){  //点击切换上一个
        iNow--;
        if(iNow==-1){ //判断是否是第一张图片
            iNow = $('.activity-pic ul').length-1 ;
        }
        $('.activity-pic').animate({ //运动距离
            left:-iNow*w
        },1000);
        tab(); //当前分页器高亮
    });
    function tab(){
//分页器高亮效果
        $('.activity-tab a').removeClass('act');
        $('.activity-tab a').eq(iNow).addClass('act');
    }
}
//活动选项卡
function main(){
    var iNow=0; //初始化自定义值
    var w = $('.picc img').width(); //获取图片宽度
    function bTimer(){
//定时器
        clearInterval(b_timer);
//先关后开
        var b_timer = setInterval(function(){
            iNow++;
            if(iNow == 3){ //判断是否最后一张图片
                iNow=0;
            }
            tab(); //当前分页器高亮
            $('.picc li').animate({ //ul运动距离
                left:-iNow*w
            },1000);

        },3000); //定时器时间
        $('.picc').mouseover(function(){ //鼠标移入关闭定时器
            clearInterval(b_timer);
        });
    }
    bTimer(); //定时器函数调用
    $('.picc').mouseout(function(){
//鼠标移出调用定时器
        bTimer();
    });
    $('.btnn li').click(function (){
//点击分页器选择图片
        iNow=$(this).index();
//iNow赋值为当前分页器索引值
        $('.picc li').animate({
            left:-iNow*w
        },0);
        tab();
    });
    function tab(){
//分页器高亮效果
        $('.btnn li').removeClass('active');
        $('.btnn li').eq(iNow).addClass('active');
    }
}
//主体部分函数

function qwer(){
    var oImg=document.getElementById('tab-box');
    var oLi=document.getElementById('tab-btn');
    var aImg=oImg.getElementsByTagName('div');
    var aLi=oLi.getElementsByTagName('li');
    var emm = document.getElementById('qqq');
    var arr =['30px','97px','165px'];
    for(var i=0; i<aImg.length; i++){
        aLi[i].index=i;
        aLi[i].onmouseover=function(){
            for(var i=0; i<aImg.length; i++){
                aLi[i].className='';
                aImg[i].style.display='none';
            }
            this.className='active';
            aImg[this.index].style.display='block';
            emm.style.left=arr[this.index];
        }
    }
}
//闪购的选项卡
function fix() {
    $(".left-box i").on("mouseover",function () {
        $(this).css('display','none');
    });
    $(".left-box i").on("mouseout",function () {
        $(this).css("display","block");
    });
}
show();//header的三角
vip();//快讯下拉
shop();//右侧购物车
login('.login','.login-box');//右侧订单，抵用券，收藏夹
inp();//登录框的input清除
cBanner();//banner图轮播
qwer();//闪购JS
activity();//专属活动部分轮播
main();//index部分选项卡
fix();//选项卡轮播