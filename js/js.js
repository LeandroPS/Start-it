	var palestrantes = [
		{
			nome: "Luiza Trajano",
			descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			logo: "Images/magazine-luiza.svg"
		},
		{
			nome: "Luiz Quinderé",
			descricao: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
			logo: "Images/Logo-Brownie-2013-vetor.svg"
		},
		{
			nome: "Licínio barcelos",
			descricao: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
			logo: "Images/logo-sb.svg"
		},
		{
			nome: "Samuel",
			descricao: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,",
			logo: "Images/logo-boulevad.svg"
		}
	];

	function hideApresentacao(){
		$("section.apresentacao").css("top", "-100%");
	}

	function showApresentacao(){
		$("section.apresentacao").css("top", "0px");
	}

$(function(){
	
	cont_palestrantes = 0;
	
	/*$('section.palestrantes ul.lista-palestrantes').flickity({
		setGallerySize: false,
		contain: true
	});
	*/
	
/*$('section.palestrantes ul.lista-palestrantes').slick({
  dots: false,
  infinite: false,
  speed: 300,
  swipe: true,
  arrows: false,
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});*/


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
		$("div.botoes").show();
		var width = $("section.programacao").width() - 40;
		if(width>=$("ul.programacao-lista").width()){
			$("div.botoes").hide();
		}else if($(window).width()<773){
			$("div.lista-container").width(332);
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
		   //if($(this).scrollTop==0){
		   /*if($(window).offset().top==0){
			   showApresentacao();
		   }*/
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
		
	});
	
	$("section.apresentacao").click(function(){
		hideApresentacao();
	});
	
	function seleciona_palestrante(index){
		$("section.palestrantes div.painel-palestrantes").addClass("show");
		$("section.palestrantes div.palestrantes-container").addClass("retrai");
		$("section.palestrantes div.palestrantes-container span.aviso").addClass("hide");
		
		$("section.palestrantes ul>li").removeClass("current");
		$("section.palestrantes ul>li:eq("+index+")").addClass("current");
		
		palestrante = palestrantes[index];
		
		$("section.palestrantes div.painel-palestrantes div.painel:not(.current) h2.nome").text(palestrante.nome);
		$("section.palestrantes div.painel-palestrantes div.painel:not(.current) p.descricao").text(palestrante.descricao);
		$("section.palestrantes div.painel-palestrantes div.painel:not(.current) img.logo").attr("src", palestrante.logo);
		
		current = $("section.palestrantes div.painel-palestrantes div.painel.current");
		nxt = $("section.palestrantes div.painel-palestrantes div.painel:not(.current)");
		current.removeClass("current");
		nxt.addClass("current");
		
		$("section.palestrantes div.painel-palestrantes").height(nxt.height());

	}
	
	$("section.palestrantes ul>li").click(function(){
		var width = $(window).width();
		if(width<=480){
			var indx = $(this).index();
			cont_palestrantes = indx;
			$("ul.lista-palestrantes").css("left", (width/2)-(indx*145)-(144/2)-20+(-indx*4)+"px");
		}
		/*$("section.palestrantes div.painel-palestrantes").addClass("show");
		$("section.palestrantes ul>li").removeClass("current");
		$(this).addClass("current");*/
		seleciona_palestrante($(this).index());
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
	
	$("ul.lista-palestrantes").on("swipeleft", function(e){
		var width = $(window).width();
		left = $(this).position().left;
		if(cont_palestrantes<3){
			cont_palestrantes++;
		}
		if($("ul.lista-palestrantes li.current").size()!=0){
			seleciona_palestrante(cont_palestrantes);
		}
		$("ul.lista-palestrantes").css("left", (width/2)-(cont_palestrantes*145)-(144/2)-20+(-cont_palestrantes*4)+"px");
		//$(this).css("left", (left - 125)+"px");
		console.log(e);
	});
	
	$("ul.lista-palestrantes").on("swiperight", function(e){
		var width = $(window).width();
		left = $(this).position().left;
		
		if(cont_palestrantes>0){
			cont_palestrantes--;
		}
		if($("ul.lista-palestrantes li.current").size()!=0){
			seleciona_palestrante(cont_palestrantes);
		}
		$("ul.lista-palestrantes").css("left", (width/2)-(cont_palestrantes*145)-(144/2)-20+(-cont_palestrantes*4)+"px");
		
		//$(this).css("left", (left + 125)+"px");
		console.log(e);
	});
	
});