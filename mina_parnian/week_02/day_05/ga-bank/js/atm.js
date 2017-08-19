
//Deposit

//Logic ///
const bank = {

	checking: 0,
	savings: 0,
	
	getTotal() {
		return this.checking + this.savings;
        // whtas return means here?
	},
	//equivalent to
	//this is the shorthand of deposit: function (){}
	deposit(account, amount) {
		if (amount >= 0) {
		this[account] += parseFloat(amount) 
		}	//this.checking = parseFloat(amount) + this.checking
		},

	withdraw(account, amount) {

		if (amount <= this[account]) {

			this[account] -= parseFloat(amount) ;

     } else if (amount >= 0 && amount <= this.getTotal()) {  
       // if (amount >= this[account]) {
        
       	   
           this.savings = this.getTotal() - amount;
           this.checking = 0;


       	   
       
       } else {

		   this[account] = 0;
		   alert('There is no enough money in your account');
		}

	},


      
 };//bank




//UX - DOM //


const render = function () {
	//.text(). place the bank.checking amount in to the balance
	$('#checking-balance').text('$' + bank.checking);
	$('#savings-balance').text('$' + bank.savings);

	if (bank.checking === 0) { //whats different between = and === and == here.
		$('#checking-balance').css("background-color", "#F52F4F");
		//$('#checking-balance').addClass('zero');
	} else {
		$('#checking-balance').css("background-color", "#E3E3E3");
		//$('#checking-balance').addClass('zero');
	}
    if (bank.savings === 0) {
		$('#savings-balance').css("background-color", "#F52F4F");
	} else {
		$('#savings-balance').css("background-color", "#E3E3E3");
	}
}



$(document).ready(function () {
    
	$('#checking-deposit').on('click', function() {
    const amount = $('#checking-amount').val();
    bank.deposit('checking', amount);
    render();
});



$('#checking-withdraw').on('click', function () {
	const amount = $('#checking-amount').val();
    bank.withdraw('checking', amount);
    render();

});


$('#savings-deposit').on('click', function() {
    const amount = $('#savings-amount').val();
    bank.deposit('savings', amount);
    render();
});



$('#savings-withdraw').on('click', function () {
	const amount = $('#savings-amount').val();
    bank.withdraw('savings', amount);
    render();

});


});//closing for document.ready
