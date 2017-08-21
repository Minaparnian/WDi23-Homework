require "pry"

values = {
  1 => %w{a e i o u l n r s t},
  2 => %w{d g},
  3 => %w{b c m p},
  4 => %w{f h v w y},
  5 => %w{k},
  8 => %w{j x},
  10 => %w{q z},
}

puts "What word would you like to check the scrabble score for since you are too dumb to add up yourself"

word = gets.chomp

score = 0

word.downcase.split('').each do | letter |
  values.each do | key, value |
    score += key if value.include?( letter )
  end
end

puts "The total score for the word #{word} is #{score} points. Great job!!"
