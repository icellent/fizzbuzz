function d3n5(number) {
  if (number % 3 === 0) return 'Fizz';
  else if (number % 5 === 0) return 'Buzz';
  return number;
}

function generateArr(start, end) {
  var arr = [];
  for (var i= start; i<= end; i++) {
    arr.push(i);
  }
  return arr;
}


function validate(value) {
  return value && value % 1 == 0;
}

function putContent(start, end) {
  var content = generateArr(start,end).map(d3n5).join('</br>');
  if (validate(start) && validate(end) && start < end) {
    return $('#fizzbuzz').empty().append(content);
  }
  return null;
}

$('form').on('submit', function (e) {
  e.preventDefault();
  var start = +$('#start').val();
  var end = +$('#end').val();
  putContent(start, end);
});