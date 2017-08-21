// business logic
const bank = {
  checking: 0,
  savings: 0,

  getTotal() {
    return this.checking + this.savings;
  },
  deposit(account, amount) {
    const amountSanitised = parseInt(amount) || 0;
    if (amount > 0) {
      this[account] += amountSanitised;
      renderTransaction('Deposit', account, amount);
    }
  },
  withdraw(account, amount) {
    const amountSanitised = parseInt(amount) || 0;
    if (amountSanitised > 0 && amountSanitised <= this.getTotal()) {
      if (amountSanitised >= this[account]) {
        // split amount
        const remainder = amountSanitised - this[account];
        // withdraw from both
        this[account] = 0;
        account === 'savings' ? this.checking -= remainder : this.savings -= remainder;
        renderTransaction('Withdraw', account, amount);

      } else {
        this[account] -= amountSanitised;
        renderTransaction('Withdraw', account, amount);
      }
    }

  }
}


const render = function() {
  $('#checking-balance').text( '$' + bank.checking );
  $('#savings-balance').text( '$' + bank.savings );

  if (bank.checking === 0) {
    $('#checking-balance').addClass('zero');
  } else {
    $('#checking-balance').removeClass('zero');
  }

  if (bank.savings === 0) {
    $('#savings-balance').addClass('zero');
  } else {
    $('#savings-balance').removeClass('zero');
  }

  // remove tr elements after 10
  if ($('table tbody tr').size() > 10) {
    $('table tbody tr:last').remove();
  }
}

const renderTransaction = function(action, account, amount) {
  transactions = $('.transactions tbody');
  if (action === 'Deposit') {
    item = $('<tr class="itemDeposit"><td>' + account + '</td><td>' + action + '</td><td>' + '$' + amount + '</td><td>' + '$' + bank[account] + '</td></tr>');
  } else {
    item = $('<tr class="itemWithdraw"><td>' + account + '</td><td>' + action + '</td><td>' + '$' + amount + '</td><td>' + '$' + bank[account] + '</td></tr>');
  }
  transactions.prepend(item);
}

$(document).ready( function() {
  render();
  // UI logic
  // checking
  $('#checking-deposit').on('click', function() {
    const amount = $('#checking-amount').val();

    bank.deposit('checking', amount);
    render();
  });

  $('#checking-withdraw').on('click', function() {
    const amount = $('#checking-amount').val();

    bank.withdraw('checking', amount);
    render();
  });

  // savings
  $('#savings-deposit').on('click', function() {
    const amount = $('#savings-amount').val();

    bank.deposit('savings', amount);
    render();
  });

  $('#savings-withdraw').on('click', function() {
    const amount = $('#savings-amount').val();

    bank.withdraw('savings', amount);
    render();
  });

});

// update #checking-balance value
// update #savings-balance value
