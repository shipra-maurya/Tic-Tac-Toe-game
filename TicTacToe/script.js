let allBoxs=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset-btn");
let newgamebtn=document.querySelector(".new-gamebtn");
let msg=document.querySelector(".msg");
let displaymsg=document.querySelector(".display-msg");
let playerO=true;

const winningPatterns=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]


allBoxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(playerO==true){
            box.innerText="O";
            playerO=false;
        }
        else{
            box.innerText="X";
            playerO=true;

        }
        box.disabled=true;
        checkWinner();
    });

});
resetgame=()=>{
    playerO=true;
    enablebox();
    displaymsg.classList.add("hide");


}
resetbtn.addEventListener("click",resetgame);
newgamebtn.addEventListener("click",resetgame);




disablebox=()=>{
    for(eachbox of allBoxs){
        eachbox.disabled=true;
    }
}

enablebox=()=>{
    for(eachbox of allBoxs){
        eachbox.disabled=false;
        eachbox.innerText="";
    }
}


showinner=(winner)=>{
    msg.innerText=`winner is ${winner}`;
    displaymsg.classList.remove("hide");
    disablebox();

}

checkWinner=()=>{
    for(eachPattern of winningPatterns){
        let pos1=allBoxs[eachPattern[0]].innerText;
        let pos2=allBoxs[eachPattern[1]].innerText;
        let pos3=allBoxs[eachPattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                console.log("winner",pos1);
                showinner(pos1);
            }
        }

    }
}



