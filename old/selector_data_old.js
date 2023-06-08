var make_cat_id;
fetch('model_by_make.json')
          .then(res => res.json())
          .then(data => {b_list = data;
          })
          .then(() => {
         for (make in b_list){
              var boards = b_list[make];
              for (i in boards) {
                let o = document.createElement("option");
                if (boards[i].substr(0,8)== "Lib Tech") {
                  o.text = boards[i].replace(/[^ ]* [^ ]* /,'');
                  make_cat_id = "lib_tech_cat";
                } else {
                  o.text = boards[i].replace(/[^ ]* /,'');
                  make_cat_id = boards[i].replace(/ .*/,'').toLowerCase()+"_cat";
                }
                o.value = boards[i];
                // console.log('make_cat_id: '+make_cat_id)
                document.getElementById(make_cat_id).appendChild(o);
              }}})