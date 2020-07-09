const framzo = document.querySelector(".enterReg");
const regButton = document.querySelector(".addBtn");
const dropy = document.querySelector(".dropBox");
const theList = document.getElementById("tello");
const errorMessage = document.querySelector(".error");
// if theres something it will put on local storage or return an array
var data = localStorage.getItem("reg") ? JSON.parse(localStorage.getItem("reg")): [];
var lineDataHolder = data

var instance = numberReg(data);


function addMe() {

  instance.storeArray();
  //alert(framzo.value);
  //if (framzo.value.length == 0 ) {
  //  return 

local();
  //}
  var li = document.createElement("li")
  
  var regNum = framzo.value;
  var townsValue = dropy.value
  var subString = regNum.substring(0,2);

  if (framzo.value === "") { 
    errorMessage.innerHTML= "please do include a registration number..."
    
  }
  

 else if (subString === townsValue) {
    li.innerHTML =regNum 
    li.classList.add("color");
    theList.appendChild(li);
  }
  else if (!framzo.length === 0 && framzo.value) {
   // li.innerHTML = ""
  // }

   else {
    errorMessage.innerHTML = "please do select the correct town"

  }



  function local(){
    instance.story;
    //local storage store  , what it should stringify 
    localStorage.setItem("reg", JSON.stringify(lineDataHolder));
  }
  


 

};

regButton.addEventListener("click", addMe);


