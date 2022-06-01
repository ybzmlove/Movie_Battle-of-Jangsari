/* common.js */

$(document).ready(function(){
    //브라우저가 로드되면 coverstory.html을 #content 라는 공간에 넣겠다.
    
    /*
    $.ajax({
        url: "./coverstory.html", 
        success: function(result){
            $("#content").html(result);
        }
    });


    //각 메뉴 클릭시 해당하는 콘텐츠를 #content 라는 공간에 넣겠다.
    $("nav li:eq(0)").click(function(){
        $.ajax({
            url: "./coverstory.html", 
            success: function(result){
                $("#content").html(result);
            }
        });
        $("nav li").removeClass("active");
        $(this).addClass("active");
        return false;
    });

    $("nav li:eq(1)").click(function(){
        $.ajax({
            url: "./character.html", 
            success: function(result){
                $("#content").html(result);
            }
        });
        $("nav li").removeClass("active");
        $(this).addClass("active");
        return false;
    });

    $("nav li:eq(2)").click(function(){
        $.ajax({
            url: "./snapshots.html", 
            success: function(result){
                $("#content").html(result);
            }
        });
        $("nav li").removeClass("active");
        $(this).addClass("active");
        return false;
    });

    $("nav li:eq(3)").click(function(){
        $.ajax({
            url: "./epilogue.html", 
            success: function(result){
                $("#content").html(result);
            }
        });
        $("nav li").removeClass("active");
        $(this).addClass("active");
        return false;
    });
    */

    //클릭한 곳의 인덱스 번호를 추적하여 해당하는 배열 데이터의 문서 이름을 통해 화면에 노출
    var $url = [
        "coverstory.html", 
        "character.html", 
        "snapshots.html", 
        "epilogue.html"
    ];
    //브라우저가 로드되면 coverstory.html을 #content 라는 공간에 넣겠다.
    $.ajax({
        url: `./${$url[0]}`,
        success: function(result){
            $("#content").html(result);
        }
    });
    //각 메뉴 클릭시 해당하는 콘텐츠를 #content 라는 공간에 넣겠다.
    $("nav li").not(":last").click(function(){
        var clickIndex = $(this).index();
        $.ajax({
            url: `./${$url[clickIndex]}`,
            success: function(result){
                $("#content").html(result);
            }
        });

        $("nav li").removeClass("active");
        $(this).addClass("active");
        return false;
    });

    $(".res_btn").click(function(){
        $(".dark_res").addClass("active");
        $("nav").addClass("active");
        

    });

    $("nav li:not(':last'), .close_btn, .dark_res").click(function(){
        $(".dark_res").removeClass("active");
        $("nav").removeClass("active");
    });










});