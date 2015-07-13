# Tilblr

[Heroku link][heroku]

[heroku]: http://tilblr.herokuapp.com

## Minimum Viable Product
Tilblr is a clone of Tumblr built on Rails and Backbone. It is geared towards
users who are looking to publish content about their educational growth.

Without any blogs users can:
- [ ] Create accounts
- [ ] Log in
- [ ] Create blog posts
- [ ] View blogs and posts
- [ ] Subscribe to blogs
- [ ] View a feed of subscribed blogs
- [ ] Search for blogs

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase I: User Auth, Blog Creation (~1 day)
Implement a basic authentication framework with BCrypt. Upon account creation
a user will have a new untagged blog with the title "Untitled". Users will be 
able to create new blogs. Upon creation of a new blog, the user's active blog 
will be set to the created blog. 

[Details][phase-one]

### Phase II: Basic Blog and Post Functionality (~2 days)
Add API routes for blogs and posts to the rails server for responding to AJAX 
requests with JSON. Add Backbone model and collection for posts. Create backbone
show and form views for blog and post. By the end of Phase II users should be
able to navigate to a blog show page and create posts.

[Details][phase-two]

### Phase III: Advanced Posts (~2 days)
Allow users to write more robust posts with a markdown editor. Allow for file 
upload of figures (images) to be embedded in posts. I plan on using some 
combination of `marked` and `Markdown-js` for the markdown form and 
`filepicker.io` for image upload.

[Details][phase-three]

### Phase IV: Follows and Blog Dashboard (~1-2 days)
Add a follow button to all blogs except the user's active blog. This will be 
slightly different from tumblr's following system because blogs will follow
other blogs instead of users following blogs. The dashboard view will display
all posts from the blogs followed by the users active blog. Reuse the blog show
view from backbone to display the dashboard. Add a new route and blog controller
action.

[Details][phase-four]

### Phase V: Searching (~2 days) 
Add a search bar to the header partial and a route for search. Users will be
able to serach by tags and both blog ans post results will be given. Add a 
SearchView composite view, with a BlogList containing BlogItems and a PostList 
containing Post Items. 

[Details][phase-five]

### Bonus Features (TBD)
- [ ] "Like" button and counter for posts
- [ ] Pagination/infinite scroll
- [ ] Reblogging
- [ ] Custom blog urls
- [ ] Activity history (e.g. likes, reblogs, taggings)
- [ ] Multiple sessions/session management
- [ ] User avatars
- [ ] Typeahead search bar

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md

