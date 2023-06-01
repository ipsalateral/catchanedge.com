
fetch("popularity.json")
.then(res => res.json())
.then(data => {freqData = data;})
.then(() => {
    var layout = {
        autosize: false,
        width: 700,
        height: 500,
        margin: {
            l: 220,
            r: 50,
            b: 50,
            t: 50,
            pad: 4
        },
        title: 'Most Popular Snowboards',
        font: {
            size: 12,
            color: '#FFFFFF'
         },
        xaxis: {
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
    Plotly.newPlot('freqPlot',freqData,layout)
})
