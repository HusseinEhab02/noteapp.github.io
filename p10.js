let theinput = document.querySelector(".addtask input")
let addbtn = document.querySelector(".plus")
let notaskmsg = document.querySelector(".notasksmessage")
let taskscontainer = document.querySelector(".taskscontent")
let taskcount = document.querySelector(".taskscount span")
let taskcompleted = document.querySelector(".taskscompleted span")
let counter= 0
let taskbox= document.querySelector(".taskbox")
let taskscounter = document.querySelector(".taskscount")
let deleteall = document.querySelector(".dels button")
window.onload = function(){
    theinput.focus()
}

addbtn.onclick = function(){

    if(theinput.value ===""){
        console.log("no")
    }
    else{
        
        notaskmsg.remove()
        let mainspan = document.createElement("span")
        let delbtn = document.createElement("span")
        let txt = document.createTextNode(theinput.value)
        let txtdel=document.createTextNode("del")
        mainspan.appendChild(txt)
        delbtn.appendChild(txtdel)
        mainspan.classList.add("taskbox")
        delbtn.classList.add("del")
        mainspan.appendChild(delbtn)
        taskscontainer.appendChild(mainspan)
        if(document.body.contains(document.querySelector(".notasksmessage"))){
            notaskmsg.remove()
           
        } 
        calctasks()
    }
}
document.addEventListener("click" , function(e){
    // delete task
    if(e.target.className == "del"){
    e.target.parentNode.remove()
    calctasks()
    // check number of tasks in container
    if(taskscontainer.childElementCount == 0){
        createnotasks()
        
    }
    }
    // finish task
    if(e.target.classList.contains("taskbox")){
        
        // toggle adds this class if not already here and removes it if not here
        e.target.classList.toggle("finished")
        
    }
    calctasks()
})

// function to create no tasks msg
function createnotasks(){
    let msgspan = document.createElement("span")
    let msgspantxt = document.createTextNode("no tasks to show")
    msgspan.appendChild(msgspantxt)
    msgspan.classList.add("notasksmessage")
    // append in task manager
    taskscontainer.appendChild(msgspan)
}
function calctasks(){
    taskcount.innerHTML = document.querySelectorAll('.taskscontent .taskbox').length

    taskcompleted.innerHTML = document.querySelectorAll(".taskscontent .finished").length
}
deleteall.addEventListener("click" , ()=>{
    deleteall.remove()
})