$(document).ready(function() {
  $('.score-overlay').each(function() {
    return $(this).animate({
      width: $(this).attr('data-score') + '%'
    }, 1000);
  });
  return $('.tippable').tooltip();
});
