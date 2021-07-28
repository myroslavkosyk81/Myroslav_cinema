// var placesExample = {
//   row: 2,
//   place: 5,
//   busy: false
// }
//
// function placesGen(rowsNum, placesNum) {
//   return placesArr;
// }
// var json = [
//   {
//     row: 2,
//     place: 5,
//     busy: false
//   },
//   {
//     row: 2,
//     place: 7,
//     busy: false
//   }
// ]
// var callback = function (err) {
//   if (err) {
//     console.log(err);
//   }
// }
// var fs = require('fs');
// fs.writeFile('../myjsonfile.json', JSON.stringify(json), 'utf8', callback);


var seatsArr = [];
var seatPerRow = 2;
var rows = 2;
var currentRow = 1;


while (rows-1) {
  rows--

  var seats = seatPerRow
  var currentSeat = 1
  var busy = Boolean(Math.round(Math.random()));
  while(currentSeat <= seats){
    let seat = {
      number: currentSeat,
      row: rows,
      busy: busy
    }
    currentSeat++
    seatsArr.push(seat)
  }

}

console.log(seatsArr);
// var fs = require('fs');
// fs.writeFile('mySeat.json', JSON.stringify(seatsArr.reverse()), (err) => {
//   if (err) console.log(err);
//   else {
//     console.log('successfully write');
//   }
// });

var seats = '1,2,3,4,5,6'.split(',');
// var seats = ['1', '2', '3'];

var newSection = document.createElement('section');
document.body.appendChild(newSection);
  for (var i in seats) {
      var newElement = document.createElement('div');
      // newElement.id = seats[i];
      newElement.className = "seat";
      newElement.innerHTML = seats[i];
      document.body.appendChild(newElement);
  }
