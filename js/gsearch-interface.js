var Search = require('./../js/gsearch.js').searchModule;
$(document).ready(function() {
  var nameSearch = new Search();
  $('#searchName').click(function() {
  var users = $('#userName').val();
  var x = nameSearch.getUser(users)
  $('.result').show()
})
})
