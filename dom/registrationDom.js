const framzo = document.querySelector(".enterReg");
const regButton = document.querySelector(".addBtn");


//const namesTwo = document.querySelector(".names")








function addMe() {


 //alert(framzo.value);
//if (framzo.value.length == 0 ) {
  //  return 

    
//}
const li = document.createElement("li")
li.innerHTML = framzo.value
//targetElement.appendChild("li")
//names.appendChild("li")
framzo.appendChild("li")
//li.classList.add(".names")
}

regButton.addEventListener("click", addMe);


