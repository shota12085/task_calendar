require 'rails_helper'

describe User do
  describe "#create" do
    it "すべての条件が成立すればユーザー保存できる" do
      user = build(:user)
      user.valid?
      expect(user).to be_valid
    end

    it "nameがないと保存できない" do
      user = build(:user, name: nil)
      user.valid?
      expect(user.errors[:name]).to include("を入力してください")
    end
    
    it "Eメールがないと保存できない" do
      user = build(:user, email: nil)
      user.valid?
      expect(user.errors[:email]).to include("を入力してください")
    end
    
    it "passwordがないと保存できない" do
      user = build(:user, password: nil)
      user.valid?
      expect(user.errors[:password]).to include("を入力してください")
    end
    
    it "passwordはあるがpassword_confirmationがないと保存できない" do
      user = build(:user, password_confirmation: "")
      user.valid?
      expect(user.errors[:password_confirmation]).to include("とパスワードの入力が一致しません")
    end
    it "nameが21文字以上なら保存できない" do
      user = build(:user, name: "aaaaaaaaaaaaaaaaaaaaa")
      user.valid?
      expect(user.errors[:name]).to include("は20文字以内で入力してください")
    end

    it "nameが20文字以内なら保存できる" do
      user = build(:user, name: "aaaaaaaaaaaaaaaaaaaa")
      user.valid?
      expect(user).to be_valid
    end

    it "Eメールが重複していると保存できない" do
      user = create(:user)
      another_user = build(:user, email: user.email)
      another_user.valid?
      expect(another_user.errors[:email]).to include("はすでに存在します")
    end

    it "passwordが6文字以上なら保存できる" do
      user = build(:user, password: "000000",password_confirmation: "000000")
      user.valid?
      expect(user).to be_valid
    end
    
    it "passwordが5文字以内なら保存できない" do
      user = build(:user, password: "00000", password_confirmation: "00000")
      user.valid?
      expect(user.errors[:password]).to include("は6文字以上で入力してください")
    end

  end
end