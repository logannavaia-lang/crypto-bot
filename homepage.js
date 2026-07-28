const choice1Btn = document.querySelector("#choice1-btn");

const choice2Btn = document.querySelector("#choice2-btn");



choice1Btn.addEventListener("click", function () {

    window.location.href = "encrypt.html";

});



choice2Btn.addEventListener("click", function () {

    window.location.href = "decrypt.html";

});




// Show user information

const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
);



if (currentUser) {

    document.querySelector("#user-info").textContent =
        "Welcome " + currentUser.username +
        " | ID: #" + currentUser.id;


    console.log("Logged in as:", currentUser.username);

}