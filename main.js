


let darkModeToggle = document.querySelector(".darkModeToggle");
let aboutMeBackground= document.querySelector(".aboutMeContainer");
//let articleWrapper= document.querySelectorAll(".articlewrapper");
//let articles= document.querySelector(".articles");

darkModeToggle.addEventListener ("click", darkMode)



window.addEventListener ("load", function getLocalstorage(){

    if (localStorage.darkmode == "true"){
        document.body.style.backgroundColor= "black"
        aboutMeBackground.style. backgroundColor= "black"
        document.body.style.color="white"
        darkModeToggle.value="light"
      
    }
    
    else 
    {
        document.body.style.backgroundColor= "white"
           document.body.style.color= "rgba(10, 2, 21, 0.578)"
           aboutMeBackground.style. backgroundColor= "#F5F5F5"
           darkModeToggle.value= "dark"
    
    }
    

})




function darkMode () {
   
    if (darkModeToggle.value == "dark"){ 
        
         document.body.style.backgroundColor= "black";
         aboutMeBackground.style.backgroundColor= "black";
         //articles.style.backgroundColor="black";
         //articleWrapper.style.backgroundColor="black";
         
         document.body.style.color="white";
         darkModeToggle.value="light";
         localStorage.setItem("darkmode", true);
     }
     else{
        document.body.style.backgroundColor= "white"
        document.body.style.color= "rgba(10, 2, 21, 0.578)"
        aboutMeBackground.style. backgroundColor= "#F5F5F5"
        darkModeToggle.value= "dark"
        localStorage.setItem("darkmode", false)
     }
     
     
 }