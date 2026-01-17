 //verification
 let curr = JSON.parse(localStorage.getItem("currentuser"));
 if (!curr) {
     alert("Please Login to continue.");
     window.location.href = "login.html";
 }

 //variables
 let logout_btn = document.getElementById("logout_btn");
 let name = document.querySelector('.name');
 let email = document.querySelector('.email');
 let title = document.getElementById('title')
 let desc = document.getElementById('desc');
 let date = document.getElementById('date');
 let create_btn = document.getElementById('create-btn');
 let new_task = document.getElementById('new-task');
 let view = document.getElementById('view-items');
 let create_page = document.getElementById('create-task-container');
 let view_page = document.getElementById('view-task-container');
 let edt_title = document.getElementById('edt-title');
 let edt_desc = document.getElementById('edt-desc');
 let edt_date = document.getElementById('edt-date')
 let edt_id = null;
 let mode = "view";
 let edit = document.getElementById('edit-items');
 let filter = document.getElementById('filter-option');

 //parsing
 let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
 let list = document.getElementById("list");
 list.innerHTML = "";  // clears all previous boxes
 tasks.forEach(task => render(task));

 name.textContent = "Welcome " + curr.username + "!";
 email.textContent = curr.email;

 //event-listeners
 create_btn.addEventListener('click', create_task);

 filter.addEventListener('change', applyfilter);

 edit.addEventListener('click', () => {
     mode = "edit";

     create_page.style.display = "none";
     view_page.style.display = "flex";

     list.innerHTML = "";
     tasks.forEach(task => render(task));

     resetMenu();
     edit.classList.add("active-btn");

 })

 new_task.addEventListener('click', () => {
     view_page.style.display = "none";
     create_page.style.display = "flex";

     resetMenu();
     new_task.classList.add("active-btn");

 })

 view.addEventListener('click', () => {
     mode = "view";

     create_page.style.display = "none";
     view_page.style.display = "flex";

     list.innerHTML = "";
     tasks.forEach(task => render(task));

     resetMenu();
     view.classList.add("active-btn");
 })

 document.getElementById('edit-btn').addEventListener('click', save_edit);

 document.getElementById('cancel-btn').addEventListener('click', canceledit);



 //functions
 function canceledit(){
     edt_title.value = "";
     edt_desc.value = "";
     edt_date.value = "";
     edtid = null;
     
     list.innerHTML = "";
     tasks.forEach(render)

     document.querySelector('.edit-form').style.display = "none";
 }
 function applyfilter(){
     let fil = filter.value;

     list.innerHTML = ""

     let filtered;

     if(fil == "all"){
         filtered = tasks;
     }
     else if(fil == "completed"){
         filtered = tasks.filter(t => t.completed);
     }
     else if(fil == "pending"){
         filtered = tasks.filter(t => !t.completed);
     }

     if(filtered.length == 0){
         let p = document.createElement('p');
         p.textContent = "No Tasks Found";
         p.style.textAlign = "center";
         p.style.border = "none";
         list.append(p);
         return;
     }

     filtered.forEach(render);
 }
 function save_edit(){
     let edtt = edt_title.value.trim();
     let edtdesc = edt_desc.value.trim();
     let edtdate = edt_date.value;
     let edtid = edt_id;

     if(!edtt || !edtdate || !edtdesc){
         alert("Input Error! Check the Input field.");
         return;
     }
     
     let task = tasks.find(t => t.id === edtid);
     task.title = edtt;
     task.desc = edtdesc;
     task.date = edtdate;

     localStorage.setItem("tasks", JSON.stringify(tasks));

     edt_title.value = "";
     edt_desc.value = "";
     edt_date.value = "";
     edtid = null;
     
     list.innerHTML = "";
     tasks.forEach(render)

     document.querySelector('.edit-form').style.display = "none";

 }
 function create_task(){
     let tasktitle = title.value.trim();
     let taskdesc = desc.value.trim();
     let taskdate = date.value;

     if(!tasktitle || !taskdesc || !taskdate){
         alert("Please fill the required fields");
         return;
     }

     let taskobj = {
         id : Date.now(),
         userid : curr.id,
         title : tasktitle,
         desc : taskdesc,
         completed : false,
         date : taskdate,
     }

     tasks.push(taskobj);
     localStorage.setItem("tasks", JSON.stringify(tasks));

     title.value = "";
     desc.value = "";
     date.value = "";
     
     alert("Task Have been created Successfully.")
     render(taskobj);

 }

 function render(task){
     let box = document.createElement('div');
     box.style.display = "flex";
     box.style.width = "calc((100% - 40px)/3)";  // 3 per row with gap
     box.style.minHeight = "120px";
     box.style.backgroundColor = "white";
     box.style.padding = "10px";
     box.style.borderRadius = "6px";
     box.style.boxShadow = "2px 2px 10px #bec4c9";
     box.style.alignSelf = "flex-start";

     let tname = document.createElement('div');
     tname.style.display = "flex";
     tname.style.flexDirection = "column";
     tname.style.padding = "10px";
     tname.style.gap = "10px";
     tname.style.width = "70%";
     tname.style.justifyContent = "space-between"; 
     tname.style.flex = "1";  

     let h4 = document.createElement('h4');
     h4.textContent = task.title;
     h4.style.width = "100%";
     h4.style.borderBottom = "1px solid black";
     h4.style.overflowY = "auto";
     h4.style.maxHeight = "30px"
     h4.style.overflowX = "hidden";
     h4.style.wordWrap = "break-word"

     let p = document.createElement('p');
     p.textContent = task.desc;
     p.style.width = "100%";
     p.style.wordWrap = "break-word";      
     p.style.overflowY = "auto";    
     p.style.maxHeight = "40px";  
     p.style.textAlign = "justify"      // optional: show ... for extra text
     p.style.display = "block"; 

     tname.append(h4);
     tname.append(p);

     let duration = document.createElement('div');
     duration.style.display = "flex";
     duration.style.flexDirection = "column";
     duration.style.justifyContent = "center";
     duration.style.textAlign = "start";
     duration.style.justifyContent = "space-between";
     duration.style.padding = "10px";
     duration.style.justifyContent = "space-between"; // top/bottom alignment
     duration.style.alignItems = "flex-end";  

     let date = document.createElement('p');
     date.textContent = task.date;

     duration.append(date);

     if(mode== "view"){
         let status = document.createElement('button');
         status.textContent = "Completed";
         status.style.backgroundColor = "#ff6a57"
         status.style.padding = "7px"
         status.style.color = "white"
         status.style.fontWeight = "600"
         status.style.borderRadius = "5px"
         duration.append(status);

         if(task.completed){
             h4.style.textDecoration = "line-through";
             p.style.textDecoration = "line-through";
             date.style.textDecoration = "line-through";

             status.textContent = "UnDone";
             status.style.backgroundColor = "#613e8d"
         }

         status.addEventListener('click', () => {
             task.completed = !task.completed;

             if(task.completed){
                 h4.style.textDecoration = "line-through";
                 p.style.textDecoration = "line-through";
                 date.style.textDecoration = "line-through";

                 status.textContent = "UnDone"
                 status.style.backgroundColor = "#613e8d"
             }
             else{
                 h4.style.textDecoration = "none";
                 p.style.textDecoration = "none";
                 date.style.textDecoration = "none";

                 status.textContent = "Completed"
                 status.style.backgroundColor = "#ff6a57"
             }

             localStorage.setItem("tasks", JSON.stringify(tasks));
         })
     }
     else{
         let editbtn = document.createElement('button');
         editbtn.innerHTML = '<i class="fas fa-edit"></i>';
         editbtn.style.backgroundColor = "black"
         editbtn.style.padding = "7px"
         editbtn.style.color = "white"
         editbtn.style.fontWeight = "600"
         editbtn.style.borderRadius = "5px"

         editbtn.addEventListener('click', () => {
             let edit_form = document.querySelector('.edit-form');
             edit_form.style.display = "flex";
             edt_title.value = task.title;
             edt_desc.value = task.desc;
             edt_date.value = task.date;
             edt_id = task.id;
         })

         let deletebtn = document.createElement('button');
         deletebtn.innerHTML = '<i class="fas fa-trash"></i>';
         deletebtn.style.backgroundColor = "rgb(243, 15, 15)"
         deletebtn.style.padding = "7px"
         deletebtn.style.color = "white"
         deletebtn.style.fontWeight = "600"
         deletebtn.style.borderRadius = "5px"

         if(task.completed){
             h4.style.textDecoration = "line-through";
             p.style.textDecoration = "line-through";
             date.style.textDecoration = "line-through";
         }

         deletebtn.addEventListener('click', () => {
             let delete_id = task.id;
             tasks = tasks.filter(t => t.id !== delete_id);
             localStorage.setItem("tasks", JSON.stringify(tasks));

             list.innerHTML = "";
             tasks.forEach(task => render(task));
         })

         let btnContainer = document.createElement('div');
         btnContainer.style.display = "flex";
         btnContainer.style.gap = "5px"; 
         btnContainer.append(editbtn);
         btnContainer.append(deletebtn);

         duration.append(btnContainer); 
     }

     box.append(tname);
     box.append(duration);
     
     list.append(box);
 }

 function resetMenu(){
     new_task.classList.remove("active-btn");
     view.classList.remove("active-btn");
     edit.classList.remove("active-btn");
 }


 logout_btn.addEventListener("click", function(){
     localStorage.removeItem("currentuser");
     window.location.href = "login.html";
 });