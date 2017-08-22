require 'pry'


class Robot

  # attr_accessor :age

  def initialize
    @instruction_count = 0
    @name = make_name
    @creation_date = Time.now
    @boot_date = Time.now
  end


  def make_name
    letter_pool = ("A".."Z").to_a.sample(2)
    number_pool = (0..9).to_a.sample(3)
    name = (letter_pool + number_pool).join
  end

  def name
    @instruction_count += 1
    puts "Beep boop ... my name is #{@name}"
  end

  def timers
    @instruction_count += 1
    p "Unit has been active for  #{Time.now - @creation_date} seconds. #{Time.now - @boot_date} since last reboot"
  end

  def reset
    @instruction_count += 1
    @boot_date = Time.now
    @name = make_name
  end
end

rob = Robot.new
binding.pry
