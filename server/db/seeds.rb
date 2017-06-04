user = User.create(username: "nick", email: "nick@gmail.com", password: "123")
dog1 = user.dogs.build(name: "Rocko")
dog2 = user.dogs.build(name: "Sasha")
dog1.save
dog2.save

15.times do
  activity1 = user.activities.build(name: "walk", duration: rand(5..25))
  activity1.dogs << dog1
  activity1.dogs << dog2
  activity1.save
end
