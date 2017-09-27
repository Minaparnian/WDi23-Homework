namespace :twitter do
  desc "Remove all Users and Tweets from the database"
  task :clear => :environment do
    User.destroy_all
    Tweet.destroy_all
    Rake::Task['twitter:stats'].invoke
  end

  task :stats => :environment do
    puts "Users: #{ User.count }, Tweets: #{ Tweet.count }"
  end

  desc "Populates the Tweet and User tables with Faker data"
  task :populate, [:user_count] => :environment do |t, args|
    FactoryGirl.create_list :user_with_tweets, args[:user_count].to_i
    Rake::Task['twitter:stats'].invoke
  end

  desc "Populates the Tweet table with real data from Twitter"
  task :search, [:query, :count] => :environment do |t, args|
    Rake::Task['twitter:stats'].invoke
    # puts "Searching Twitter for #{args[:count]} tweets mentioning #{args[:query]}"


    # (SOME OF) YOUR CODE GOES HERE
    # IGNORE USERS, JUST GET THE TWEET DATA
    # YOU DON'T NEED FAKER OR FACTORY GIRL FOR THIS

    @tweets = $twitter.search(args[:query]).take(args[:count].to_i).collect do |tweet|
        Tweet.create(content: tweet.text)
        end

  end
end
