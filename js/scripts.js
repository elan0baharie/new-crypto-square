//B.L.
var sentObj = function(sentOne, sentTwo, stringLength, rawSide, cols, rows) {
  this.origSent = sentOne;
  this.finalSent = sentTwo;
  this.sentLength = stringLength;
  this.side = rawSide;
  this.numOfCol = cols;
  this.numOfRow = rows;
}

var formatSent = function(rawSent) {
  var finalString = rawSent.replace(/[\W+\d+]/g, "");
  return finalString;
};

var numOfChar = function(letters) {
  return letters.length;
}

var sqRt = function(extent) {
  return Math.sqrt(extent);
}

var colQuant = function(sideOfSquare) {
  return Math.round(sideOfSquare);
}

var rowQuant = function(sideOfSquare) {
  return Math.ceil(sideOfSquare);
}

var filter = function(columns, rows, txt) {
  for(var i = 0; i <= columns ; i++ ) {
    var cipher= [];
    var snglChar = txt.slice(i, (i + 1));
    cipher.push(snglChar);
    return cipher[0];
  };
}

//U.I.

$(document).ready(function() {
  $("#trns-form").submit(function(event) {
    event.preventDefault();

    var newsentObj = new sentObj();

    newsentObj.origSent = $("#userSent").val();

    newsentObj.finalSent = formatSent(newsentObj.origSent);

    newsentObj.sentLength = numOfChar(newsentObj.finalSent);

    newsentObj.side = sqRt(newsentObj.sentLength);

    newsentObj.numOfCol = colQuant(newsentObj.side);

    newsentObj.numOfRow = rowQuant(newsentObj.side);

    count = filter(newsentObj.numOfCol, newsentObj.numOfRow, newsentObj.finalSent);
    console.log(count);

    $("#response").val(count);
  });

});// Doc Ready
