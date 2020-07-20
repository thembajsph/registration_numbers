const textBoxElem = document.querySelector(".enterReg");
const regButton = document.querySelector(".addBtn");
//const radioButtonElem = document.querySelector(".selectTown")
const dropBoxElem = document.querySelector(".dropBox");
const theList = document.getElementById("listItem");
const errorMessage = document.querySelector(".error");
const dropDownBtnElem = document.querySelector(".dropDownBtn");

/* #####| NOTE |#####
Dom is mostly used to handle your html functionality. This includes getting and displaying data.
Most of your processing should be done in your factory function. Factory functions allow you to 
bundle functionality together and can be called to evaluate things on the front end or to be linked 
together to do some processing in the background
*/


// if theres something it will put on local storage or return an array
var data = localStorage.getItem("reg") ? JSON.parse(localStorage.getItem("reg")) : [];

// # Iternary operator (<compare1 == compare2>) ? <what program should do if true> : <what program should do if false>
// # localStorage is data that can be stored on the web browser session. It's built in
// # Json.parse() converts a json string to a javascript object
// # Json.stringify() converts a javascript object to a json string



var lineDataHolder = data

var instance = numberReg(data); // send data to factory function #Note: best to use same parameter names when sending to function 

//var townsValue = dropBoxElem.value;
var townsValue = dropBoxElem.options[dropBoxElem.selectedIndex].value;

//console.log(dropboxElem.selectedIndex);

function addMe() {

  // add/update local storage with localstorage.setItem(<key>:<value>).
  // key would be the way you would access your data later on using localstorage.getItem(<key>)
  // value would be the array you would want to store. You need to store it as a data string so use JSON.stringify(<value>)
  // flow should be get user input => verify => process => store
  // html has some built in functionality to set input length but you can also create your own js to do those checks

// value text box
  var regTown = textBoxElem.value;

  // storing registrations 
instance.storeArray(regTown);
var fromFactoryFact = instance.broughBackArray();

 theList.innerHTML = "";

// to get each reg loop over
for (var i= 0 ; i< fromFactoryFact.length; i++) {
 

 
  // var subString = regNum.substring(0,2);
  var li = document.createElement("li")
  li.innerHTML = fromFactoryFact[i];
  li.classList.add("color");
  theList.appendChild(li);


}
  local();


  //else if (subString === townsValue) {
  if (textBoxElem === "") {
    //theList.innerHTML = "";

    errorMessage.innerHTML = "please do include a registration number..."
  }

  else if (townsValue = "") {

    errorMessage.innerHTML = "please do select the correct town"
  }




  //theList.innerHTML = "";
  function local() {
 

    if (lineDataHolder[regTown]) {

  return errorMessage.innerHTML = "already in local storage"

    }
    else {
      lineDataHolder[regTown
      ] = 1;

    }

    //local storage store  , what it should stringify 
    localStorage.setItem("reg", JSON.stringify(lineDataHolder));
  
  }

};

function cleaningTowns() {

 // dropboxElem.addEventListener("change", function() {
  //  console.log(townsValue);
 // });

alert( dropBoxElem.options[dropBoxElem.selectedIndex].value);

 //theList.innerHTML = "";

 
  if (townsValue) {

    var fromFactory = instance.filtero(townsValue) //our towns we want to filter

  //for (var i = 0; i < fromFactory.length; i++) {
    var li = document.createElement("li")
    li.innerHTML = fromFactory
    li.classList.add("color");
    theList.appendChild(li);

  //}
  }
};

/*function noDuplicate(location, reg) {
  instance.filtero();
  var regiTownArr = [];
  var bringItBack = Object.keys(reg);

  //var townsValue = dropy.value
  // loop over reg then check then if it matches the locaL
  for (let i = 0; i < bringItBack.length; i++) {

    if (bringBack[i].startsWith(location)) {
      regTownArr.push(bringItBack[i])
    }
  }
  
  //console.log(regTownArr)
  li.innerHTML = regTownArr[i];
  li.classList.add("color");
  theList.appendChild(li);
};

//noDuplicate();*/



regButton.addEventListener("click", addMe);
dropDownBtnElem.addEventListener("click", cleaningTowns);

