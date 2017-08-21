// What happens when the user wants to withdraw more money from the checking account than is in the account? These accounts have overdraft protection, so if a withdrawal can be covered by the balances in both accounts, take the checking balance down to $0 and take the rest of the withdrawal from the savings account. If the withdrawal amount is more than the combined account balance, ignore it.
// Make sure there is overdraft protection going both ways.
// Are there ways to refactor your code to make it DRYer?







//logic code
const bank = {
  checking: 0,
  savings: 0,
  total: 0,

  deposit(account, amount){
    //if not value then amount is equal to 0.
    amount = parseFloat(amount) || 0;
    if (amount !== Math.abs(amount)){
      // alert(`Must be a positive number.`);
      console.log(`Must be a positive number.`);
    }
    else {
      if (account === 'checking'){
      this[account] += parseFloat(amount);
      $('#checking-balance').text(`$${bank.checking.toFixed(2)}`);
      }
      else if (account === 'savings'){
        this[account] += parseFloat(amount);
        $('#savings-balance').text(`$${bank.savings.toFixed(2)}`);
      }
    }
  },

  withdraw(account, amount){
    //if not a value will parse 0
    //makes sure amount is an int so can be strictly equal to Math.abs(amount)
    amount = parseFloat(amount) || 0;
    //if not enough in account take from other
    if (amount > bank[account] && amount < bank.total){
      if(account === "checking"){
        let floatAmount = amount - bank[account];
        bank.checking = 0;
        bank.savings = bank.savings - floatAmount;
        $('#checking-balance').text(`$${bank.checking.toFixed(2)}`);
        $('#savings-balance').text(`$${bank.savings.toFixed(2)}`);
      }
      else if (account === 'savings'){
        let floatAmount = amount - bank[account];
        bank.savings = 0;
        bank.checking = bank.checking - floatAmount;
        $('#checking-balance').text(`$${bank.checking.toFixed(2)}`);
        $('#savings-balance').text(`$${bank.savings.toFixed(2)}`);
      }
      else {
        // alert(`Funds are too low, select another amount.`);
        console.log(`Funds are too low, select another amount.`);
      }

    }

    //if enough money in account and positive number
    else if((bank[account] - amount) >= 0 && amount === Math.abs(amount)){
      if(account === 'checking'){
        this[account] -= parseFloat(amount);
        $('#checking-balance').text(`$${bank.checking.toFixed(2)}`);
      }
      else if (account === 'savings'){
        this[account] -= parseFloat(amount);
        $('#savings-balance').text(`$${bank.savings.toFixed(2)}`);
      }
    }
    //if not positive number
    else if (amount !== Math.abs(amount)){
      // alert(`Must be a positive number`);
      console.log(`Must be a positive number`);
    }
    //any other outcome
    else {
      // alert(`Funds are too low, select another amount.`);
      console.log(`Funds are too low, select another amount.`);
    }
  }
};

const render = function (account) {
  //All DOM updating code here
  //if account is $0 display red else green
  if($('#checking-balance').text() === '$0.00'){
    $('#checkingBordered').css('background-color', '#FFD2D5');
    $('#checkingExpandButton').css('background-color', '#FFD2D5');
  }
  else {
    $('#checkingBordered').css('background-color', '#E3E2E5');
    $('#checkingExpandButton').css('background-color', '#E3E2E5');
  }
  if($('#savings-balance').text() === '$0.00'){
    $('#savingsBordered').css('background-color', '#FFD2D5');
    $('#savingsExpandButton').css('background-color', '#FFD2D5');
  }
  else {
    $('#savingsBordered').css('background-color', '#E3E2E5');
    $('#savingsExpandButton').css('background-color', '#E3E2E5');
  }
  bank.total = bank.checking + bank.savings;
  $('#totalBalanceChecking').text(`$${bank.total.toFixed(2)}`);
  bank.total = bank.checking + bank.savings;
  $('#totalBalanceSavings').text(`$${bank.total.toFixed(2)}`);
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
  $('#checkingExpandButton').on('click', function () {
    $("#slideCheckingAmount").animate({width:'toggle'},200);
    $("#slideCheckingDeposit").delay( 180 ).animate({width:'toggle'},200);
    $("#slideCheckingWithdraw").delay( 380 ).animate({width:'toggle'},200);
    // $('#checking-amount').fadeToggle();
    // $('#checking-deposit').fadeToggle();
    // $('#checking-withdraw').fadeToggle();
  })
  $('#savingsExpandButton').on('click', function () {
    $("#slideSavingsAmount").animate({width:'toggle'},200);
    $("#slideSavingsDeposit").delay( 180 ).animate({width:'toggle'},200);
    $("#slideSavingsWithdraw").delay( 380 ).animate({width:'toggle'},200);
    // $('#savings-amount').fadeToggle();
    // $('#savings-deposit').fadeToggle();
    // $('#savings-withdraw').fadeToggle();
  })
  render();
});
