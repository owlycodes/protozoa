$ ->
  $("#slider").slider
    value: 5
    min: 5
    max: 15
    step: 1
    slide: (event, ui) ->
      $("#amount").val  ui.value

  $("#amount").val  $("#slider").slider("value")
  
  $('.start-quiz').on('click',
  ->(
    $('.quiz-options').hide()
    $('.quiz-take').show()
    false
  
  ))
  
  
  
  $('.submit-quiz').on('click',
  ->(
    
    $('.congrats').show()
    false
  
  ))