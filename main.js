const fills = document.querySelectorAll(".fill")
const empties = document.querySelectorAll(".empty")
let dragged;
for(let fill of fills){
    fill.addEventListener("dragstart", dragStart)
    fill.addEventListener("dragend", dragEnd)
}
//fill.addEventListener("dragstart", dragStart)
//fill.addEventListener("dragend", dragEnd)

function dragStart(e){
    dragged = e.target
    console.log(dragged)
    setTimeout(()=>{
        this.className = "invisible"
    },0)
}

function dragEnd(){
    this.className = "fill"
}

for(let empty of empties){
    
    empty.addEventListener("dragover", dragOver)
    //empty.addEventListener("dragenter", dragEnter)
    //empty.addEventListener("dragleave", dragLeave)
    empty.addEventListener("drop", dragDrop)
   
}

function dragOver(e){
    e.preventDefault()
}

function dragDrop(e){
    e.preventDefault()
    console.log(e)
    this.className = 'empty'
    this.append(dragged)
}

