export function saveUser(userData) {
    if(!userData) {
        throw Error();
    }
    localStorage.setItem("token", JSON.stringify(userData.token))
    localStorage.setItem("user",JSON.stringify(userData))
}

export function flushLocalStorage(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
}