/*
  nomon.js
  Simple show more helper.

  Requires: jQuery 1.6.x
*/

(function($){
  $.fn.nomon = function nomon(opts) {
    var parent = this;
    var words = this.text().split(' ');
    opts = $.extend({
      words: 20,
      readMoreText: 'Read More',
      readMoreClass: 'nomon-link'
    }, opts);
        
    words.splice(opts.words, 1, '<span style="display: none" data-action-receiver="toggleHiddenText">');
    words.push('</span>');
    words.push('<a href="#" data-action="toggleHiddenText" class="' + opts.readMoreClass + '">' + opts.readMoreText + '</a>');

    this.html(words.join(' '));

    this.find('a[data-action="toggleHiddenText"]').one('click', function(e){
      e.preventDefault();
      parent.find('span[data-action-receiver="toggleHiddenText"]').show();
      $(this).hide();
    });
  };
})(jQuery);