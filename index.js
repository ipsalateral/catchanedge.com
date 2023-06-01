




var selectElement = document.getElementById('selectSnowboard');
selectElement.onchange = function () {
    var selectedValue = selectElement.options[selectElement.selectedIndex].value;
    var divElement1 = document.getElementById('space');
    var divElement2 = document.getElementById('intro');
    var table_heading1 = document.getElementById('table_head1')
    var table_heading2 = document.getElementById('table_head2')
    if (selectedValue) {
        
        fetch("similar_boards.json")
        .then(function(response){
            return response.json();
        })
        .then(function(x){
            let placeholder = document.querySelector("#data-output");
            let out = "";
            for(let b of x[selectedValue]){
                out += `
                    <tr>
                        <td>${b.board}</td>
                        <td>${b.percent}</td>
                    </tr>
                `;
            }
            placeholder.innerHTML = out;
            table_heading1.textContent = "Board"
            table_heading2.textContent = "Similarity Rating"
            divElement1.innerHTML = '<p> <br> </p>';
            divElement2.textContent="The most similar snowboards are: ";
             

        })

    };
}
