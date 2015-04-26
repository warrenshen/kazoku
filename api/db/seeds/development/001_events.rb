events_params = [
  {
    name: "Coachella",
    description: "The annual Valley Music and Arts Festival.",
    image_url: "http://cdn2.hellogiggles.com/wp-content/uploads/2015/04/09/Bassnectar_Live_at_Coachella_Wknd_2.jpg",
    date: Date.new(2015, 4, 10),
  },
]

events_params.each do |event_params|
  new_event = Event.create(event_params)
  puts "Created event: #{new_event.name}."
end
