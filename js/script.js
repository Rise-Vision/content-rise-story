$(document).ready(function() { 
		

		//What is Rise Vision? slide controls
		
        $('#banner').oneByOne({
			className: 'oneByOne',	             
			easeType: 'bounceInDown',
			slideShow: true,
			showButton: true,
			enableDrag: true,
			showArrow:false
		}); 

		//How is it free? slide controls

		$('#banner2').oneByOne({
			className: 'oneByOne',
			easeType: 'random',
			showArrow: true,
			slideShow: true,
			enableDrag: true,
			showArrow:false
		});
	
	//Who Uses Rise? slide controls

		$('#banner3').oneByOne({
			className: 'oneByOne',
			easeType: 'random',
			showArrow: true,
			slideShow: true,
			enableDrag: true,
			showArrow:false
		});
		
		
	 });