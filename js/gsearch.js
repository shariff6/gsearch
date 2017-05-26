var apiKey = require('./../.env').apiKey;
Search = function () {
}
Search.prototype.getUser = function() {
var users = $('#userName').val();
    $.get('https://api.github.com/users/' + users + '?access_token=' + apiKey).then(function(response){
        $('.name').text(response.login);
        $('.link').append(response.html_url);

        console.log(response)
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  };
Search.prototype.getRepos = function() {
  var users = $('#userName').val();
      $.get('https://api.github.com/users/' + users + '/repos?access_token=' + apiKey).then(function(response){
      console.log(response)
          console.log(response)
      }).fail(function(error){
        console.log(error.responseJSON.message);
      });
    };
exports.searchModule = Search;
