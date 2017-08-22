# Warmup - Raindrops

# Write a program that will take a number (eg 28 or 1755 or 9, etc) and output the following:

# If the number contains 3 as a factor, output 'Pling'.
# If the number contains 5 as a factor, output 'Plang'.
# If the number contains 7 as a factor, output 'Plong'.
# If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
# Examples

# 28 has 7 as a factor.
# In raindrop-speak, this would be a simple "Plong".
# 1755 has 3 and 5 as factors.
# In raindrop-speak, this would be a "PlingPlang".
# 34 has neither 3, 5 nor 7 as a factor.
# Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".

def check_number(num)
    if num % 3 == 0
        if num % 5 == 0
            puts "#{num} PlingPlang"
        end
        puts "#{num} Pling"
    elsif num % 5 == 0
        puts "#{num} Plang"
    elsif num % 7 == 0
        puts "#{num} Plong"
    else
        puts "#{num} 34"
    end
end


# check_number(3)
# check_number(5)
# check_number(7)
# check_number(28)
# check_number(1755)
# check_number(9)
# check_number(8)

# with array

def check_number_array(num)
    arr = Array.new

    if num % 3 == 0
        if num % 5 == 0
            arr.push "PlingPlang"
        end
        arr.push "Pling"
    elsif num % 5 == 0
        arr.push "Plang"
    elsif num % 7 == 0
        arr.push "Plong"
    else
        arr.push "34"
    end

    return arr
end

# puts check_number_array(3)
# puts check_number_array(5)
# puts check_number_array(7)
# puts check_number_array(28)
# puts check_number_array(1755)
# puts check_number_array(9)
# puts check_number_array(8)


def check_number_short(num)
    str = ""
    str += 'Pling' if num % 3 == 0
    str += 'Plang' if num % 5 == 0
    str += 'Plong' if num % 7 == 0

    str = num.to_s if str.empty?

    str
end

puts check_number_short(3)
puts check_number_short(5)
puts check_number_short(7)
puts check_number_short(28)
puts check_number_short(1755)
puts check_number_short(9)
puts check_number_short(8)
puts check_number_short(34)