$(function() {

  var day = moment().format('ddd'),
    month = moment().format('MMM'),
    num = moment().format('D');

  colorPanels();

  function colorPanels() {
    var colors = randomColor({count: 6}); //luminosity: 'light',
    colors.forEach(function(color, index) {
      var panel = '.panel' + (index + 1) + ' path';
      $(panel)[0].setAttribute('fill', color);
    })
    reorderPanels();
  }

  function reorderPanels() {
    // console.log('change the order of panels')
    var panels = $('svg');
    var shuffledPanels = knuthShuffle(panels);


    panels.remove();

    shuffledPanels.each(function(index, panel) {
      // console.log(element)
      $('figure').prepend(panel)
    })
    // shuffledPanels.toArray.forEach(function(panel, index) {
    //   console.log(panel);
    // })
    // shuffle array, remove figure contents, add figure contents (array)
  }

  $('.day').text(day);
  $('.month').text(month);
  $('.num').text(num);

  $('.refresh, figure').click(function() {
    colorPanels();
  })

});
