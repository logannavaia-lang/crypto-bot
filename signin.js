const signinButton = document.querySelector("#signinbtn");


signinButton.addEventListener("click", function () {


    const username = document.querySelector("#username").value;

    const password = document.querySelector("#password").value;



    if (username === "" || password === "") {

        alert("Please enter username and password");

        return;

    }



    console.log("Checking credentials...");


    const user = createUser(username, password);



    localStorage.setItem(
        "currentUser",
        JSON.stringify(user)
    );



    console.log("ACCESS GRANTED");

    console.log("User ID: #" + user.id);



    window.location.href = "homepage.html";


});