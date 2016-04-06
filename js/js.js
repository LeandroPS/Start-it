	function hideApresentacao(){
		$("section.apresentacao").css("top", "-100%");
	}

	function showApresentacao(){
		$("section.apresentacao").css("top", "0px");
	}

$(function(){
	
	$("programacao-lista").slick();
	
	var lastScrollTop = 0;
	$(window).scroll(function(event){
	   var st = $(this).scrollTop();
	   if (st > lastScrollTop){
		   $(this).trigger("downscroll");
		   hideApresentacao();
		   // downscroll code
	   } else {
		   $(this).trigger("upscroll");
		   if($(this).scrollTop==0){
			   showApresentacao();
		   }
		   // upscroll code
	   }
	   lastScrollTop = st;
	});
	
	/*$(window).on("downscroll", function(){
			alert("down");
	});*/
	
	$("section.apresentacao").scroll(function(){
		console.log("bla");
		
		hideApresentacao();
		alert("oooo");
		
	});
	
	$("section.apresentacao").click(function(){
		hideApresentacao();
	});
	
	
	$("div.glass").click(function(){
		$(this).hide();	
	});
	
	$("button.inscricao").click(function(){

		$("div.cortina, div.inscricao").addClass("show");
	});
	
	$("div.cortina").click(function(){
		$("div.cortina, div.inscricao").removeClass("show");
	});
	
	$("section.programacao button.go-left").click(function(){
		var left = $("ul.programacao-lista").position().left;
		
		if(left==0){
			var new_left = -250;
		}else{
			var new_left = left -230;
		}
		
		$("ul.programacao-lista").css('left', new_left+"px");
	});
	
	$("section.programacao button.go-right").click(function(){
				var left = $("ul.programacao-lista").position().left;
		
		if(left==-250){
			var new_left = 0;
		}else{
			var new_left = left + 230;
		}
		
		$("ul.programacao-lista").css('left', new_left+"px");
	});
	
});