class MessagesChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'MessagesChannel'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def create(data)
    user = User.find(data['user_id'])
    user.messages.create(
      user_name: data['user_name'],
      content: data['content'],
      user_id: data['user_id'],
    )
  end
end
