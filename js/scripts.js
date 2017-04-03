//U.I.

var formatSent = function(rawSent) {

  var finalString = rawSent.replace(/[\W+\d+]/g, "");
  return finalString;

};


//B.L.

$(document).ready(function() {
  $("#trns-form").submit(function(event) {
    event.preventDefault();
    var formSent = $("#userSent").val();
    var ciphRes = formatSent(formSent);

    $("#response").val(ciphRes);
  });

});// Doc Ready
