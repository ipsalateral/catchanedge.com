
// SelectedValue is like "Ride Warpig" and will be highlighted
export function updatePopularity(selectedValue) {
    var plotData;
    fetch("popularity.json")
    .then(res => res.json())
    .then(data => {plotData = data;})
    .then(() => {
        plotData["type"] = "bar";
        plotData["orientation"] = "h";
        plotData["marker"] = {};
        var layout = {
            autosize: false,
            width: 600,
            height: 500,
            margin: {
                l: 220,
                r: 50,
                b: 10,
                t: 60,
                pad: 4
            },
            font: {
                size: 12,
                color: '#FFFFFF'
            },
            xaxis: {
                side: 'top',
                title: 'Popularity Rating',
                color: '#FFFFFF'
            },
                yaxis: {
                title: '',
                type: 'category',
                color: '#FFFFFF'
            },
            plot_bgcolor:'#212b2d',
            paper_bgcolor:'#212b2d'
        }
        plotData.marker.color = plotData.y.map(name=>name==selectedValue? 'orange' :'#5BB2EA')
        Plotly.newPlot('freqPlot',[plotData],layout)
    })
}
updatePopularity();
