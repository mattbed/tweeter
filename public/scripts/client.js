/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// temporary test code
const initialTweets = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1562116239227
}

$(document).ready(function() {
  const createTweetElement = function(input) {
  const time = timeago.format(input.created_at);
  const post = 
    `<article>
      <header>
        <p><img src="${input.user.avatars}" />${input.user.name}</p>
        <p class="bold opaque">${input.user.handle}</p>
      </header>
      <p class="tweetBody">${input.content.text}</p>
      <footer>
        <p>${time}</p>
        <span><i class="fas fa-flag"></i>&nbsp&nbsp<i class="fas fa-retweet"></i>&nbsp&nbsp<i class="fas fa-heart"></i></span>
      </footer>
    </article>`
  return post;
  // const counterEl = document.getElementById("counter");
  // $(counterEl).text(140 - characterCount);
  }

  const $tweet = createTweetElement(initialTweets);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});