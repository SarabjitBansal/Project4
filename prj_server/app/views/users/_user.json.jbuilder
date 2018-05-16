json.extract! user, :id, :email, :image, :created_at, :updated_at, :password_digest, :name, :description,:keyskills,:location,:latitude,:longitude,:resumeu,:githubu,:linkedinu,:insta,:twitteru
json.url user_url(user, format: :json)
