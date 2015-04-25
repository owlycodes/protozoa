#= require dashboard

$(document).ready ->
  $('.carousel').carousel()
  $('#focus-this').focus()
  $('.click-for-report').on('click',
  ->(
    $('#report-question-1').toggle()
  ))
  
  
  
  $('#spinny').on('click', 
  ->(
    $(@).text('Signing up...')
    $(@).spin()))
  
  
  
