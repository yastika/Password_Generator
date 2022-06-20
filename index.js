let charactersList = ["!","@","$","^","&","*","(",")","+","-","\\","<",">","?","/","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",1,2,3,4,5,6,7,8,9,0]

let newPassword = ""

// console.log(document.getElementById("password1").textContent)

function genPassword(){
    let bottomCont = document.getElementById("bottom-container").querySelectorAll("button")
    for(let i = 0; i < bottomCont.length; i++){
        for(let j = 0; j < 15; j++){
           
            let num = Math.ceil(Math.random(0,1) * 76)
            newPassword += charactersList[num]
        }
        
        let iconButton = bottomCont[i].querySelector("i")
        iconButton.remove()
        bottomCont[i].textContent = newPassword
        bottomCont[i].classList.add("password")
        newPassword=""
        
    }
}

for (const elem of document.querySelectorAll(".genButton")) {
    elem.addEventListener("click", e => {
        const ta = document.createElement("textarea");
        ta.innerText = e.target.innerText;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
  });
}

