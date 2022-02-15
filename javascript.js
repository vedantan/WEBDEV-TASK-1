window.onload = function(){ 
    let task = document.querySelector(".input-box");
    let list = document.querySelector(".line"); 
    let addTask = document.querySelector(".btn");


    addTask.addEventListener("click", ()=>{
         list.insertAdjacentHTML(
              `afterbegin`,
               `<li>
                   <i class="fas fa-trash RemovefromList"></i>
                
                   <h4>${task.value}</h4> 
                
                </li>`
          );


        task.value = ""; 
        
        let RemovefromList = document.querySelectorAll(".RemovefromList");

         RemovefromList.forEach((del) =>{ 
             del.addEventListener("click", ()=>{ 
                 del.parentElement.remove();


            }); 
        });
    });
};