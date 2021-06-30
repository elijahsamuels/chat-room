class ActivityChannel < ApplicationCable::Channel
  def subscribed
    stream_from "activity_channel"

  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def appear
    ActionCable.server.broadcast "activity_channel", message: "Yay! #{current_user.username} has joined!"
  end

end
