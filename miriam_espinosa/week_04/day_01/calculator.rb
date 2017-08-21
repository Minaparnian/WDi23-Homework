
require "pry"

def get_user_choice
  #show the available operations
  puts "(+) - Addition"
  puts "(-) - Substraction"
  puts "(*) - Multiplication"
  puts "(/) - Division"
  puts "(√)- Square Root"
  puts "(%)- Modulus"
  puts "(**)- Exponent"
  #puts "(m) - Mortgage Calculator"
  puts "(q) - Quit"

  print "Enter selection:"
  gets.downcase.chomp #implicit return
  
end



def addition
  print "First number:"
  a = gets.chomp.to_i
  print "Second number:"
  b = gets.chomp.to_i
  "The addition of #{a}+ #{b} : #{a+b}"
end

def substraction
  print "First number:"
  a = gets.chomp.to_i
  print "Second number:"
  b = gets.chomp.to_i
  "The substraction of #{a} - #{b} : #{a-b}"
end

def multiplication
print "First number:"
a = gets.chomp.to_i
print "Second number:"
b = gets.chomp.to_i
"The multiplication of #{a} * #{b} : #{a*b}"
end

def division
  print "First number:"
  a = gets.chomp.to_i
  print "Second number:"
  b = gets.chomp.to_i
  "The division of #{a} / #{b} : #{a/b}"
end

def square_root
  print "Square root of:"
  a = gets.chomp.to_i
  "The square root of #{a} : #{Math.sqrt(a)}"
end

def modulus
  print "Dividend:"
  a = gets.chomp.to_i
  print "Divisor:"
  b = gets.chomp.to_i
  "#{a} mod #{b} : #{a%b}"
end

def exponent
  print "Base mumber:"
  a = gets.chomp.to_i
  print "Exponent number:"
  b = gets.chomp.to_i
  "#{a} to the power of #{b} : #{a**b}"
end

# def mortgage_calculator
#   print "Loan amount:"
#   loan = gets.chomp.to_i
#   print "For how many months:"
#   months = gets.chomp.to_i
#   print "What is the interest rate:"
#   interest = gets.chomp.to_f/100    #need more precision as it might have decimal points
# end



menu_choice = get_user_choice

until menu_choice === 'q'
  puts case menu_choice
  when '+'
    addition
  when '-'
    substraction
  when '*'
    multiplication
  when '/'
    division
  when '√'
    square_root
  when '%'
    modulus
  when '**'
    exponent
  else
    "invalid"
  end
  menu_choice = get_user_choice
end
