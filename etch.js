const container=document.querySelector(".container");
const btnblack=document.createElement('button'); 
const btnSize=document.createElement('button');

const btnContainer=document.querySelector('.buttons');

let pixelSize=parseInt(prompt("Enter Size(Enter a value between 16 and 40 for optimal result): "));

function createDiv(col,row){
    for (let i=0;i<row*col;i++){
        const div=document.createElement('div');
        div.style.height=pixelSize + 'px';
        div.style.width=pixelSize + 'px';
        div.style.border='1px solid blue';
        div.style.display='flex';
        // div.style.display='inline-block';
        // div.style.flexWrap='wrap';
        container.appendChild(div).classList.add('boxes');
    }
}

// let gridSize=parseInt(prompt("Enter the Grid Size: "))

createDiv(40,40);

function blackColor(){
    const box=document.querySelectorAll('.boxes')
    btnblack.textContent='black';
    btnblack.addEventListener('click', () => {
        box.forEach(boxes => boxes.addEventListener('mouseover', () => {
            boxes.style.backgroundColor='black';
        }))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    })
    btnContainer.appendChild(btnblack).classList.add('btn');
}
blackColor();

function refreshPage(){
    btnSize.textContent='Reize';
    btnSize.addEventListener('click', ()=> {
        window.location.reload();
    })
    btnContainer.appendChild(btnSize).classList.add('btn');
} 
refreshPage();