// JavaScript Document

$(document).ready(function(){

//load
	$("nav").load("nav.html");
	$("footer").load("footer.html");

//menu
	$(".menu").click(function(){ 
		$("nav").slideToggle();
	});

//menu rwd
	$(window).on('load resize',function(){
		var a_w = document.body.clientWidth;
		if(a_w >= 768) $("nav").show(); else $("nav").hide();
	});



//click event
$(".list").click(function(){
  $(this).addClass("ch_bg").siblings().removeClass("ch_bg");
  getcon('js/list.json',$(this).data("file"));//抓list.json內容 找data-file的值
  var _index = $(this).index();
	$(".content").stop(true, true).hide().eq(_index).fadeIn(600); 
});

//JSON
function getcon(filename,type) {
	
	$.getJSON(filename, function(data){

		$(".content").empty();//清空內容

    $.each(data, function(index, en){
      
        var html='<!--card-->';
        html += '<div class="card">';
        html += '<a href="#">';
        html += '<div class="imgbox">';
        html += '<img src="'+en.image+'">';//串接變數
        html += '</div>';
        html += '<h3>'+en.title+'</h3>'; //可變更
        html += '<span>'+en.material+'</span><br>';
        html += '<span>'+en.size+'</span><br>';
        html += '<span>'+en.year+'</span><br>';
        html += '</a>';
        html += '</div>'
        
        if(en.type == type){
		    $(".content").append(html);//將html內容一次放入content
		  }


    });

		
	});
	return false;
}//getcon自己命名

//first but
$(".list").eq(0).addClass("ch_bg");
$(".list").eq(0).click();//

//swiper
	var swiper = new Swiper('.mySwiper', {
        speed:3000,
		spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

});

