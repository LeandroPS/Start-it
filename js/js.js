	function hideApresentacao(){
		$("section.apresentacao").css("top", "-100%");
	}

	function showApresentacao(){
		$("section.apresentacao").css("top", "0px");
	}

$(function(){
	
	//$("programacao-lista").slick();
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html, body').animate({
			  scrollTop: target.offset().top - 59
			}, 1000);
			return false;
		  }
		}
	  });
	
	function crop(){
		var width = $("section.programacao").width() - 40;
		if(width>=$("ul.programacao-lista").width()){
			$("div.botoes").hide();
		}else if($(window).width()<773){
			return;
		}else{
			var qts = Math.floor(width/230);
			$("div.lista-container").width((qts*230)+10);

			dots();
		}
	}
	
	crop();
	
	function dots(){
		ulwidth = $("ul.programacao-lista").width();
		cropwidth = $("div.lista-container").width();
		
		exibido = Math.floor($("div.lista-container").width()/230);
		
		total = 8 - exibido + 1;
		
		$("div.dots").empty();
		
		for(i = 1; i<=total; i++){
			dot = jQuery("<div></div>");
			dot.addClass(i==1?"current":"");
			$("div.dots").append(dot);
		}
	}
	
	$(window).resize(function(){
		crop();
	});
	
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
	
	$("section.programacao button.go-right").click(function(){
		var left = $("ul.programacao-lista").position().left;
		
		if(left==0){
			var new_left = -230;
		}else if(($("ul.programacao-lista").width() - (Math.abs(left) + $("div.lista-container").width()))< 230){
			var new_left = -($("ul.programacao-lista").width() + 10 - $("div.lista-container").width());
			$("div.dots div").removeClass("current");
			$("div.dots div:last-child").addClass("current");
			return;
		}else{
			var new_left = left -230;
		}
		
		var curr = $("div.dots div.current");
		curr.removeClass("current").next().addClass("current");
		
		$("ul.programacao-lista").css('left', new_left+"px");
	});
	
	$("section.programacao button.go-left").click(function(){
		var left = $("ul.programacao-lista").position().left;
		
		if(left==0){
			var new_left = 0;
			$("div.dots div").removeClass("current");
			$("div.dots div:first-child").addClass("current");
			return;
		}else{
			var new_left = left + 230;
		}
		
		var curr = $("div.dots div.current");
		curr.removeClass("current").prev().addClass("current");
		
		$("ul.programacao-lista").css('left', new_left+"px");
	});
	
});