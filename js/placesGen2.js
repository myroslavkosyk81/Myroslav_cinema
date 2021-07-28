var seatsArr = [];
var seatPerRow = 10;
var rows = 7;
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
var fs = require('fs');
fs.writeFile('seat.json', JSON.stringify(seatsArr.reverse()), (err) => {
  if (err) console.log(err);
  else {
    console.log('successfully write');
  }
});
