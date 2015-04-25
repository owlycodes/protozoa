$(function() {
  $("#slider").slider({
    value: 5,
    min: 5,
    max: 15,
    step: 1,
    slide: function(event, ui) {
      return $("#amount").val(ui.value);
    }
  });
  $("#amount").val($("#slider").slider("value"));
  $('.start-quiz').on('click', function() {
    $('.quiz-options').hide();
    $('.quiz-take').show();
    return false;
  });
  return $('.submit-quiz').on('click', function() {
    $('.congrats').show();
    return false;
  });
});
