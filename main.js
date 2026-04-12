const userBefAuth = document.getElementById("userBeforeAuth")
const userAfterAuth = document.getElementById("userAfterAuth")
const adminBefAuth = document.getElementById("adminBeforeAuth")
const adminAfterAuth = document.getElementById("adminAfterAuth")
const user = localStorage.getItem("currentUser")
const adminLogOutButton = document.getElementById("adminLogOutBtn")
const userLogOutButton = document.getElementById("userLogOutBtn")

document.addEventListener("DOMContentLoaded", () =>{
    if(adminAfterAuth && adminBefAuth){
        if(user !== null){
            const parsedUser = JSON.parse(user)
            adminBefAuth.classList.add("hidden")
            adminAfterAuth.classList.remove("hidden")

        }
        else {
            adminBefAuth.classList.remove("hidden")
            adminAfterAuth.classList.add("hidden")
        }
    }
    else {
        if(user !== null){
            const parsedUser = JSON.parse(user)
            userBefAuth.classList.add("hidden")
            userAfterAuth.classList.remove("hidden")

        }
        else {
            userBefAuth.classList.remove("hidden")
            userAfterAuth.classList.add("hidden")
        }
    }


})

if(adminLogOutButton){
    adminLogOutButton.addEventListener("click", function() {
        adminBefAuth.classList.remove("hidden")
        adminAfterAuth.classList.add("hidden")
        localStorage.removeItem("currentUser")
        window.location.href = "indexUser.html"
    })
}

else {
    userLogOutButton.addEventListener("click", function() {
        userBefAuth.classList.remove("hidden")
        userAfterAuth.classList.add("hidden")
        localStorage.removeItem("currentUser")
        window.location.href = "indexUser.html"
    })
}



