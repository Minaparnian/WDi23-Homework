require 'pry'

class Luhn

  def initialize(number)
    @number = number
  end


  def valid
    checksum =  luhnify.inject(0, :+)

    if checksum % 10 === 0
      puts "#{@number} is a valid luhn nuber. Because the check sum is #{checksum}"
    else
      puts "#{@number} is not valid because the check sum is #{checksum}"
    end #if
  end #valid

private  # this means any method that appears below will only be able to be called from within the class. Not by the "user"

  def luhnify
    numbers = []
    # #work from right to left
    # @number = @number.to_s.reverse
    # # i really want this info as an array
    # @number = @number.split('')
    # # but i also want to double every second number but i need an aray of integer
    # @number =  @number.map(&:to_i)
    # # i want to double every second one
    # @number.each_with_index do |digit, index|
    #   if index % 2 == 0
    #     value
    #   end blah blah blah

    @number.to_s.reverse.split('').map(&:to_i).each_with_index do |digit, index|

      # if index.even?
      #   value = digit
      # else
      #   value = digit * 2
      # end
      # smae thing as below

      value = index.even? ? digit : digit * 2

      # if value > 10
      #   value = value -9
      # end
      # smae thing in one line
      value -= 9 if value > 9

      numbers << value
    end
    numbers.reverse
  end
end #class










l = Luhn.new(3554)
# l.valid?
# => false

l2 = Luhn.new(8763)
# l2.valid?
# => true
binding.pry
