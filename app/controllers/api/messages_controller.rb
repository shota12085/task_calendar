class Api::MessagesController < ApplicationController
  def index
    group = Group.find(params[:group_id])
    last_message_id = params[:id].to_i
    event = Event.find(params[:event_id])
    @messages = event.messages.includes(:user).where("id > ?", last_message_id)
  end
end