class URLValidator < ActiveModel::Validator
  def validate(record) 
    case record.class
    when User
      record_url = record.username

      unless /^[a-zA-Z0-9\-]$/ === record.username
        record.errors[:username] << "Invalid Username"
      end
    when Blog
      record_url = record.url

      unless /^[a-zA-Z0-9\-]$/ === record.url
        record.errors[:url] << "Invalid URL"
      end
    end

    if Blog.find_by(url: record_url.downcase)
      record.errors << "That URL is already being used"
    end
  end
end
