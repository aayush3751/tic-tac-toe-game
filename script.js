let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-game");
let newBtn=document.querySelector("#new-game");
let resetBtn=document.querySelector("#reset-game");
let msg=document.querySelector("#msg");
let msgCntr=document.querySelector(".message-cntr");
let toggle=document.querySelector(".toggle-btn");

let  turn=true;
const win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn)
        {
            box.innerText="X";
            turn=false;
        }
        else{
            box.innerText="O";
            turn=true;
        }
        box.disabled=true;
        checkWinner();
    })

})
let md="light";
const tog =() =>{
    if(md=="light")
    {
        document.body.classList.add("dark");
        toggle.innerHTML=`<i class="fa-regular fa-sun"></i>`;
        md="dark";
    }
    else{
        document.body.classList.remove("dark");
        toggle.innerHTML=`<i class="fa-regular fa-moon"></i>`;
        md="light";
    }
    
}
const  rese =() =>{
    for(box of boxes)
    {
        box.disabled=false;
        box.innerText="";
        
    }
    msgCntr.classList.add("hide");
    
}
const disableBtn = () =>
{
    for(box of boxes)
    box.disabled=true;
}
const showWinner = (winner) =>
{
   msg.innerText=`congrats ${winner} you won`;
    msgCntr.classList.remove("hide");
    disableBtn();

}
const checkWinner = () =>{
        for(let pattern of win)
        {
            // console.log(pattern[0],pattern[1],pattern[2])
            // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
            let pos1=boxes[pattern[0]].innerText;
            let pos2=boxes[pattern[1]].innerText;
            let pos3=boxes[pattern[2]].innerText;
            if(pos1 !="" && pos2!="" && pos3!="")
            {
                if(pos1===pos2 && pos2===pos3)
                {
                    console.log("winner",pos1);
                   showWinner(pos1);
                   
                }
            }

        
        }
};
resetBtn.addEventListener("click",rese);
newBtn.addEventListener("click",rese);
toggle.addEventListener("click",tog);