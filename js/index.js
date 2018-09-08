$(function(){
	var h = document.documentElement.clientHeight;
	$(".big-banner").css("height",h);
	$(".base-information").css("height",h);
	$(".my-experience").css("height",h);
	$(".personal-skills").css("height",h);
	$(".works-gallery").css("height",h);
	$(".xingquaihao").css("height",h);
	
	
	
	//创建舞台
		var stage = new Konva.Stage({
			container: 'container',
			width:1000,
			height:460
		});

		//创建层
		var layer = new Konva.Layer();
		stage.add(layer);
		//中心点坐标
		var cenX = stage.width() / 2;
		var cenY = stage.height() / 2;

		//柱状图的数据
		var data = [
			{ name: 'HTML/CSS', value: '.9', color: 'green'},
			{ name: 'JS/jQuery', value: '.6', color: 'blue'},
			{ name: 'Bootstrapt', value: '.5', color: 'red'},
			{ name: 'ajax/canvas', value: '.6', color: 'orange'},
			{ name: 'vue.js', value: '.4', color: 'purple'},
			{ name: 'UI/photoshop', value: '.8', color: 'teal'}
		];


		var h  = new HistogramChart({
			x: 1/8 * stage.width(),
			y: 3/4 * stage.height(),
			w: 3/4 * stage.width(),
			h: 1/2 * stage.height(),
			data: data
		});

		h.addToGroupOrLayer( layer );

		layer.draw();

		stage.on('contentClick', function(){
			h.playAnimate();
		});
		$(".nav-link").on("mousemove",function(){
		$(".nav-link").removeClass("active");
		$(this).addClass("active");		
	})

	
		$(window).scroll(function(){
			var docSccrollTop = $(document).scrollTop();
			var h = document.documentElement.clientHeight;
			if(docSccrollTop < h){
				$(".nav-link").removeClass("active");
				$("#nav_link").addClass("active");
			}else if(docSccrollTop < 2*h){
				$(".nav-link").removeClass("active");      
				$("#nav_link1").addClass("active");
			}else if(docSccrollTop < 3*h){
				$(".nav-link").removeClass("active");
				$("#nav_link2").addClass("active");
			}else if(docSccrollTop < 4*h){
				$(".nav-link").removeClass("active");
				$("#nav_link3").addClass("active");
			}else if(docSccrollTop < 5*h){
				$(".nav-link").removeClass("active");
				$("#nav_link4").addClass("active");
			}else if(docSccrollTop < 6*h){
				$(".nav-link").removeClass("active");
				$("#nav_link5").addClass("active");
			}
			//alert(docSccrollTop);
			}
		)
})
