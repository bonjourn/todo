let tbody = document.getElementById("tbody");
let todo = new XMLHttpRequest;
todo.open("GET","https://jsonplaceholder.typicode.com/todos");
let count = 0;  
todo.onreadystatechange = function(){
    if(todo.readyState == 4 && todo.status == 200){
        let data = JSON.parse(this.responseText);
        data.forEach(element => {
            tbody.innerHTML += `<tr><th scope="row">${element.id}</th><td colspan="2">${element.title}</td><td><input type="checkbox" name="checkbox" class="checkbox" id="" onclick=""></td></tr>`;
          });
          var checkBoxArray = document.querySelectorAll(".checkbox");
          checkBoxArray.forEach((a)=>{
            a.addEventListener("change",()=>{
              var pro = new Promise(function(resolve,reject){
                resolve("Congrats. 5 Tasks have been Successfully Completed !");
              });
              if(a.checked==true){
                count++;
                console.log("The count is "+ count);
                if(count==5){
                  pro.then((msg)=>{
                    console.log(count);
                    alert(msg);
                  }).catch((e)=>{
                    console.log(e)
                  });
                }
              }
            })
          });
    }
}


todo.send();