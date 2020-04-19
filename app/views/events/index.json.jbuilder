json.array!(@events) do |event|
  json.id event.id 
  json.title event.title
  json.description event.content   
  json.start event.start_date   
  json.end event.end_date
  json.group event.group_id
  json.url group_event_url(event.group_id,event, format: :html) 

  if event.start_date > Time.now
    json.color "#FF9872"
  else
    json.color ""
  end
end