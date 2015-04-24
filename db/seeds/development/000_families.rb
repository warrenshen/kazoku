families_params = [
  {
    name: "PHC Boys",
    users: [
      {
        first_name: "Warren",
        last_name: "Sterling",
        email: "warrensterling@berkeley.edu",
        image_url: "https://avatars3.githubusercontent.com/u/8787796?v=3&s=460",
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
