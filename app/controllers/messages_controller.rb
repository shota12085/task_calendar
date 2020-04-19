class MessagesController < ApplicationController
  before_action :set_group
  before_action :set_event
  def index
    @message = Message.new
    @messages = @group.messages.includes(:user)
  end
  
  def create
    @message = Message.create(message_params)
    respond_to do |format|
      # format.html{ redirect_to group_event_path(@group,@event),notice: "メッセージを送信しました"}
      format.json
    end
  end

  private

  def message_params
    params.require(:message).permit(:content, :image).merge(user_id: current_user.id, event_id: params[:event_id], group_id: params[:group_id])
  end

  def set_group
    @group = Group.find(params[:group_id])
  end

  def set_event
    @event = Event.find(params[:event_id])
  end
  
end
