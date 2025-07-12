const container = document.querySelector("#container");
const promptButton = document.querySelector('#promptButton');

addEventListener("DOMContentLoaded", ()=>{
    createGrid(16);
    const gridBox = document.querySelectorAll('.gridBox');
    addListeners(gridBox);

    promptButton.addEventListener('click', ()=>{
        const userInput = prompt('Enter grid dimension integer: ');
        if (userInput !== null && userInput <= 100){
            replaceGrid(parseInt(userInput,10));
            const gridBoxes = document.querySelectorAll('.gridBox');
            addListeners(gridBoxes);
        }
        if(userInput > 100){
            alert('Please pick a number below 101');
        }

    });

    function createGrid(dimension){
        const availableSpace = container.clientWidth;
        for( let i = 0; i < (dimension*dimension); i++){
            const newChildDiv = document.createElement("div");
            newChildDiv.classList.add("gridBox");
            width=(availableSpace/dimension);
            widthStr=width+"px";
            height=(availableSpace/dimension);
            heightStr=height+"px";
            newChildDiv.style.width = widthStr;
            newChildDiv.style.height = heightStr;
            newChildDiv.style.opacity = .1;
            container.appendChild(newChildDiv);
        }   
    }

    function clearGrid(){
        container.innerHTML = '';
    }

    function replaceGrid(dimension){
        clearGrid();
        createGrid(dimension);
        const gridBoxes = document.querySelectorAll('.gridBox');
        addListeners(gridBoxes);
    }
    
    function addListeners(elementList){
        elementList.forEach(box=>{
            box.addEventListener('mouseover', ()=>{
                let color=generateRandomColor();
                box.style.backgroundColor = color;
                increaseOpacity(box);
            })
        });
    }

    function increaseOpacity(element) {
        computedStyle = window.getComputedStyle(element);
        currOpacity = computedStyle.opacity;
        //console.log(currOpacity);
        if(currOpacity < 1){
            element.style.opacity = parseFloat(currOpacity) + .10;
        }
        
    }
    
});

function generateRandomColor(){
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

