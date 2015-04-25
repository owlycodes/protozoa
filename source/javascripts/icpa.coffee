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

  $('.editable').editable('http://example.com/save.php',{
    indicator : 'Saving...',
    tooltip   : 'Click to edit...',
  })

  $('.editable-ta').editable('http://www.example.com/save.php', {
    type: 'textarea'
  })
