const els = {
    container: document.getElementById("login"),
    email: document.getElementById("email"),
    password: document.getElementById("password"),
    register: document.getElementById("register"),
    signin: document.getElementById("signin"),
    signout: document.getElementById("signout")
};

function handleSignUp() {
    const email = els.email.value;
    const password = els.password.value;

    if (email.length < 4) {
        alert("Please enter an email address.");
        return;
    }

    if (password.length < 4) {
        alert("Please enter a password.");
        return;
    }
    els.container.classList.add("hidden");
    // Sign in with email and pass.
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(function (error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === "auth/weak-password") {
                alert("The password is too weak.");
            } else {
                alert(errorMessage);
            }
            els.container.classList.remove("hidden");
            console.log(error);
        });
}


function handleLogIn() {
    if (firebase.auth().currentUser) {
        return;
    }
    const email = els.email.value;
    const password = els.password.value;

    if (email.length < 4) {
        alert("Please enter an email address.");
        return;
    }
    if (password.length < 4) {
        alert("Please enter a password.");
        return;
    }
    els.container.classList.add("hidden");
    // Sign in with email and pass.
    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(function (error) {
        // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === "auth/wrong-password") {
                alert("Wrong password.");
            } else {
                alert(errorMessage);
            }
            console.log(error);
            els.container.classList.remove("hidden");
        });
}

function handleLogOut() {
    firebase.auth().signOut();
}


firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        els.container.classList.add("hidden");
    } else {
        els.container.classList.remove("hidden");
    }
});

els.register.addEventListener("click", handleSignUp);
els.signin.addEventListener("click", handleLogIn);
els.signout.addEventListener("click", handleLogOut);

export default {};