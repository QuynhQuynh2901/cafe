$(document).ready(function(){
			$(window).scroll(function(event){
				var pos_body = $('html,body').scrollTop();
				console.log(pos_body);
				if(pos_body >=500)
				{
					for(var i = 0; i < 10; i++)
					{
						if(i == 0)
							$('.chu:eq('+i+')').css('color','#EA8025');	
						else
							$('.chu:eq('+i+')').css('color','black');
					}
				}
				if(pos_body > 1665)
				{					
					for(var i = 0; i < 10; i++)
					{
						if(i == 1)
							$('.chu:eq('+i+')').css('color','#EA8025');	
						else
							$('.chu:eq('+i+')').css('color','black');
						//$('.chu:eq('i')').css('color','black');
					}
				}
				if(pos_body > 2167)
				{					
					for(var i = 0; i < 10; i++)
					{
						if(i == 2)
							$('.chu:eq('+i+')').css('color','#EA8025');	
						else
							$('.chu:eq('+i+')').css('color','black');
						//$('.chu:eq('i')').css('color','black');
					}
				}	
				if(pos_body > 3000)
				{					
					for(var i = 0; i < 10; i++)
					{
						if(i == 3)
							$('.chu:eq('+i+')').css('color','#EA8025');	
						else
							$('.chu:eq('+i+')').css('color','black');
						//$('.chu:eq('i')').css('color','black');
					}
				}	
				if(pos_body > 3833)
				{					
					for(var i = 0; i < 10; i++)
					{
						if(i == 4)
							$('.chu:eq('+i+')').css('color','#EA8025');	
						else
							$('.chu:eq('+i+')').css('color','black');
						//$('.chu:eq('i')').css('color','black');
					}
				}	
				if(pos_body > 4833)
				{					
					for(var i = 0; i < 10; i++)
					{
						if(i == 5)
							$('.chu:eq('+i+')').css('color','#EA8025');	
						else
							$('.chu:eq('+i+')').css('color','black');
						//$('.chu:eq('i')').css('color','black');
					}
				}	
				if(pos_body > 5667)
				{					
					for(var i = 0; i < 10; i++)
					{
						if(i == 6)
							$('.chu:eq('+i+')').css('color','#EA8025');	
						else
							$('.chu:eq('+i+')').css('color','black');
						//$('.chu:eq('i')').css('color','black');
					}
				}	
				if(pos_body > 6167)
				{					
					for(var i = 0; i < 10; i++)
					{
						if(i == 7)
							$('.chu:eq('+i+')').css('color','#EA8025');	
						else
							$('.chu:eq('+i+')').css('color','black');
						//$('.chu:eq('i')').css('color','black');
					}
				}	
				if(pos_body > 7000)
				{					
					for(var i = 0; i < 10; i++)
					{
						if(i == 8)
							$('.chu:eq('+i+')').css('color','#EA8025');	
						else
							$('.chu:eq('+i+')').css('color','black');
						//$('.chu:eq('i')').css('color','black');
					}
				}	
				if(pos_body > 8280)
				{					
					for(var i = 0; i < 10; i++)
					{
						if(i == 9)
							$('.chu:eq('+i+')').css('color','#EA8025');	
						else
							$('.chu:eq('+i+')').css('color','black');
						//$('.chu:eq('i')').css('color','black');
					}
				}		
						
			})	
		});