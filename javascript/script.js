document.getElementById("Login Form")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();
        let message = document.getElementById("message");

        if (username == "mrudula" && password == "Name") {
            message.textContent = "Login successful";
            message.style.color = "green";
            return;
        }

        if (username == "") {
            message.textContent = "Please enter name";
            message.style.color = "red";
            return;
        }

        if (password == "") {
            message.textContent = "Please enter password";
            message.style.color = "red";
            return;
        }

        if (username == "") {
            message.textContent = "Please enter user";
            message.style.color = "red";
        }

    });