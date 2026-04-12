const loginForm = document.getElementById("loginForm")
const signUpForm = document.getElementById("signUpForm")
const loginButton = document.getElementById("loginSubmit")
const signUpButton = document.getElementById("signUpSubmit")
const loginError = document.getElementById("loginError")
const confirmPassError = document.getElementById("confPassError")



if(loginButton){
    loginButton.addEventListener("click", (e) => {
        e.preventDefault()
        const username = loginForm.username.value
        const password = loginForm.password.value
        const user = localStorage.getItem(username)
        const allFilled = Array.from(document.querySelectorAll('input[required]')).every(input => input.value.trim() !== "")

        if(user && allFilled){
            const parsedUser = JSON.parse(user);
            if(parsedUser.password === password){
                if(parsedUser.isAdmin){
                    window.location.href = "../index.html"
                }
                else {
                    window.location.href = "../indexUser.html"
                }
                localStorage.setItem('currentUser', user)
            }

            else {
                loginError.innerText = "Incorrect password! try again."
            }
        }
        else {
            if(!allFilled){
                loginError.innerText = "Please fill in required fields"
            }
            else {
                loginError.innerText = "User not found! try again or sign up"
            }

        }
    })
}

if(signUpButton){
    signUpButton.addEventListener("click", (e) => {
        const password = signUpForm.password.value
        const confirmPass = signUpForm.confPass.value
        const username = signUpForm.username.value;
        const email = signUpForm.email.value;
        const allFilled = Array.from(document.querySelectorAll('input[required]')).every(input => input.value.trim() !== "")

        e.preventDefault()

        if(allFilled){
            if(confirmPass !== password){
                confirmPassError.style.display = "block";
                confirmPassError.innerText = "passwords aren't the same!"
            }
            else {
                const emailError = document.getElementById("emailError")
                const emailItem = localStorage.getItem(email)
                if(emailItem){
                    emailError.innerText = "Email already exists! try again"
                }
                else {
                    const user = {
                        username: username,
                        password: password,
                        email: email,
                        isAdmin: document.getElementById("isAdmin").checked
                    };
                    localStorage.setItem(username, JSON.stringify(user))

                    if(user.isAdmin){
                        window.location.href = "../index.html"
                    }
                    else {
                        window.location.href = "../indexUser.html"
                    }
                }

            }
        }
        else {
            const signUpError = document.getElementById("signUpError")
            signUpError.innerText = "Please fill in required fields"
        }


    })
}

console.log("hello")

