let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#new");
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg");


let turnO = true;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box is clicked");
        if(turnO == true){
            //playerO
            box.innerText='O';
            turnO= false;
           
           

        }
        else{
            //player X
            box.innerText='X';
            turnO= true;
            
        }
        box.disabled = true;

        checkwinner();
        
    });
})


const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true
    }

}
const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText= "";

    }

}


const showWinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`
    msgcontainer.classList.remove("hide");
    disableboxes();
 
}

const checkwinner= ()=>{
    for(let pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;
       
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val=== pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
     
            }
        }
       
    }
  
};



const resetgame = () =>{
    turnO= true;
    enableboxes();
    msgcontainer.classList.add("hide");

}

newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
