const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let bowlWin = array.find( function(object)
  { return object.result === "W"
  });
  if (bowlWin != undefined) {
  return bowlWin.year }
  else { return undefined }
};
