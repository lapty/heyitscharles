jQuery(document).ready(function($) {

    var phrases = ['waiting for the last Kingkiller Chronicle.', 'looking at food pics while hungry.', 'waiting for Mount and Blade 2.', 'reading spoilers on Wikipedia.'],
        counter = 0,
        $phrasesEl = $('.phrases');

    var phraseSwap = function() {
        counter = (counter + 1) % phrases.length;
        $phrasesEl.html(phrases[counter]);
    };

    phraseSwap();

    setInterval(phraseSwap, 5500);
});
