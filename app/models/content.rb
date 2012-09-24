class Content < ActiveRecord::Base
  attr_accessible :body, :commenter
  validates :commenter, :presence => true
  validates :body, :presence => true
end
