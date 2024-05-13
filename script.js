let btn = document.querySelector(".add");
let inp = document.querySelector("input");
let cancel = document.querySelector(".cancel");
let ol = document.querySelector("ol");
let listTask = document.querySelector(".list-task");
let inputImg = document.querySelector(".input-img");
let sortBtn = document.querySelector(".sort");

let tasks = [];

btn.addEventListener("click", () => {
  console.log(inp.value);
  if (inp.value.trim() === "") {
    alert("Write something");
  } else {
    listTask.style.display = "block";
    let list = document.createElement("li");
    let p = document.createElement("p");
    
    ol.append(list);
    list.append(p);
    let ulWrapper = document.getElementById("text-content");
    new Sortable(ol, {
      animation: 360,
      chosenClass: "boxShadow",
      dragClass: "drag",
    });

    p.textContent = inp.value.trim();
    let imgElement = document.createElement("img");
    list.append(imgElement);
    list.style.display = "flex";
    list.style.justifyContent = "space-between";
    list.style.width = "250px";
    imgElement.src = "./img/cancel.png";
    imgElement.classList.add("imgelement");
    tasks.push(p.textContent);
    console.log(tasks);
    imgElement.addEventListener("mouseover", (event) => {
      event.target.src = "./img/cancelfull.png";
    });

    imgElement.addEventListener("mouseleave", (event) => {
      event.target.src = "./img/cancel.png";
    });
    imgElement.addEventListener("click", () => {
      list.remove();
    });
  }
});
inputImg.addEventListener("click", () => {
  inp.value = " ";
});
inputImg.addEventListener("mouseover", (event) => {
  event.target.src = "./img/cancelfull.png";
});

inputImg.addEventListener("mouseleave", (event) => {
  event.target.src = "./img/cancel.png";
});

let t = true;
sortBtn.addEventListener("click",()=>{
    tasks.sort();
    let li = document.querySelectorAll('li') 
    if(t)
    {
      for (let i = 0; i < tasks.length; i++) {
        li[i].querySelector('p').textContent = tasks[i];
     }
     t = false;
     sortBtn.src ='./img/up.png'
     sortBtn.setAttribute('src','./img/solid up.png')
    }
    else{
      tasks.sort().reverse()
      for (let i = 0; i < tasks.length; i++) {
        li[i].querySelector('p').textContent = tasks[i];
     }
     t=true;
     sortBtn.src ='./img/down.png'
     sortBtn.setAttribute('src','./img/solid down.png')
      
    }    
    
})


