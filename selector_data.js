fetch('model_by_make.json')
          .then(res => res.json())
          .then(data => {b_list = data;
          })
          .then(() => {
         for (make in b_list){
              var boards = b_list[make];
              for (i in boards) {
                let o = document.createElement("option");
                o.text = boards[i].replace(/[^ ]* /,'');
                o.value = boards[i];
                var make_cat_id = boards[i].replace(/ .*/,'').toLowerCase()+"_cat";
                console.log('make_cat_id: '+make_cat_id)
                document.getElementById(make_cat_id).appendChild(o);
              }}})