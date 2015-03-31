require 'rails_helper'

describe ItinerariesController do
  let(:user){User.create(username: 'testuser', password: '12345', email: 'test@example.com')}

  describe 'ItinerariesController#create' do

    it "responds to the request and redirects to the user account page" do

    end

  end

end
