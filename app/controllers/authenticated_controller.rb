# frozen_string_literal: true

class AuthenticatedController < ApplicationController
  include ShopifyApp::Authenticated

  protect_from_forgery unless: -> { request.format.json? }
end
