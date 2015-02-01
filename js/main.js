$(function() {

  var day = moment().format('ddd'),
    month = moment().format('MMM'),
    num = moment().format('D'),
    panelIsClickable = true;

  colorPanels();
  $('figure').click(function() {
    if (panelIsClickable) {
      panelIsClickable = false;
      $('.loader').addClass('showLoading');
      colorPanels();
    }
  })

  function colorPanels() {
    var colors = randomColor({count: 6});
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
    $('.loader').removeClass('showLoading')
    panelIsClickable = true;
  }

  $('.day').text(day);
  $('.month').text(month);
  $('.num').text(num);

  // refresh each day at 12:01am for users time zone

});
