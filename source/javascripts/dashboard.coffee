$(document).ready ->

  $('.score-overlay').each ->
    $(@).animate {width: $(@).attr('data-score') + '%' }, 1000