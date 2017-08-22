require 'pry'
require 'colorize'
require 'io/console'

def continue_story
  print "press any key to continue"
  STDIN.getch
  system "clear"
end

def get_user_input
  puts "----------------------------".green
  print "(+) - Addition             ".white
  puts "|".green
  print "(-) - Subtraction          ".white
  puts "|".green
  print "(/) - Division             ".white
  puts "|".green
  print "(*) - Multiplication       ".white
  puts "|".green
  print "(^) - Exponent             ".white
  puts "|".green
  print "(s) - Square Root          ".white
  puts "|".green
  print "(q) - Quit                 ".black.on_white
  puts "|".green
  puts "----------------------------".green

  print "Enter your selection:".light_white.on_red
  print " "

  # debug inside pry
  # binding.pry

  gets.downcase.chomp
end

def addition
  print "\nEnter your first number: "
  num1 = gets.to_f
  print "Enter your second number: "
  num2 = gets.to_f

  print "\nAddition: ".black.on_white
  print "#{num1}".blue.on_yellow
  print " + ".black.on_white
  puts "#{num2}".blue.on_yellow
  puts "----------------------------".green
  puts (num1 + num2)
  puts "----------------------------\n\n".green

  continue_story
end

def subtraction
  print "\nEnter your first number: "
  num1 = gets.to_f
  print "Enter your second number: "
  num2 = gets.to_f


  print "\nSubtraction: ".black.on_white
  print "#{num1}".blue.on_yellow
  print " - ".black.on_white
  puts "#{num2}".blue.on_yellow
  puts "----------------------------".green
  puts num1 - num2
  puts "----------------------------\n\n".green

  continue_story
end

def division
  print "\nEnter your first number: "
  num1 = gets.to_f
  print "Enter your second number: "
  num2 = gets.to_f

  print "\nDivision: ".black.on_white
  print "#{num1}".blue.on_yellow
  print " / ".black.on_white
  puts "#{num2}".blue.on_yellow
  puts "----------------------------".green
  puts num1 / num2
  puts "----------------------------\n\n".green

  continue_story
end

def multiplication
  print "\nEnter your first number: "
  num1 = gets.to_f
  print "Enter your second number: "
  num2 = gets.to_f

  print "\nMultiply: ".black.on_white
  print "#{num1}".blue.on_yellow
  print " * ".black.on_white
  puts "#{num2}".blue.on_yellow
  puts "----------------------------".green
  puts num1 * num2
  puts "----------------------------\n\n".green

  continue_story
end

def exponent
  print "\nEnter your base number: "
  num1 = gets.to_f
  print "Enter your exponent: "
  num2 = gets.to_f

  print "\nExponent: ".black.on_white
  print "#{num1}".blue.on_yellow
  print " to the power of ".black.on_white
  puts "#{num2}".blue.on_yellow
  puts "----------------------------".green
  puts num1 ** num2
  puts "----------------------------\n\n".green

  continue_story
end

def square_root
  print "\nEnter your number: "
  num1 = gets.to_f

  print "\nSquare Root: ".black.on_white
  puts"#{num1}".blue.on_yellow
  puts "----------------------------".green
  puts Math.sqrt(num1)
  puts "----------------------------\n\n".green

  continue_story
end

system "clear"
menu_choice = get_user_input

until menu_choice == "q"
  case menu_choice
  when "+"
    addition
  when "-"
    subtraction
  when "/"
    division
  when "*"
    multiplication
  when "^"
    exponent
  when "s"
    square_root
  else
    puts "Invalid Selection"
  end

  system "clear"
  menu_choice = get_user_input
end
