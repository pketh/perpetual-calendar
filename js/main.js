$(function() {

  var day = moment().format('ddd'),
    month = moment().format('MMM'),
    num = moment().format('D');

  colors = randomColor({count: 12});
  // ..

  $('.day').text(day)
  $('.month').text(month)
  $('.num').text(num)

  $('.refresh').click(function() {
    console.log('( ´ ▽ ` )ﾉ');
  })

});
