$(function() {

  var panelIsClickable = true,
    day = moment().format('ddd'),
    month = moment().format('MMM'),
    num = moment().format('D'),
    tomorrow = moment().add(1, 'day').startOf('day');

  colorPanels();
  $('figure').click(function() {
    if (panelIsClickable) {
      panelIsClickable = false;
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
    panelIsClickable = true;
  }

  updateDate()
  function updateDate() {
    $('.day').text(day);
    $('.month').text(month);
    $('.num').text(num);
  }

  setInterval(checkDate, 1000 * 60 * 60);
  function checkDate() {
    if (moment().isAfter(tomorrow)) {
      console.log("checking date") //
      updateDate();
      colorPanels();
      tomorrow = moment().add(1, 'day').startOf('day');
    }
  }

});
