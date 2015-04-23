events_params = [
  {
    name: "Coachella",
    description: "The annual Valley Music and Arts Festival.",
    date: Date.new(2015, 4, 10),
  },
]

events_params.each do |event_params|
  new_event = Event.create(event_params)
  puts "Created event: #{new_event.name}."
end
