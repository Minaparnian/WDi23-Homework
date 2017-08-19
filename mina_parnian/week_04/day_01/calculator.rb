# #Calculator
#
# ###Explanation
#
# You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.

# ###Specification:
#
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu
# ####Phase 1
#
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)







def get_user_choice
#show the available operations
  puts "(+) - Addition"
  puts "(-) - Subtraction"
  puts "(q) - Quit"

  print "Enter your selection: "
  gets.chomp #implicit return
end

def addition1
  puts "Enter your number1: "
  gets.chomp

end

def addition2
  puts "Enter your number2: "
  gets.chomp
end

def result
  puts "result: #{addition1.to_i + addition2.to_i}"
  get_user_choice
end

def subresult
  puts "result: #{addition1.to_i - addition2.to_i}"
  get_user_choice
end

menu_choice = get_user_choice


until menu_choice == 'q'
  case menu_choice
  when '+'
    result


  when '-'
    subresult

  else
    puts "Invalid selection"
  end

end
