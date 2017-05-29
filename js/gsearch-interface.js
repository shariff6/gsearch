var Search = require('./../js/gsearch.js').searchModule;
$(document).ready(function() {
  var nameSearch = new Search();
  $('#searchName').click(function() {
    this.disabled=true
    var users = $('#userName').val();
    var x = nameSearch.getUser(users)
    $('.result').show()

  })
})
