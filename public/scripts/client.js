/*
* Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// IIFE wrapper
(function() {

  $(() => {
    
    loadTweets();
    
    // docks error message once input is registered again
    $('#tweetText').on('input', errorDock);
    
    // performs action upon submission of a new tweet
    $('form').submit(function(event) {
      event.preventDefault();
      // sort through and escape possible character length errors
      let tweetVal = event.target.tweetText.value.length;
      if (sortErrors(tweetVal)) {
        return;
      }
      const parameters = $('form').serialize();
      postTweet(parameters);
    });
    
  });
  
  
  // Get tweets from /tweets, calls them to function renderTweets
  const loadTweets = function() {
    $.ajax('/tweets', { method: 'GET' })
      .then(function(loadMoreTweets) {
        renderTweets(loadMoreTweets);
      });
  };
  
  // Takes in tweets as a parameter, parses through createTweetElement to add html and prepends to the page
  const renderTweets = function(tweets) {
    for (let user of tweets) {
      const $tweet = createTweetElement(user);
      $('#tweets').prepend($tweet);
    }
  };
  
  // Takes in a tweet as a parameter, pulls proper date using timeago, and parses both with html
  const createTweetElement = function(input) {
    const time = timeago.format(input.created_at);
    const post =
    `<article>
    <header>
    <p><img src="${input.user.avatars}" />${input.user.name}</p>
    <p class="bold opaque">${input.user.handle}</p>
    </header>
    <p class="tweetBody">${escape(input.content.text)}</p>
    <footer>
    <p>${time}</p>
    <span>
    <i class="fas fa-flag"></i>&nbsp&nbsp<i class="fas fa-retweet"></i>&nbsp&nbsp<i class="fas fa-heart"></i>
    </span>
    </footer>
    </article>`;
    return post;
  };
  
  // XSS prevention
  const escape = function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  
  // function to dock error message
  const errorDock = function() {
    const errorDiv = $('form').next();
    $(errorDiv).slideUp(300);
  };
  
  // function to check for and handle errors in character length (0 or >140)
  const sortErrors = (tweetVal) => {
    const errorDiv = $('form').next();
    if (tweetVal === 0) {
      $(errorDiv).find('p').text("You are trying to tweet a blank message!");
      $(errorDiv).slideDown(300);
      return true;
    } else if (tweetVal > 140) {
      $(errorDiv).find('p').text("You are over the 140 character limit!");
      $(errorDiv).slideDown(300);
      return true;
    }
  };

  // posts tweet to db, resets counter, empties tweets from html then reposts all including new tweet
  const postTweet = function(parameters) {
    $.post('/tweets', parameters)
      .then(() => {
        $('#tweetText').val("");
        $('output').val(140);
        $('#tweets').empty();
        loadTweets();
      });
  };
  
})();