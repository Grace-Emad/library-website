const userBefAuth = document.getElementById("userBeforeAuth")
const userAfterAuth = document.getElementById("userAfterAuth")
const userAfterAuthPar = document.getElementById("userAfterAuthPar")
const adminBefAuth = document.getElementById("adminBeforeAuth")
const adminAfterAuth = document.getElementById("adminAfterAuth")
const adminAfterAuthPar = document.getElementById("adminAfterAuthPar")
const user = localStorage.getItem("currentUser")
const adminLogOutButton = document.getElementById("adminLogOutBtn")
const userLogOutButton = document.getElementById("userLogOutBtn")

document.addEventListener("DOMContentLoaded", () =>{
    if(adminAfterAuth && adminBefAuth){
        if(user !== null){
            const parsedUser = JSON.parse(user)
            adminBefAuth.style.display = "none"
            adminAfterAuth.style.display = "block"
            adminAfterAuthPar.innerText = `Hello, ${parsedUser.username}`

        }
        else {
            adminBefAuth.style.display = "block"
            adminAfterAuth.style.display = "none"
        }
    }
    else {
        if(user !== null){
            const parsedUser = JSON.parse(user)
            userBefAuth.style.display = "none"
            userAfterAuth.style.display = "block"
            userAfterAuthPar.innerText = `Hello, ${parsedUser.username}`

        }
        else {
            userBefAuth.style.display = "block"
            userAfterAuth.style.display = "none"
        }
    }


})

if(adminLogOutButton){
    adminLogOutButton.addEventListener("click", function() {
        adminBefAuth.style.display = "block"
        adminAfterAuth.style.display = "none"
        localStorage.removeItem("currentUser")
        window.location.href = "indexUser.html"
    })
}

else {
    userLogOutButton.addEventListener("click", function() {
        userBefAuth.style.display = "block"
        userAfterAuth.style.display = "none"
        localStorage.removeItem("currentUser")
        window.location.href = "indexUser.html"
    })
}



