module OnboardApi
  module Entities
    class BaseEntity < Grape::Entity
      format_with :unix_timestamp do |date|
        date.to_time.to_i
      end
    end
  end
end