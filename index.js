let card = document.getElementById("card");
let greeting = document.getElementById("greeting");
let cardBody = document.getElementById("cardBody");

let tr = false



card.addEventListener("click", ()=>{
    if(tr == false){
        card.className += "flip-horizontal-bottom";
        greeting.style.display = "none";
        setTimeout(()=>{
            cardBody.style.display = "flex";
        }, 150)
        tr = true;
    }else{
        // card.className += "flip-horizontal-bottom";
        // greeting.style.display = "flex";
        // cardBody.style.display = "none";
        // tr = true;
    }
})




