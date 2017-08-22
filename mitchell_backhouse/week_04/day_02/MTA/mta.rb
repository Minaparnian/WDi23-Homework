require 'pry'
require 'colorize'
require 'io/console'

class Line
    attr_reader :name, :stations, :change_point_index

    def initialize name, stations, change_point
        @name = name
        @stations = stations
        @change_point_index = @stations.index(change_point)
    end
end

class Travel
    # manip methods for travel
    line_N = Line.new 'line N', ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'], 'Union Square'
    line_L = Line.new 'line L', ['8th', '6th', 'Union Square', '3rd', '1st'], 'Union Square'
    line_6 = Line.new 'line 6', ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'], 'Union Square'

    @@lines = [line_N, line_L, line_6]

    # init counter for trip
    @@trip_counter = 0

    def self.plan_trip sl, ss, el, es # 1, 2, 2, 5

        start_line = @@lines[sl - 1]
        end_line = @@lines[el - 1]
        # same line
        start_index = ss - 1
        end_index = es - 1

        if start_line == end_line
            if start_index < end_index
                stations = start_line.stations[start_index..end_index]
                if stations.nil?
                    puts " You have not selected a valid trip".red
                else
                    @@trip_counter = stations.size
                    print " You must travel through the following stops on "
                    puts " #{start_line.name}".red.on_yellow
                    puts " #{stations.join(', ').green}.\n"
                    puts Render.stops @@trip_counter
                end
            else
                if stations.nil?
                    puts " You have not selected a valid trip".red
                else
                    print " You must travel through the following stops on "
                    puts " #{start_line.name}".red.on_yellow
                    puts " #{stations.join(', ').green}.\n"
                    puts Render.stops @@trip_counter
                end
            end
        else
            # start line journey to exchange point
            if start_index < start_line.change_point_index
                start_leg = start_line.stations[start_index..start_line.change_point_index]
                end_leg = build_end_leg end_line, end_index

                @@trip_counter =  (start_leg + end_leg).size
                # return trip
                puts " You must travel through the following stops on #{start_line.name}\n#{start_leg.join(', ').green}.\n\n"
                puts " Change at Union Square.\n".cyan
                # check if journey terminates at union square
                end_leg.empty? ? puts(" There are no further stops") : puts(" You must then travel through the following stops #{end_leg.join(', ').red}.")
                puts Render.stops @@trip_counter
            else
                start_leg = start_line.stations[start_line.change_point_index..start_index].reverse
                end_leg = build_end_leg end_line, end_index

                @@trip_counter =  (start_leg + end_leg).size
                # return trip
                puts " You must travel through the following stops on #{start_line.name}\n#{start_leg.join(', ').green}.\n\n"
                puts " Change at Union Square.\n".cyan
                # check if journey terminates at union square
                end_leg.empty? ? puts(" There are no further stops") : puts(" You must then travel through the following stops #{end_leg.join(', ').red}.")
                puts Render.stops @@trip_counter
            end
        end
        # line_N.stations[line_N.stations.index('Times Square')..line_N.stations.index('Union Square')]
    end

    def self.trip_counter
        @@trip_counter
    end

    private

    def self.build_end_leg end_line, end_index
        if end_index < end_line.change_point_index
            end_leg = end_line.stations[end_index..(end_line.change_point_index - 1)].reverse
        else
            end_leg = end_line.stations[(end_line.change_point_index + 1)..end_index]
        end
    end
end

class Render
    @@start_line_number = 0
    @@start_station_number = 0
    @@end_line_number = 0
    @@end_station_number = 0

    def self.render_menu
        system 'clear'
        puts  "                            WELCOME TO WDI 23 - MTA                          "
        puts  "┌───────────────────────────────────────────────────────────────────────────┐".white
        print "│".white
        print  "                                   Lines                                   ".black.on_light_white
        puts  "│".white
        puts  "├───┬───────────────────┬───┬──────────────────────┬───┬────────────────────┤".white
        # puts  "│ 1 │     Line N        │ 2 │       Line L         │ 3 │     Line 6         │".white
        print "│ 1 │"
        @@start_line_number == 1 ? print(set_color "green") : print(" ")
        print       "    Line N       "
        @@end_line_number == 1 ? print(set_color"red") : print(" ")
        print "│ 2 │"
        @@start_line_number == 2 ? print(set_color "green") : print(" ")
        print    "      Line L        "
        @@end_line_number == 2 ? print(set_color"red") : print(" ")
        print "│ 3 │"
        @@start_line_number == 3 ? print(set_color "green") : print(" ")
        print  "    Line 6        "
        @@end_line_number == 3 ? print(set_color"red") : print(" ")
        puts "│".white
        puts  "├───┴───────────────────┴───┴──────────────────────┴───┴────────────────────┤".white
        print  "│".white
        print "                                  Stations                                 ".black.on_light_white
        puts  "│".white
        puts  "├───┬───────────────────┬───┬──────────────────────┬───┬────────────────────┤".white
        print "│ 1 │"
        @@start_station_number == 1 && @@start_line_number == 1 ? print(set_color "green") : print(" ")
        print " Times Square    "
        @@end_station_number == 1 && @@end_line_number == 1 ? print(set_color "red") : print(" ")
        print "│ 1 │"
        @@start_station_number == 1 && @@start_line_number == 2 ? print(set_color "green") : print(" ")
        print "       8th          "
        @@end_station_number == 1 && @@end_line_number == 2 ? print(set_color "red") : print(" ")
        print "│ 1 │"
        @@start_station_number == 1 && @@start_line_number == 3 ? print(set_color "green") : print(" ")
        print "Grand Central     "
        @@end_station_number == 1 && @@end_line_number == 3 ? print(set_color "red") : print(" ")
        print "│\n".white
        print "│ 2 │"
        @@start_station_number == 2 && @@start_line_number == 1 ? print(set_color "green") : print(" ")
        print "     34th        "
        @@end_station_number == 2 && @@end_line_number == 1 ? print(set_color "red") : print(" ")
        print "│ 2 │"
        @@start_station_number == 2 && @@start_line_number == 2 ? print(set_color "green") : print(" ")
        print "       6th          "
        @@end_station_number == 2 && @@end_line_number == 2 ? print(set_color "red") : print(" ")
        print "│ 2 │"
        @@start_station_number == 2 && @@start_line_number == 3 ? print(set_color "green") : print(" ")
        print "     33rd         "
        @@end_station_number == 2 && @@end_line_number == 3 ? print(set_color "red") : print(" ")
        print "│\n".white
        print "│ 3 │"
        @@start_station_number == 3 && @@start_line_number == 1 ? print(set_color "green") : print(" ")
        print "     28th        "
        @@end_station_number == 3 && @@end_line_number == 1 ? print(set_color "red") : print(" ")
        print "│ 3 │"
        @@start_station_number == 3 && @@start_line_number == 2 ? print(set_color "green") : print(" ")
        print "  Union Square      "
        @@end_station_number == 3 && @@end_line_number == 2 ? print(set_color "red") : print(" ")
        print "│ 3 │"
        @@start_station_number == 3 && @@start_line_number == 3 ? print(set_color "green") : print(" ")
        print"     28th         "
        @@end_station_number == 3 && @@end_line_number == 3 ? print(set_color "red") : print(" ")
        print"│\n".white
        print "│ 4 │"
        @@start_station_number == 4 && @@start_line_number == 1 ? print(set_color "green") : print(" ")
        print "     23rd        "
        @@end_station_number == 4 && @@end_line_number == 1 ? print(set_color "red") : print(" ")
        print "│ 4 │"
        @@start_station_number == 4 && @@start_line_number == 2 ? print(set_color "green") : print(" ")
        print"       3rd          "
        @@end_station_number == 4 && @@end_line_number == 2 ? print(set_color "red") : print(" ")
        print "│ 4 │"
        @@start_station_number == 4 && @@start_line_number == 3 ? print(set_color "green") : print(" ")
        print "     23rd         "
        @@end_station_number == 4 && @@end_line_number == 3 ? print(set_color "red") : print(" ")
        print "│\n".white
        print "│ 5 │"
        @@start_station_number == 5 && @@start_line_number == 1 ? print(set_color "green") : print(" ")
        print " Union Square    "
        @@end_station_number == 5 && @@end_line_number == 1 ? print(set_color "red") : print(" ")
        print "│ 5 │"
        @@start_station_number == 5 && @@start_line_number == 2 ? print(set_color "green") : print(" ")
        print"       1st          "
        @@end_station_number == 5 && @@end_line_number == 2 ? print(set_color "red") : print(" ")
        print "│ 5 │"
        @@start_station_number == 5 && @@start_line_number == 3 ? print(set_color "green") : print(" ")
        print " Union Square     "
        @@end_station_number == 5 && @@end_line_number == 3 ? print(set_color "red") : print(" ")
        print "│\n".white
        print "│ 6 │"
        @@start_station_number == 6 && @@start_line_number == 1 ? print(set_color "green") : print(" ")
        print "     8th         "
        @@end_station_number == 6 && @@end_line_number == 1 ? print(set_color "red") : print(" ")
        print "│   │                      │ 6 │   Astor Place     "
        @@end_station_number == 6 && @@end_line_number == 3 ? print(set_color "red") : print(" ")
        print "│\n".white
        puts  "└───┴───────────────────┴───┴──────────────────────┴───┴────────────────────┘".white

        print " "
        print "S".black.on_green
        print " : Start Point ".white
        print "E".white.on_red
        print " : End point".white
        puts "                                CTRL-C To EXIT\n\n"
    end

    def self.stops val
        val == 2 ? "\n This trip will take you #{val - 1} stop" : "\nThis trip will take you #{val - 1} stops"
    end

    def self.set_color color
        if color == "green"
            return "S".black.on_green
        elsif color == "red"
            return "E".light_white.on_red
        end
    end

    def self.line_selection(journey)
        if journey == "start"
            print " Please enter your origin line number: "
            @@start_line_number = gets.to_i
            print " Please enter your origin station number: "
            @@start_station_number = gets.to_i

            # update menu
            render_menu
        elsif journey == "end"
            print " Please enter your destination line number: "
            @@end_line_number = gets.to_i
            print " Please enter your destination station number: "
            @@end_station_number = gets.to_i

            # update menu
            render_menu
            Travel.plan_trip @@start_line_number, @@start_station_number, @@end_line_number, @@end_station_number
            continue_trip
        end
    end

    def self.continue_trip
        print "\n\n press any key to continue"
        STDIN.getch
        system "clear"

        # reset class variables to clear menu
        @@start_line_number = 0
        @@start_station_number = 0
        @@end_line_number = 0
        @@end_station_number = 0
    end

end

# binding.pry

# `puts` shows output similar to this:
# "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# "Change at Union Square."
# "Your journey continues through the following stops: 23rd, 28th, 33rd."
# "7 stops in total."

# Travel.plan_trip line_N, 'Times Square', line_N, 'Union Square'
# Travel.plan_trip line_N, 'Times Square', line_6, 'Grand Central'

while true
    Render.render_menu
    start_line = Render.line_selection("start")
    end_line = Render.line_selection("end")
end
# Travel.plan_trip 1, 2, 2, 3
# Travel.plan_trip 1, 2, 3, 5
# Travel.plan_trip 3, 5, 1, 2
# Travel.plan_trip 3, 1, 1, 1

# binding.pry
