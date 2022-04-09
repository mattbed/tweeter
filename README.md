# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

Build a simplified single-page Twitter clone using HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express back-end skills. This is a front-end (client-side) project. Although we are required to review and understand the project's back-end (server-side) code, we are not required to make edits to it.

## Scope

This is a client-side Single Page APP (SPA) that communicates with a server via AJAX.
Display requirements include:
- Fixed navigation bar
- Compose tweet box with:
  - A text input
  - A submit button
  - Dynamic character counter
- List of tweets with:
  - An avatar + name + handle
  - A tweet
  - How long ago the tweet was posted
  - Interactive flag/retweet/heart icons
Functionality includes:
- Dynamic character counter that turns red below 0 characters
- Animated error messages upon submission of 0 character or >140 character tweets
- Instantly updated tweet upon submission, sorted by newest
- Animated tweet boxes and flag/retweet/heart icons
- Responsive design - with a notable breakpoint for desktop monitors (1024px)

## Screenshots

### Desktop view
Main view formatted for 1024px and greater resolution, with a tweet typed and ready to be submit
!["Desktop (1024px and greater) formatted view of Tweeter."](https://github.com/mattbed/tweeter/blob/master/docs/Tweeter01.png?raw=true)

### Alternate view
Responsive designed view for screens less than 1024px resolution, with mouseover a heart icon shown
!["Responsive design for smaller screens (less than 1024px), with mouse over a heart icon on a tweet"](https://github.com/mattbed/tweeter/blob/master/docs/Tweeter03.png?raw=true)

### Error message
Shown when submitting a tweet over 140 characters long
!["Error message when submitting a tweet over 140 characters long."](https://github.com/mattbed/tweeter/blob/master/docs/Tweeter02.png?raw=true)



## Dependencies

- Express
- Body-Parser
- Chance
- Node 5.10.x or above
