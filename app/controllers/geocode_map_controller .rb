class ConfirmRouteController < ApplicationController
  require "uri"
  
  def get_lat_long
    location = URI.encode(params[:location])
    response = RestClient::Request.execute(
      method: :get,
      "https://maps.googleapis.com/maps/api/geocode/json?address=#{location}&key=#{ENV['GOOGLE_PLACES_KEY']}",
      )
    render json: response
  end
  
  def mapbox
    key = ENV['MAPBOX']
    render json: key
  end
end 