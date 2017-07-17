jQuery(document).ready(function($) {

  var phraseSwap = function() {
    var phrases = ['waiting for the last Kingkiller Chronicle.', 'looking at food pics while hungry.', 'waiting for Mount and Blade 2.', 'reading spoilers on Wikipedia.'],
        counter = phrases.length - 1,
        lastArrIndex = phrases.length - 1,
        $el = $('.phrases');

      if (counter === lastArrIndex) {
        counter = 0;
      } else {
        counter++;
      }
      $el.html(phrases[counter]);
  };

  phraseSwap();

  setInterval(function() {
    phraseSwap();
  }, 5500);

});
