/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  const loadTweets = function() {
    $.ajax('/tweets', { method: 'GET' })
    .then(function (loadMoreTweets) {
      renderTweets(loadMoreTweets);
    });
  };
  loadTweets();
  
  $('#tweetText').on('input', function() {
    $('#error').slideUp(300);
  });

  $("form").submit(function(event) {
    event.preventDefault();
    // $('#error').css({
    //   display: "none"
    // });
    let tweetVal = event.target.tweetText.value;
    if (tweetVal.length === 0) {
      $('#error p').text("You are trying to tweet a blank message!");
      // $('#error').css({
      //   display: "flex"
      // });
      $('#error').slideDown(300, function() {
      });
      return;
    } else if (tweetVal.length > 140) {
      $('#error p').text("You are over the 140 character limit!");
      $('#error').slideDown(300, function() {
        // $('#error').css({
        //   display: "flex"
        // });
      });
      return;
    }
    const parameters = $("form").serialize();
    $.post('/tweets', parameters)
    .then(() => {
      $('#tweetText').val("");
      const counterEl = document.getElementById("counter");
      $(counterEl).val(140);
      $('#tweets').empty();
      loadTweets();
      // THERE HAS TO BE A BETTER WAY????
      // $.ajax('/tweets', { method: 'GET' })
      //   .then(function (parseTweets) {
      //     for (let users of parseTweets) {
      //       if (users.content.text === tweetVal) {
      //         $tweet = createTweetElement(users);
      //         $('#tweets-container').append($tweet);
      //       }
      //     }
      //   })
    });
  });
  
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  
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
        <span><i class="fas fa-flag"></i>&nbsp&nbsp<i class="fas fa-retweet"></i>&nbsp&nbsp<i class="fas fa-heart"></i></span>
      </footer>
    </article>`
  return post;
  }

  
  const renderTweets = function(tweets) {
    for (let user of tweets) {
      const $tweet = createTweetElement(user);
      $('#tweets').prepend($tweet);
    }
  }
});