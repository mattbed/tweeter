$(() => {

  // uses input in the textarea to trigger a measuring of the length of the input
  // and uses that value to update the counter. If < 0, applies class that changes font red.
  const textArea = document.getElementById('tweetText');
  $(textArea).on('input', function() {
    const characterCount = $(this).val().length;
    const counterEl = $('output');
    $(counterEl).text(140 - characterCount);
    if ($(counterEl).val() < 0) {
      $('output').addClass('red');
    } else {
      $('output').removeClass('red');
    }
  });

});