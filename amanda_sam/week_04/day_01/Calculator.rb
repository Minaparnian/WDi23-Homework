# Calculator

### Explanation
# You will be building a calculator. A calculator can perform multiple arithmetic operations.
# Your function should allow the user to choose which operation is expected,
# enter in the values to perform the operation on, and ultimately view the result.

### Specification:
# - A user should be given a menu of operations
# - A user should be able to choose from the menu
# - A user should be able to enter numbers to perform the operation on
# - A user should be shown the result
# - This process should continue until the user selects a quit option from the menu

#### Phase 1
# - Calculator functionality
# - Calculator should be able to do basic arithmetic (+,-, *, /)

#### Phase 2
# - Advanced Calculator functionality
# - Calculator should be able to do basic arithmetic (exponents, square roots)


########## beginning:

def get_user_choice
    # Show the available operations
    puts "(+) - Addition"
    puts "(-) - Subtraction"
    puts "(*) - Multiplication"
    puts "(/) - Dividation"
    puts "(**) - Exponent"
    puts "(r) - squareRoots"
    puts "(q) - Quit"

    print "Enter your selection: "
    gets.downcase.chomp # Implicit return
  end

########## addition function:

def addition
  print "What is your first number for this addition? "
  first_num = gets().to_i() # make sure it returns integers

  print "What is your second number for this addition? "
  second_num = gets().to_i()

  result = first_num + second_num
  puts "#{first_num} + #{second_num} = #{result}"
end

########## subtraction function:

def subtraction
  print "What is your first number for this subtraction? "
  first_num = gets().to_i()

  print "What is your second number for this subtraction? "
  second_num = gets().to_i()

  result = first_num - second_num
  puts "#{first_num} - #{second_num} = #{result}"
end

########## multiplication function:

def multiplication
  print "What is your first number for this multiplication? "
  first_num = gets().to_i()

  print "What is your second number for this multiplication? "
  second_num = gets().to_i()

  result = first_num * second_num
  puts "#{first_num} * #{second_num} = #{result}"
end

########## dividation function:

def dividation
  print "What is your first number for this dividation? "
  first_num = gets().to_i()

  print "What is your second number for this dividation? "
  second_num = gets().to_i()

  result = first_num / second_num
  puts "#{first_num} / #{second_num} = #{result}"
end

########## exponents

def exponent
  print "What is your base number? "
  base_num = gets().to_i()

  print "What is your exponent for the base number? "
  exponent_num = gets().to_i()

  result = base_num ** exponent_num
  puts "#{base_num} ** #{exponent_num} = #{result}"
end

########## square roots

def squareRoots
  print "What is the number for square roots? "
  first_num = gets().to_i()

  result = Math.sqrt(first_num)
  puts "The square root of #{first_num} = #{result}"
end

########## menu

  menu_choice = get_user_choice

until menu_choice == 'q'
  case menu_choice
  when '+'
    addition
  when '-'
    subtraction
  when '*'
    multiplication
  when '/'
    dividation
  when '**'
    exponent
  when 'r'
    squareRoots
  else
    puts "Invalid selection"
  end

  # puts "Thank you for selecting #{ menu_choice }"
  menu_choice = get_user_choice
end

puts "Thank you for using Amanda's Calculator. "








########################
