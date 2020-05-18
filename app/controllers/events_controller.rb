class EventsController < ApplicationController
  before_action :set_group
  before_action :set_event, only: [:show, :edit, :update, :destroy]

  def index
    @event = Event.new
    @events = @group.events.includes(:user).order(start_date: "DESC")
    @friend = current_user.followings & current_user.followers if !current_user.nil? 
    
  end
  def show
    @message = Message.new
    @messages = @event.messages.includes(:user)
  end
  
  def create
    @event = @group.events.new(event_params)
    if @event.save
      redirect_to group_events_path(@group), notice: 'メッセージが送信されました'
    else
      @events = @group.events.includes(:user)
      flash.now[:alert] = 'メッセージを入力してください。'
      render :index
      
      respond_to do |format|
        format.html
        format.json
      end
    end
  end

  def edit
  end
  
  def update
    @event.update(event_params)
    redirect_to group_event_path(@group,@event)
  end

  def destroy
    @event.destroy
    redirect_to group_events_path(@group)

  end
  
  private

  def event_params
    params.require(:event).permit(:title, :content, :start_date, :end_date, :group_id).merge(user_id: current_user.id)
  end

  def set_group
    @group = Group.find(params[:group_id])
  end

  def set_event
    @event = Event.find(params[:id])
  end

end
