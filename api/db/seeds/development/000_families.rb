families_params = [
  {
    name: "PHC Boys",
    users: [
      {
        first_name: "Alton",
        last_name: "Zheng",
        email: "altonzheng@berkeley.edu",
        image_url: "https://avatars2.githubusercontent.com/u/1298214?v=3&s=460",
      },
      {
        first_name: "Byron",
        last_name: "Zhang",
        email: "byronzhang@berkeley.edu",
        image_url: "https://avatars1.githubusercontent.com/u/4009333?v=3&s=460",
      },
      {
        first_name: "Daniel",
        last_name: "Li",
        email: "danielli@berkeley.edu",
        image_url: "https://avatars0.githubusercontent.com/u/5432430?v=3&s=460",
      },
      {
        first_name: "Tony",
        last_name: "Wu",
        email: "tonywu@berkeley.edu",
        image_url: "https://scontent-sjc.xx.fbcdn.net/hphotos-xpa1/t31.0-8/10507102_10152460803547761_2396203646451225979_o.jpg",
      },
      {
        first_name: "Warren",
        last_name: "Sterling",
        email: "warrensterling@berkeley.edu",
        image_url: "https://avatars3.githubusercontent.com/u/8787796?v=3&s=460",
      },
    ],
  },
]

families_params.each do |family_params|
  users_params = family_params.delete(:users)

  new_family = Family.create(family_params)
  puts "Created family: #{new_family.name}"

  users_params.each do |user_params|
    new_user = User.create(user_params)
    new_user.update(family: new_family, password: "password")
    puts "Created user: #{new_user.first_name}"
  end

end
