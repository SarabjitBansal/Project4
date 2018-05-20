json.extract! message, :id, :content, :user_id, :user_name, :created_at, :updated_at
json.url message_url(message, format: :json)
