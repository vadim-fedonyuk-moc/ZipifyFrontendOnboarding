Rails.application.routes.draw do
  root to: 'home#index'

  mount GrapeSwaggerRails::Engine => '/apidoc'
  mount ShopifyApp::Engine, at: '/'
  mount OnboardApi::Main => '/'

  get '*v1', to: 'home#index'
end
