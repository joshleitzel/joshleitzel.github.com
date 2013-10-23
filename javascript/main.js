Zepto(function($){
  $('.content').each(function(post){
    footnotes = $(this).find('.footnotes');

    if (footnotes.length > 0) {
      lastP = footnotes.prev('p');
    } else {
      lastP = $(this).children('p:last-child')
    }

    lastP.addClass('last');
  });
});
