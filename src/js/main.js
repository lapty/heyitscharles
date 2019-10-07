jQuery(document).ready(function($) {

    var phrases = [
        'waiting for the last Kingkiller Chronicle.', 
        'looking at food pics while hungry.', 
        'waiting for Mount and Blade 2.', 
        'reading spoilers on Wikipedia.',
        'watching Bon Appétit videos',
        'not finishing any books I start'

    ],
        $phrasesEl = $('.phrases.anim');

    function phraseSwap(phrases, $phrase) {
      $phrasesEl.remove();
      $phrasesEl.appendTo('#close-p');
      $phrasesEl.html(phrases[phrases.indexOf($phrase.html()) + 1 === phrases.length ? 0 : phrases.indexOf($phrase.html()) + 1]);
        return phraseSwap;
    }

    setInterval(phraseSwap(phrases, $phrasesEl), 5500, phrases, $phrasesEl);
});
