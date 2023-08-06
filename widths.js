
// SelectedValue is like "Ride Warpig" and will be highlighted
export function updateWidths(selectedValue) {
  var plotData;
  fetch("widths.json")
  .then(res => res.json())
  .then(data => {plotData = data;})
  .then(() => {
    plotData["type"] = "bar";
    plotData["name"] = "WidthsXXXXX";
    plotData["orientation"] = "h";
    plotData["marker"] = {};
    var layout = {
      autosize: false,
      width: 600,
      height: 1700,
      margin: {
          l: 220,
          r: 50,
          b: 10,
          t: 50,
          pad: 4
      },
      font: {
          size: 9,
          color: '#FFFFFF'
        },
      xaxis: {
        side: 'top',
        title: 'Waist Width',
        color: '#FFFFFF',
        range: [24.5, 28.5],
        tick0: 10,
        dtick: .5,
        ticklen:5,
        tickwidth:2
      },
      yaxis: {
        title: '',
        type: 'category',
        color: '#FFFFFF'
      },
        // shapes: [
        //     //line vertical
        //     {
        //       type: 'line',
        //       x0: 25,
        //       y0: 0,
        //       x1: 25,
        //       y1: 93,
        //       line: {
        //         color: '#E9F125',
        //         width: 1
        //       }
        //     },
        //     {
        //         type: 'line',
        //         x0: 26,
        //         y0: 0,
        //         x1: 26,
        //         y1: 93,
        //         line: {
        //           color: '#E9F125',
        //           width: 1
        //         }
        //       },
        //       {
        //         type: 'line',
        //         x0: 27,
        //         y0: 0,
        //         x1: 27,
        //         y1: 93,
        //         line: {
        //           color: '#E9F125',
        //           width: 1
        //         }
        //       }],
        // marker:{'color': '#5BB2EA'},
        plot_bgcolor:'#212b2d',
        paper_bgcolor:'#212b2d'
      }
      
      // selectedValue = selectElement.options[selectElement.selectedIndex].value;
      plotData.marker.color = plotData.y.map(name=>name==selectedValue? 'orange' :'#5BB2EA')
      Plotly.newPlot('widthsPlot',[plotData],layout)
  })
}
updateWidths()

