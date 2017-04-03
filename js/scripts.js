//B.L.
var sentObj = function(sentOne, sentTwo, stringLength, cols, rows) {
  this.origSent = sentOne;
  this.finalSent = sentTwo;
  this.sentLength = stringLength;
  this.numOfCol = cols;
  this.numOfRows = rows;
}

var formatSent = function(rawSent) {
  var finalString = rawSent.replace(/[\W+\d+]/g, "");
  return finalString;
};

var numOfChar = function(letters) {
  return letters.length;
}


//U.I.

$(document).ready(function() {
  $("#trns-form").submit(function(event) {
    event.preventDefault();

    var newsentObj = new sentObj();

    newsentObj.origSent = $("#userSent").val();

    newsentObj.finalSent = formatSent(newsentObj.origSent);

    newsentObj.sentLength = numOfChar(newsentObj.finalSent);



    $("#response").val(count);
  });

});// Doc Ready
