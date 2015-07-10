FactoryGirl.define do
	factory :link do
		title 'Test link title'
		# body	'This is a test link for RSpec'
		# url		'www.testlink.com'
		# upvotes 0
	end
end

FactoryGirl.define do
	factory :user do
		email "test@test.com"
		password "password"
		password_confirmation "password"
		created_at "2015-07-09 17:20:33 -0400"
	end
end