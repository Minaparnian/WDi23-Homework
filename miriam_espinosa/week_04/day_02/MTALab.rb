require 'colorize'
require "pry"
# Create a program that models a simple subway system.
#
# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
#
# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.
#
# # `puts` shows output similar to this:
# # "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# # "Change at Union Square."
# # "Your journey continues through the following stops: 23rd, 28th, 33rd."
# # "7 stops in total."
# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
# Hints:
#
# Work out how you would do it on paper first! Then start to explain that process in Ruby.
# Get the program to work for a single line before trying to tackle multiple lines.
# Don't worry about prompting the user for input. Hard code some values to get it working. You can use gets later to make it more interactive.
# Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# The key to the lab is finding the index positions of each stop. (hint: index)
# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

$subway = {
  "n" => ['n34th','n28th','n23rd','Union Square'],
  "six" => ['Grand Central','s33rd','s28th', 's23rd','Union Square', 'Astor Place'],
  "l" => ['l8th','l6th','Union Square','l3rd','l1st']
}

$my_trip = [];
$total_stops = 0;
$stops = [];

def single_trip (line, stop_in, stop_out)

  stop_in_position = $subway[line].index stop_in
  stop_out_position = $subway[line].index stop_out
  direction = stop_out_position - stop_in_position



  if direction > 0

    i = stop_in_position+1

    until i  >= stop_out_position+1
      $my_trip.push ($subway[line][i])

      i+= 1
    end
  else
    i = stop_in_position-1

    until i  <= stop_out_position-1
      $my_trip.push ($subway[line][i])

      i-= 1
    end

  end

end

def full_trip
  print "Which line are you getting on:"
   line_in = gets.chomp
  print "Which stop are you getting on:"
  stop_in = gets.chomp
  print "Which line are you getting off:"
  line_out = gets.chomp
  print "Which stop are you getting off:"
  stop_out = gets.chomp

  if line_in == line_out

    puts single_trip(line_in, stop_in, stop_out)

  else

    puts single_trip(line_in, stop_in, "Union Square")
    puts single_trip(line_out, "Union Square", stop_out)
  end

puts $my_trip
end


puts full_trip
