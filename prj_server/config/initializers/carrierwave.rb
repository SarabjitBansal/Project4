# CarrierWave.configure do |config|
#   config.fog_provider = 'fog/aws'                        # required
#   config.fog_credentials = {
#     provider:              'AWS',                        # required
#     aws_access_key_id:     ENV["AWS_ACCESS_KEY_ID"],                        # required
#     aws_secret_access_key: ENV["AWS_SECRET_ACCESS_KEY"],                        # required                    # required
#     # region:                'eu-east-1',                  # optional, defaults to 'us-east-1'
#     region:                'ap-southeast-2',                  # optional, defaults to 'us-east-1'
#     # host:                  's3.example.com',             # optional, defaults to nil
#     # endpoint:              'https://s3.example.com:8080' # optional, defaults to nil
#   }
#
#   # For testing, upload files to local `tmp` folder.
#  if Rails.env.test? || Rails.env.cucumber?
#    config.storage = :file
#    config.enable_processing = false
#    config.root = "#{Rails.root}/tmp"
#  else
#    config.storage = :fog
#  end
#
#  config.cache_dir = "#{Rails.root}/tmp/uploads"                  # To let CarrierWave work on heroku
#
#  config.fog_directory    = ENV["FOG_DIRECTORY"]
#   #config.fog_public     = false                                                 # optional, defaults to true
#   #config.fog_attributes = { cache_control: "public, max-age=#{365.days.to_i}" } # optional, defaults to {}
# end
# puts "set up carrier wave"
