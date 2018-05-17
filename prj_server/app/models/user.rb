class User < ApplicationRecord
  # mount_uploader :image, ImageUploader


  has_secure_password

  validates :email, presence: true
  validates_format_of :email, :with => /@/, message: "Please enter a valid email address"
  validates :password, confirmation: true



  def self.from_token_payload payload
    payload['sub']
  end

  def to_token_payload
    {
      sub: id,
      email: email
    }
  end
  geocoded_by :location
  after_validation :geocode

end
