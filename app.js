let boxes=document.querySelectorAll(".box");
let res=document.querySelector("#reset");
let newGamebtn=document.querySelector("#New-Game");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn =true;

const winPatt=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
let count=0;
boxes.forEach((box)=>{
     box.addEventListener("click",()=>{
        //let b=document.body.querySelectorAll(".box");
         if(turn){
            box.innerText="O";
            turn=false;
            box.classList.add("dark");
         }else{
            box.innerText="X";
            turn=true;
            box.classList.add("light");
         }
         box.disabled=true;
         let isWinner=checkWinner();
         count++;
        if(count===9 && !isWinner)
            drawGame();
     });
});

let drawGame=()=>{
    msg.innerText="It's a draw Game";
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""; 
    }
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(Winner)=>{
    msg.innerText=`Congratulations!Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
let p="";
const checkWinner=()=>{
      for(let patt of winPatt){
          let pos1Val=boxes[patt[0]].innerText;
          let pos2Val=boxes[patt[1]].innerText;
          let pos3Val=boxes[patt[2]].innerText;
          if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
             if(pos1Val== pos2Val && pos2Val==pos3Val){
                  showWinner(pos1Val);
                  return true;
             }
          }
      }
};

const resetGame=()=>{
      turn=true;
      enableBoxes();
      msgContainer.classList.add("hide");
}

newGamebtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);