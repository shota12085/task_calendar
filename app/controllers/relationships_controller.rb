class RelationshipsController < ApplicationController
  def create
    user = User.find(params[:relationship][:follow_id])
    following = current_user.follow(user)
    if following.save
      flash[:notice] = 'ユーザーをフォローしました'
      redirect_to :back
    else
      flash.now[:alert] = 'ユーザーのフォローに失敗しました'
      redirect_to :back
    end
  end

  def destroy
    user = User.find(params[:relationship][:follow_id])
    following = current_user.unfollow(user)
    if following.destroy
      flash[:notice] = 'ユーザーのフォローを解除しました'
      redirect_to :back
    else
      flash.now[:alert] = 'ユーザーのフォロー解除に失敗しました'
      redirect_to :back
    end
  end
end
