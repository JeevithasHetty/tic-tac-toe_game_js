let boxes =document.querySelectorAll(".box");
let rstbtn=document.querySelectorAll("#reset-btn");
let newbtn=document.querySelectorAll("#new-btn");
 
let turno= true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("the box was clicked");
        if(turno)
        {
            box.innerText="O";
            turno=false;

        }
        else{
            box.innerText="X";
          turno=true;
        }
         box.disabled=true;

         checkwinner();
    });
});

const checkwinner =() =>{
    for( let pattern of winPatterns) {
            let pos1Val=boxes[pattern[0]].innerText;
            let pos2Val=boxes[pattern[0]].innerText;
            let pos3Val=boxes[pattern[0]].innerText;
            if(pos1Val!="" && pos2Val!="" &&pos3Val!=""){
                if(pos1Val===pos2Val&& pos2Val===pos3Val){
                    console.log("winner",p);
                }
            }
        }

    };
