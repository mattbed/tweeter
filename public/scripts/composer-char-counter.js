$(document).ready(function() {
  const textArea = document.getElementById("tweet-text");

  // textArea.addEventListener("input", () => {
  //   console.log($(this));
  //   console.log($( textArea ).val());
  // });
  $(textArea).on('input', function() {
    const characterCount = $(this).val().length;
    console.log("charcount: ", characterCount);
    const counterEl = document.getElementById("counter");
    $(counterEl).text(140 - characterCount);
    if ($(counterEl).val() < 0) {
      $(counter).addClass("red");
    } else {
      $(counter).removeClass("red");
    }
  });

});