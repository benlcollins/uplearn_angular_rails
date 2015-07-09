require 'spec_helper'
require 'rails_helper'

describe LinksController do
	before :each do
		@link = FactoryGirl.create(:link)
	end

	# tests for GET method and index action. Should return JSON array of links
	describe 'GET #index' do
		before :each do
			get :index, format: :json
		end

		it 'should respond successfully with an HTTP 200 message' do
			expect(response).to be_success
			expect(response).to have_http_status(200)
		end

		it 'should return a json array of links' do
			result = JSON.parse(response.body)
			expect(result[0]['title']).to eq('Test link title')
		end
	end

	# tests for GET method and show action. Should return JSON array of chosen link
	describe 'GET #show' do
		before :each do
			get :show, id: @link, format: :json
		end

		it 'should respond successfully with an HTTP 200 message' do
			expect(response).to be_success
			expect(response).to have_http_status(200)
		end

		it 'assigns the chosen contact to @link' do
			result = JSON.parse(response.body)
			expect(result['title']).to eq(@link.title)
		end
	end

	# tests for POST method and create action. Should add new link to the database
	describe 'POST #create' do

		# login in with a fictional user to be able to post
		before :each do
			@request.env["devise.mapping"] = Devise.mappings[:user]
			user = FactoryGirl.create(:user)
			sign_in user
		end

		# tests assuming valid link is created
		context 'valid attributes' do
			it 'saves the new link' do 
				expect {
					post :create, link: FactoryGirl.attributes_for(:link), format: :json
				}.to change(Link, :count).by(1)
			end

			it 'has the new link location after saving' do
				post :create, link: FactoryGirl.attributes_for(:link), format: :json
				expect(response.location).to eq("http://test.host/links/"+ Link.last.id.to_s)
			end
		end

		# tests assuming link with invalid attributes is created
		# There is a basic validation on the client side with angular to ensure non-blank links can be submitted
		# want to add validation with regex to ensure url is valid and then test here
		# although maybe this is better tested client side in Angular??

		# context 'invalid attributes' do
		# 	it 'does not save the invalid new link' do

		# 	end

		# end
	end

end
