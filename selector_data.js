var make_cat_id;
var boards;
fetch('model_by_make.json')
    .then(res => res.json())
    .then(data => {b_list = data;})
    .then(() => {
        for (make in b_list){
            boards = b_list[make];
            if (make== "Lib Tech"){
                make_cat_id = "lib_tech_cat";
            } else {
                make_cat_id = make.toLowerCase()+"_cat";
            }
            for (i in boards) {
                console.log('make_cat_id: '+make_cat_id);
                let o = document.createElement("option");
                o.text = boards[i];
                o.value =make+" "+boards[i];
                document.getElementById(make_cat_id).appendChild(o);
            } 
        }
        // console.log('make_cat_id: '+make_cat_id)
        
    })