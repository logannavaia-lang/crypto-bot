let users = JSON.parse(localStorage.getItem("users")) || [];


function createUser(username, password) {

    // Check if user already exists
    let existingUser = users.find(
        user => user.username === username
    );


    if (existingUser) {

        console.log("User already exists");

        return existingUser;

    }


    // Create new user
    let newUser = {

        id: Math.floor(Math.random() * 999999),

        username: username,

        password: password

    };


    users.push(newUser);


    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );


    console.log("New user created");

    return newUser;

}