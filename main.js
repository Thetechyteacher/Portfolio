


// let darkModeToggle = document.querySelector(".darkModeToggle");
// let aboutMeBackground= document.querySelector(".aboutMeContainer");
// //let articleBody= document.querySelectorAll(".article-body");
// let articles= document.querySelectorAll(".container");

// darkModeToggle.addEventListener ("click", darkMode)



// window.addEventListener ("load", function getLocalstorage(){

//     if (localStorage.darkmode == "true"){
//         document.body.style.backgroundColor= "black"
//         aboutMeBackground.style.backgroundColor= "black"
//         //articleBody.style.backgroundColor= "black"
//         articles.style.backgroundColor= "black"
//         document.body.style.color="white"
//         darkModeToggle.value="light"
      
//     }
    
//     else 
//     {
//         document.body.style.backgroundColor= "white"
//            document.body.style.color= "rgba(10, 2, 21, 0.578)"
//            aboutMeBackground.style. backgroundColor= "#F5F5F5"
//            darkModeToggle.value= "dark"
    
//     }
    

// })




// function darkMode () {
   
//     if (darkModeToggle.value == "dark"){ 
        
//          document.body.style.backgroundColor= "black";
//          aboutMeBackground.style.backgroundColor= "black";
//          articles.style.backgroundColor= "black";
//          //articleBody.style.backgroundColor= "black";
         
//          document.body.style.color="white";
//          darkModeToggle.value="light";
//          localStorage.setItem("darkmode", true);
//      }
//      else{
//         document.body.style.backgroundColor= "white"
//         document.body.style.color= "rgba(10, 2, 21, 0.578)"
//         aboutMeBackground.style. backgroundColor= "#F5F5F5"
//         darkModeToggle.value= "dark"
//         localStorage.setItem("darkmode", false)
//      }
     
     
//  }
let darkModeToggle = document.querySelector(".darkModeToggle");
let aboutMeBackground = document.querySelector(".aboutMeContainer");
let articles = document.querySelectorAll("article");
let articleWrappers = document.querySelectorAll(".articlewrapper");

darkModeToggle.addEventListener("click", darkMode);

window.addEventListener("load", function getLocalStorage() {
  if (localStorage.darkmode == "true") {
    document.body.style.backgroundColor = "black";
    aboutMeBackground.style.backgroundColor = "black";
    articles.forEach((article) => (article.style.backgroundColor = "black"));
    articleWrappers.forEach((wrapper) => (wrapper.style.backgroundColor = "black"));
    document.body.style.color = "white";
    darkModeToggle.value = "light";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "rgba(10, 2, 21, 0.578)";
    aboutMeBackground.style.backgroundColor = "#F5F5F5";
    articles.forEach((article) => (article.style.backgroundColor = "white"));
    articleWrappers.forEach((wrapper) => (wrapper.style.backgroundColor = "white"));
    darkModeToggle.value = "dark";
  }
});

function darkMode() {
  if (darkModeToggle.value == "dark") {
    document.body.style.backgroundColor = "black";
    aboutMeBackground.style.backgroundColor = "black";
    articles.forEach((article) => (article.style.backgroundColor = "black"));
    articleWrappers.forEach((wrapper) => (wrapper.style.backgroundColor = "black"));
    document.body.style.color = "white";
    darkModeToggle.value = "light";
    localStorage.setItem("darkmode", true);
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "rgba(10, 2, 21, 0.578)";
    aboutMeBackground.style.backgroundColor = "#F5F5F5";
    articles.forEach((article) => (article.style.backgroundColor = "white"));
    articleWrappers.forEach((wrapper) => (wrapper.style.backgroundColor = "white"));
    darkModeToggle.value = "dark";
    localStorage.setItem("darkmode", false);
  }
}

