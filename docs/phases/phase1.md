# Phase 1: User Authentication, Basic Blogs and Posts

## Rails
### Models
* User
* Blog

### Controllers
* UsersController (create, new)
* SessionsController (create, new, destroy)
* BlogsController (create, new, show)
* API/BlogsController (create, show)

### Views
* users/new.html.erb
* session/new.html.erb
* blogs/show.html.erb
* blogs/show.json.jbuilder
* layouts/header.html.erb (partial)

## Backbone
### Models
* blog

### Collections

### Views
* blogs/show.js
* blogs/form.js

## Gems/Libraries
* BCrypt
