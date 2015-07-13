# Phase II: Viewing Blogs and Posts

## Rails
### Models

### Controllers
Api::BlogsController (update, destroy)
Api::PostsController (create, show, update, destroy)

### Views
* blogs/show.json.jbuilder

## Backbone
### Models
* Blog (parses nested `posts` association)
* Post

### Collections
* Posts

### Views
* BlogForm (modify for update, destroy actions)
* BlogShow (implement composite view with subviews: BlogContent, BlogSidebar)
* BlogContent (composite view, contains PostShow subviews)
* BlogSidebar
* PostShow

## Gems/Libraries
