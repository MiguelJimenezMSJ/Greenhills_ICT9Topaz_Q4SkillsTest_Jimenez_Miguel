let attempts = 0;
let maxAttempts = 3;

function log_in() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    let errorMsg = document.getElementById("errorMsg");

  
    if (attempts >= maxAttempts) {
        errorMsg.innerText = "Account locked.";
        return;
    }

   
    for (let i = attempts; i < maxAttempts; i++) {

        if (user === "Optimus_Prime" && pass === "1986") {
            alert("Access granted");

            window.location.href = "Notebook.html";

            attempts = 0;
            errorMsg.innerText = "";
            break;
        } else {
            attempts++;

            if (attempts >= maxAttempts) {
                errorMsg.innerText = "Account locked after 3 failed attempts.";
                document.querySelector("button").disabled = true;
            } else {
                errorMsg.innerText = "Access denied. Attempts left: " + (maxAttempts - attempts);
            }
            break; 
        }
    }
}