$(function(){

	calc();
	$('#calc_plan').on('change', calc);
	$('#inv_amount').bind('change keyup', calc).on('keypress', isNumberKey);
});

function isNumberKey(evt) {
	var charCode = (evt.which) ? evt.which : event.keyCode;
	if (charCode > 31 && (charCode < 45 || charCode > 57))
		return false;
	return true;
}

function calc() {

	var plan = $('#calc_plan').val();
	var amount = $('#inv_amount').val();
	var percent;
	var days;
	var hours;

	switch (plan) {
		case '1':
			switch (true) {
				case (amount<10):
					percent = 0;
					days=1;
					hours=0;
					break;

				case (amount>=10 && amount<=300): 
					percent = 1.08; 
					days=1;
					hours=96;
					break;
					
			   default:
					percent = 0; 
					days=1;
					hours=0;
			}
			break;

		case '2':
			switch (true) {
				case (amount<300):
					percent = 0;
					days=1;
					hours=0;
					break;

				case (amount>=300 && amount<=20000): 
					percent = 2.5; 
					days=1;
					hours=80;
					break;
					
			   default:
					percent = 0; 
					days=1;
					hours=0;
			}
			break;


            case '3':
    			switch (true) {
    				case (amount<500):
					percent = 0;
					days=1;
					hours=0;
					break;

				case (amount>=500 && amount<=50000): 
					percent = 6; 
					days=1;
					hours=50;
					break;
					
			   default:
					percent = 0; 
					days=1;
					hours=0;
    			}
    			break;


		case '4':
			switch (true) {
				case (amount<1000):
					percent = 0;
					days=1;
					hours=0;
					break;

				case (amount>=1000 && amount<=100000): 
					percent = 15; 
					days=1;
					hours=30;
					break;
					
			   default:
					percent = 0; 
					days=1;
					hours=0;
			}
			break;

		

		
	}
	

$('#assign_per').text(percent+'%');
	var total = amount*percent/100;
	var hourbase= total*hours;
	$('#total_return').text('$'+hourbase.toFixed(2));
	
	//for hourly
	/*
	if(days==1)
	    {   
	        $('#total_return').text('$'+(hourbase).toFixed(2));
	    }
	    else{
	        $('#total_return').text('$'+total.toFixed(2));
	    }
	  */
    $('#total_days').text(days);
	$('#total_invam').text('$'+(amount*1).toFixed(2));
	
	
	if(total <= 0){
		$('#net_profit').text('0.00');
	}else{
	    $('#net_profit').text('$'+(total-amount).toFixed(2));
	    
	    //for hourly
	    /*
	    if(days== 1)
	    {   
	        $('#net_profit').text('$'+(hourbase-amount).toFixed(2));
	    }
	    else{
	        $('#net_profit').text('$'+(total-amount).toFixed(2));
	    }
	    */
		
	}
}