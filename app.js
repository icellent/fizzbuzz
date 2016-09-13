function d3n5(number) {
  if (number % 3 === 0) return 'Fizz';
  else if (number % 5 === 0) return 'Buzz';
  return number;
}

function fizzbuzz(start, end) {
  for (var i = start; i <= end; i++) {
    $('#fizzbuzz').append(d3n5(i) + '<br />');
  }
}

function validate(value) {
  return value && value % 1 == 0;
}

$('form').on('submit', function (e) {
  e.preventDefault();
  $('#fizzbuzz').empty();
  var start = +$('#start').val();
  var end = +$('#end').val();
  if (validate(start) && validate(end)) {
    fizzbuzz(start, end);
  } else {
    alert('Please input a validate value!')
  }
});