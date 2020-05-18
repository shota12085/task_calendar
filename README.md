# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
# Task Calendar
- 内容
  - 家族、仕事仲間、友人で予定の共有ができ、それぞれの予定ごとにチャット機能を持った複合的機能をもつアプリケーションです。

- 企画背景
  - 前職において、業務の中での予定共有や案件に紐づくメール検索に時間を費やすとの声が多くあったことから、グループでのカレンダーを用いた予定共有やその予定ごとにチャット機能を持たせることで、どのイベントや案件での内容かを明確化させるアプリになります。個人のマイページを持たせることで、アプリに登録しているユーザーへの友達申請や承認、友達になれば、グループカレンダーに参加ができるような仕組みにすることで、家族や友人においても大切な予定を共有できるのではないかという思いで作成しました。

## テストアカウント
- name : テストID
- email：test@gmail.com
- assword：test10

## Usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|content|string|
|image|string|
|imageicon|string|
|email|string|null: false, unique: true|
|password|password|null: false|

### Association
- has_many :group_users
- has_many :groups, through: :group_users,foreign_key: :user_id, dependent: :destroy
- has_many :events,foreign_key: :user_id, dependent: :destroy
- has_many :messages
- has_many :relationships
- has_many :followings, through: :relationships, source: :follow
- has_many :reverse_of_relationships, class_name: 'Relationship', foreign_key: 'follow_id'
- has_many :followers, through: :reverse_of_relationships, source: :user

## Groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|

### Association
- has_many :group_users
- has_many :users, through: :group_users,foreign_key: :group_id, dependent: :destroy
- has_many :events,foreign_key: :group_id, dependent: :destroy
- has_many :messages,foreign_key: :group_id, dependent: :destroy

## Eventsテーブル
|Column|Type|Options|
|------|----|-------|
|title|string|null: false|
|content|string|
|start_date|datetime|null: false|
|end_date|datetime|null: false|
|group_id|reference|null: false, foreign_key true|
|user_id|reference|null: false, foreign_key: true|

### Association
- belongs_to :group, optional: true
- belongs_to :user
- has_many :messages,foreign_key: :event_id, dependent: :destroy

## Group_usersテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|reference|null: false, foreign_key true|
|user_id|reference|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## Messagesテーブル
|Column|Type|Options|
|------|----|-------|
|content|text|null: false|
|image|string|
|group_id|reference|null: false, foreign_key true|
|event_id|reference|null: false, foreign_key: true|
|user_id|reference|null: false, foreign_key: true|

### Association
- belongs_to :event
- belongs_to :group
- belongs_to :user

## Relationshipsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|reference|null: false, foreign_key: true|
|follow_id|reference|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :follow, class_name: 'User'
