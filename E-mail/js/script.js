
const mailAccess = ["mario.rossi@gmail.com", "claudio.bisio@live.it", "leonardo.dicaprio@gmail.com", "jennifer.lopez@outlook.com", "selena.gomez@gmail.com"];

const userMailElem = document.getElementById("e-mail");
const resultMess = document.querySelector("h2");
let found = false;

const sendBtn = document.getElementById("send");
const clearBtn = document.getElementById("clear");
sendBtn.addEventListener("click", function(event) {
    event.preventDefault();
    resultMess.classList.remove("hidden");
    const userEmail = userMailElem.value;

    for (i = 0; i < mailAccess.length; i++) {
        const currMail = mailAccess[i];
        
        if (currMail === userEmail) {
            found = true;
        }
    }

    if(found) {
        document.querySelector("h2").innerHTML = "ACCESSO CONSENTITO"
    } else {
        document.querySelector("h2").innerHTML = "ACCESSO NEGATO ! LA MAIL NON E' PRESENTE NEI NOSTRI ARCHIVI"
    }

})

clearBtn.addEventListener("click", function(event){
    event.preventDefault();
    window.location.reload();
})



