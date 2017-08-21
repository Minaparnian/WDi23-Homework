// When the balance of the bank account is $0 the background of that bank account should be red. It should be gray when there is money in the account.
// What happens when the user wants to withdraw more money from the checking account than is in the account? These accounts have overdraft protection, so if a withdrawal can be covered by the balances in both accounts, take the checking balance down to $0 and take the rest of the withdrawal from the savings account. If the withdrawal amount is more than the combined account balance, ignore it.
// Make sure there is overdraft protection going both ways.
// Are there ways to refactor your code to make it DRYer?







//logic code
const bank = {
  checking: 0,
  savings: 0,

  deposit(account, amount){
    //if not value then amount is equal to 0.
    amount = parseInt(amount) || 0;
    if (amount !== Math.abs(amount)){
      console.log(`Must be positive number.`);
    }
    else {
      if (account === 'checking'){
      this[account] += parseFloat(amount);
      $('#checking-balance').text(`$${bank.checking}`);
      }
      else if (account === 'savings'){
        this[account] += parseFloat(amount);
        $('#savings-balance').text(`$${bank.savings}`);
      }
    }
  },

  withdraw(account, amount){
    //if not a value will parse 0
    //makes sure amount is an int so can be strictly equal to Math.abs(amount)
    amount = parseInt(amount) || 0;
    //if enough money in account and positive number
    if((bank[account] - amount) >= 0 && amount === Math.abs(amount)){
      if(account === 'checking'){
        this[account] -= parseFloat(amount);
        $('#checking-balance').text(`$${bank.checking}`);
      }
      else if (account === 'savings'){
        this[account] -= parseFloat(amount);
        $('#savings-balance').text(`$${bank.savings}`);
      }
    }
    //if not positive number
    else if (amount !== Math.abs(amount)){
      console.log(`Must be a positive number`);
    }
    //any other outcome
    else {
      console.log(`Funds are too low, select another amount.`);
    }

  }
};

const render = function (account) {
  //All DOM updating code here
  //if account is $0 display red else green
  if($('#checking-balance').text() === '$0'){
    $('#checking').css('background-color', '#ED4337');
  }
  else {
    $('#checking').css('background-color', '#6C9A74');
  }
  if($('#savings-balance').text() === '$0'){
    $('#savings').css('background-color', '#ED4337');
  }
  else {
    $('#savings').css('background-color', '#6C9A74');
  }
};

//UI/DOM code
$(document).ready(function () {
  //gets button and listens for click event
  $('#checking-deposit').on('click', function () {
    //takes value in input field and saves as variable
    const amount = $('#checking-amount').val();
    //call deposit function with bank object
    bank.deposit('checking', amount);
    //calls render function which will amount shown
    render('checking');
  });
  $('#checking-withdraw').on('click', function (){
    const amount = $('#checking-amount').val();
    bank.withdraw('checking', amount);
    render('checking');
  });
  $('#savings-deposit').on('click', function () {
    const amount = $('#savings-amount').val();
    bank.deposit('savings', amount);
    render('savings');
  });
  $('#savings-withdraw').on('click', function (){
    const amount = $('#savings-amount').val();
    bank.withdraw('savings', amount);
    render('savings');
  });
  render();

});
