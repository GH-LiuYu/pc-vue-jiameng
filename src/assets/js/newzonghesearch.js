$(".indusXiala li").each(function(index){
	$(this).mouseenter(function(){
		$(this).siblings().removeClass('bg');
		$(this).addClass('bg')
	})
})
$(".hangyeBox .item").each(function(index){
	$(this).mouseenter(function(){
		$(this).siblings().removeClass('bg1');
		$(this).addClass('bg1')
	})
})

$(".hangye2").click(function(){
	$(".hangyeBox").toggle();
})
$(".logoFind2 .text").focus(function(){
	$(".hangyeBox").hide();
})
$(function() {
    $("#keyword_fenci1").keydown(function() {
        var length = $("#keyword_fenci1").val().length;
        if(length > 0) {
            $(".bottomLa1").hide()
        }
    })
    $("#keyword_fenci").keydown(function() {
        var length = $("#keyword_fenci").val().length;
        if(length > 0) {
            $(".bottomLa").hide()
        }
    })
})