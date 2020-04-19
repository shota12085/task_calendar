class GroupsController < ApplicationController
  before_action :set_group, only: [:edit, :update, :destroy]

  def new
    @group = Group.new
    @group.users << current_user
    @friend = current_user.followings & current_user.followers if !current_user.nil? 
  end

  def create
    @group = Group.create(group_params)
    @group.save!
    redirect_to group_events_path(@group), notice: 'カレンダーを作成しました'
  end

  def edit
  end

  def update
    @group.update(group_params)
    redirect_to group_events_path(@group), notice: 'カレンダーを編集しました'
  end

  def destroy
    if @group.destroy
      redirect_to user_path(current_user), notice: 'カレンダーを削除しました'
    end
  end



  private
  def group_params
    params.require(:group).permit(:name, user_ids: [])
  end

  def set_group
    @group = Group.find(params[:id])
  end

end