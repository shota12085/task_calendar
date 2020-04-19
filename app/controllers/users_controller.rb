class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]

  def index
    @users = User.search(params[:keyword], current_user.id)
    respond_to do |format|
      format.html
      format.json
    end
  end

  def show
    # @group = Group.find(params[:id])
    @events = @user.events.order(start_date: "DESC")
    @users = User.where.not(id: current_user.id)
    @friend = @user.followings & @user.followers if !current_user.nil? 
    @follow = @user.followings if !current_user.nil?
    @follower = @user.followers if !current_user.nil?
    @userEvent = @user.groups.flat_map(&:events).group_by{|event| event.group.name}
    
  end

  def edit
  end

  def update
    @user.update(user_params)
    redirect_to user_path(@user)
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:name, :content, :image, :imageicon, :email)
  end
end
