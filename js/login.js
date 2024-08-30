let elLoginForm = document.querySelector(".login-form")
const isRegistred = JSON.parse(localStorage.getItem('isRegistred'))
elLoginForm.addEventListener("submit", (evt) =>{
    evt.preventDefault();
    const userData ={
        username:evt.target.username.value,
        password:evt.target.password.value
    }
    if(isRegistred){
        if(userData.username == isRegistred.username  && userData.password == isRegistred.password){
            window.localStorage.setItem("userData", JSON.stringify(userData))
            setTimeout(() =>{
                location.pathname = "../admin.html"
            },500)
        }
        else{
            alert("Incorrect username or password")
        }
    }
    else{
        if(userData.username == "shuhrat" && userData.password == "123"){
            window.localStorage.setItem("userData", JSON.stringify(userData))
            setTimeout(() =>{
                location.pathname = "../admin.html"
            },500)
        }
        else{
            alert("Incorrect username or password")
        }
    }
  
})