
//Deposit

//Logic ///
const bank = {

	checking: 0,
	savings: 0,
	
	getTotal() {
		this.checking + this.savings;

	},
	//equivalent to
	//this is the shorthand of deposit: function (){}
	deposit(account, amount) {
		if (amount >= 0) {
		this[account] += parseFloat(amount) 
		}	//this.checking = parseFloat(amount) + this.checking
		},

	withdraw(account, amount) {

        
       if (amount >= this[account]) {

       	   this [account] = 0;
       	   
       
       } else {

		   this[account] -= parseFloat(amount) 
		}
	}

	// color(changeColor, defaultColor) {

	// if (this[account] = 0) {

 //       	  return changeColor;
 //      } 	   
       
 //    }
      
 };//bank




//UX - DOM //


const render = function () {
	//.text(). place the bank.checking amount in to the balance
	$('#checking-balance').text('$' + bank.checking);
	$('#savings-balance').text('$' + bank.savings);

}



$(document).ready(function () {
    
	$('#checking-deposit').on('click', function() {
    const amount = $('#checking-amount').val();
    bank.deposit('checking', amount);
    render();
});



$('#checking-withdraw').on('click', function () {
	const amount = $('#checking-amount').val();
	// const changeColor = $('#checking').css("background-color", "red");
	// const defaultColor = $('#checking').css("background-color", "grey");
    bank.withdraw('checking', amount);
    // bank.color(changeColor, defaultColor);
	render();

});


$('#savings-deposit').on('click', function() {
    const amount = $('#savings-amount').val();
    bank.deposit('savings', amount);
    render();
});



$('#savings-withdraw').on('click', function () {
	const amount = $('#savings-amount').val();
	// const changeColor = $('#savings').css("background-color", "red");
	// const defaultColor = $('#savings').css("background-color", "grey");
    bank.withdraw('savings', amount);
    // bank.color(changeColor, defaultColor);
	render();

});


});//closing for document.ready
