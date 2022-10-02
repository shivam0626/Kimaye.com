import navbar from "../components/navbar.js";
document.getElementById("nav-body").innerHTML = navbar();

let myshop =()=>{
    document.getElementById("learn").style.display ="none";
    let x = document.getElementById("shop");
    x.style.display = "flex";
}

let hidemyshop =()=>{
    let x = document.getElementById("shop");
    x.style.display = "none";
}

let mylearn =()=>{
    document.getElementById("shop").style.display ="none";
    let x = document.getElementById("learn");
    x.style.display = "flex";
}
let hidemylearn =()=>{
    let x = document.getElementById("learn");
    x.style.display = "none";
}

document.querySelector("#user-icon").addEventListener("click",()=>{
    document.querySelector(".auth>div").classList.add("active");

    document.querySelector(".content").classList.add("logactive");
    document.querySelector(".reg").classList.remove("regactive");
});

document.querySelector(".bi-arrow-left").addEventListener("click",()=>{
    document.querySelector(".reg").classList.remove("regactive");
    document.querySelector(".content").classList.add("logactive");
   
});

document.querySelector("#create-acc").addEventListener("click",()=>{
    document.querySelector(".content").classList.remove("logactive");
    document.querySelector(".reg").classList.add("regactive");
});
document.querySelector("#nav-close").addEventListener("click",()=>{
    document.querySelector(".auth>div").classList.remove("active");
});

document.getElementById("navshop").addEventListener("mouseover",myshop);
document.getElementById("shop").addEventListener("mouseleave",hidemyshop);

document.getElementById("navlearn").addEventListener("mouseover",mylearn);
document.getElementById("learn").addEventListener("mouseleave",hidemylearn);


let signup = document.getElementById("reg-btn");

let userData = JSON.parse(localStorage.getItem("KimayeSignCreds")) || [];
let register = (event) =>{
    event.preventDefault();
    let formData = {
        first_name : document.getElementById("f-name").value,
        last_name : document.getElementById("l-name").value,
        s_email : document.getElementById("signup-mail").value,
        s_password : document.getElementById("signup-pass").value,
    }
    userData.push(formData);
    // console.log(userData);
    alert(`Registered sucessfully as ${formData.s_email}`);

    localStorage.setItem("KimayeSignCreds",JSON.stringify(userData));
    window.location.href ="../index.html";
}
signup.addEventListener("click",register);




let log1 = document.getElementById("login-btn");

let regdData = JSON.parse(localStorage.getItem("KimayeSignCreds"));
let login = (event) =>{
    event.preventDefault();
    let enteredEmail = document.getElementById("login-mail").value;
    let enteredPassword = document.getElementById("login-pass").value;
    //console.log(userdata);
    if(enteredEmail=="" && enteredPassword==""){
        alert("Invalid Credentials");
    }
    else{
          var check = false;

          for(var i=0; i < regdData.length; i++){
              if(regdData[i].s_email == enteredEmail &&  regdData[i].s_password == enteredPassword)
              {
                  check=true;
              }
          }
          if(check){
              alert("Login Successfull");
              localStorage.setItem("sign",JSON.stringify("My Account"))
              window.location.href = "../index.html";
          }
          else{
              alert("Login Failed! Invalid Credentials");
              document.querySelector("#emaillogin").value="";
              document.querySelector("#passwordlogin").value=""
          }
    }
};









log1.addEventListener("click",login);