$(function() {

  var day = moment().format('ddd'),
    month = moment().format('MMM'),
    num = moment().format('D');

  colorPanels();
  $('figure').click(function() {
    colorPanels();
  })

  function colorPanels() {
    var colors = randomColor({count: 6}); //luminosity: 'light',
    colors.forEach(function(color, index) {
      var panel = '.panel' + (index + 1) + ' path';
      $(panel)[0].setAttribute('fill', color);
    })
    reorderPanels();
  }

  function reorderPanels() {
    var panels = $('svg');
    var shuffledPanels = knuthShuffle(panels);
    panels.remove();
    shuffledPanels.each(function(index, panel) {
      $('figure').prepend(panel)
    })
  }

  $('.day').text(day);
  $('.month').text(month);
  $('.num').text(num);

});
