$(document).ready(function() {
  //Function that builds Query
  function buildQueryURL() {
    var apiKEY = "AIzaSyANQaEV-keWdL2RFmDuN5UmYTpPOW87B8s";
    var clientID =
      "281357231509-td6e026ks8mnvh1lkslunelgpgfmfv7n.apps.googleusercontent.com";
  }

  //On Authorize Click, function builds query and makes AJAX call to api
  $("#authorize_button").click(function(event) {
    var query = buildQueryURL();

    $.ajax({
      url: query,
      method: "GET"
    }).then(function(response) {
      console.log(resonse);
    });
  });
});
