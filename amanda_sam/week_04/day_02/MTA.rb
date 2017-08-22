# MTA Lab in Ruby

# - Create a program that models a simple subway system.
# - The program takes the line and stop that a user is getting on at and the line and stop
#   that user is getting off at and prints the journey and the total number of stops for the trip in the console:

#   plan_trip 'N', 'Times Square', '6', '33rd' (This is only a suggested function name and signature.)
  ## `puts` shows output similar to this:
  ### "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
  ### "Change at Union Square."
  ### "Your journey continues through the following stops: 23rd, 28th, 33rd."
  ### "7 stops in total."

  # There are 3 subway lines:
  # - The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
  # - The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
  # - The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

  ## All 3 subway lines intersect at Union Square, but there are no other intersection points.
  # (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line,
  # so you'll have to differentiate this when you name your stops in the arrays.)
##########################################################################

require 'pry'

##############
# THINKING STAGE:
# plan_trip
#   N (line1): From 34th, 28th, 23rd, to UnionSquare
#             subway["N"][1] to subway["N"][4]
#
#   6 (line2): From UnionSquare, 23rd, 28th, to 33rd
#             subway["6"][4] to subway["6"][1]

  # subway = {
  #
  # "N" => %w{ TimesSquare 34th 28th 23rd UnionSquare 8th },
  #
  # "L" => %w{ 8th 6th UnionSquare 3rd 1st },
  #
  # "6" => %w{ GrandCentral 33rd 28th 23rd UnionSquare AstorPlace }
  #
  # }

##############


def plan_trip (line1, stop1, line2, stop2)

  subway = {
    "N" =>["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],

    "L" =>["8th", "6th", "Union Square", "3rd", "1st"],

    "6" =>["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }

  ## (to check if hash is working)
  # p subway
  # p subway["N"]

  stop_list=[]
  stop_list2=[]
  stop1_index = subway[line1].index stop1
  stop2_index = subway[line2].index stop2

  # when line1 same as line2
  if line1 == line2
    if stop1_index < stop2_index
      stop_list = subway[line1][stop1_index..stop2_index]
      stop_list.shift

    elsif stop1_index > stop2_index
      stop_list = subway[line1][stop2_index..stop1_index].reverse
      stop_list.shift

    else
      puts "You have arrived."
    end
  end

  # when line1 different to line2
  if line1 != line2
    unionsquare_index1 = subway[line1].index 'Union Square'
    unionsquare_index2 = subway[line2].index 'Union Square'

    if stop1_index < unionsquare_index1
      stop_list = subway[line1][stop1_index..unionsquare_index1]
    else
      stop_list = subway[line1][unionsquare_index1..stop1_index].reverse
    end

    if stop2_index > unionsquare_index2
      stop_list2 = subway[line2][unionsquare_index2..stop2_index]
    else
      stop_list2 = subway[line2][stop2_index..unionsquare_index2].reverse
    end

    stop_list.shift
    stop_list2.shift
  end


  # number of stops
  number_of_stops = stop_list.length + stop_list2.length


  # show the messages
  if line1 == line2 && stop1 != stop2
    puts "You must travel through the following stops on the #{line1} line: "
    puts stop_list
  elsif line1 != line2
    puts stop_list
    puts "Please change at Union Square. Your journey continues through the following stops on the #{line2} line: "
    puts stop_list2
  end

  puts "You have #{number_of_stops} stops in total. "
  puts "." * 50 # make a line in between messages

end


plan_trip 'N', 'Times Square', 'N','Union Square'

plan_trip '6','Union Square', '6', '33rd'

# binding.pry
########################################################################
