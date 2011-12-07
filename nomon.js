/*
  nomon.js
  Easily show/hide portions of text in long paragraphs.

  Requires: jQuery 1.6.x
*/

(function($){
  $.fn.nomon = function nomon(opts) {
    var parent = this,
        words = this.text().split(' ');
    words.splice(opts.words, 1, '<span style="display: none" data-action-receiver="toggleHiddenText">');
    words.push('</span>');
    words.push('<a href="#" data-action="toggleHiddenText">Read More</a>')

    this.html(words.join(' '));

    this.find('a[data-action="toggleHiddenText"]').one('click', function(e){
      e.preventDefault();
      parent.find('span[data-action-receiver="toggleHiddenText"]').show();
      $(this).hide();
    });
  }
})(jQuery);