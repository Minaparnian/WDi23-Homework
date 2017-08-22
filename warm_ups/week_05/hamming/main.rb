require 'pry'
#out 2 strings to compare from the example
str1 = 'GAGCGTACTAACGGGAT'
str2 = 'CATCGTAATGACGGCCT'

def hamming_distance( first_string, second_string )
  #We need to split our 2 ars into arrays so we can loop through easier
  first_string = first_string.split('')
  second_string = second_string.split('')
  #initialize a variable to keep track of how many differences there are
  difference = 0


  #each_with_index gives us acces to the index so we can use it on the second array
  first_string.each_with_index do | letter, i |
    difference+= 1 if letter != second_string[i]
  end
  #implicit return allows us just to state the difference on here and it will return
  difference
end


# We need to call the method but wrap it in a puts so we can display the returning value
puts hamming_distance( str1, str2 )
puts hamming_distance( str1, str1 )




#We could also do this as a class. This would allow us to replicate easily

class HamCount
  def initialize(arg1, arg2)
    @first =  arg1.split('')
    @second =  arg2.split('')
  end

  def diff
    difference = 0
    @first.each_with_index do |letter, i|
      difference += 1 if letter != @second[i]
    end
    difference
  end

  def speak
    puts "the hamming distance is #{diff}"
  end
end



ham = HamCount.new( str1, str2 )

binding.pry
