let divPrincipale = document.createElement("div");
divPrincipale.setAttribute("class", "container");
document.body.appendChild(divPrincipale);

let calculette = document.createElement("div");
calculette.setAttribute("class", "calculette");
divPrincipale.appendChild(calculette);

let inputNbr = document.createElement("input");
inputNbr.setAttribute("class", "inputNbr");
calculette.appendChild(inputNbr);


let divSignes = document.createElement("div");
divSignes.setAttribute("class", "divSignes");
calculette.appendChild(divSignes);

let divChiffres = document.createElement("div");
divChiffres.setAttribute("class", "chiffres");
calculette.appendChild(divChiffres);

let divEgal = document.createElement("div");
divEgal.setAttribute("class","divEgal");
calculette.appendChild(divEgal);

let montab = ["0","1","2","3","4","5","6","7","8","9","C","."];
let i = 0;
montab.forEach(element => {
    element=document.createElement("button");
    divChiffres.appendChild(element);
    element.setAttribute("class", "btns2");
    element.innerText = montab[i];
    i++;
});

let montab2 = ["+","-","*","/"]
let j = 0;

montab2.forEach(element =>{
    element = document.createElement("button");
    divSignes.appendChild(element);
    element.setAttribute("class", "btns");
    element.innerText = montab2[j];
    j++;
});

let egalSign = document.createElement("button");
egalSign.setAttribute("class", "egal");
egalSign.innerText = "=";
divEgal.appendChild(egalSign);

divSignes.addEventListener("click", (e)=>{
    inputNbr.value += e.target.innerText;
})

divChiffres.addEventListener("click",(e)=>{
    
    if(e.target.innerText == "C"){
        inputNbr.value = "";
    }else if(e.target.innerText == "."){
        e.target.style.pointerEvent = "none";
    }
    else{
        inputNbr.value += parseInt(e.target.innerText);
    }
});

egalSign.addEventListener("click",()=>{
    inputNbr.value = Math.round(eval(inputNbr.value));
});
