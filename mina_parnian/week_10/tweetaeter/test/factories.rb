FactoryGirl.define do
  factory :user do |f|
    f.sequence(:email) { Faker::Internet.email }  #sequence means give diffrenet tweets(dynamic data)

    factory :user_with_tweets do
      after(:create) do |u|
        FactoryGirl.create_list(:tweet, Random.rand(10..200), :user => u)
      end
    end
  end

  factory :tweet do |f|
    f.sequence(:content) { Faker::Lorem.sentence }
  end
end
