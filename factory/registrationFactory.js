 function numberReg() {
    // alert(numberReg);
var newArray = reg || [];
//var greetedNames = strings || []
function storeArray(reg) {

if (!newArray.includes(reg)) {
newArray.push(reg)
}
}

function filtero(reg , location) {
    var regTownArr = [];
// loop over reg then check then if it matches the locaL
for (let i = 0; i < reg.length; i++) {

    if (reg.startsWith(location)) {
        regTownArr.push(reg)
    }
}
   
};


function cpt(reg) {
    var cptList = [];
    for (let i = 0; i < newArray.length; i++) {
        if (reg.startsWith("CA")) {
            cptList.push(reg)
            //regTownArr.push(cptList)  
        }

    }
 //console.log(regTownArr);
    return cptList;
}


function paarl() {
    // loop new array then use if it start with cj then push to town list
    var paarlList = [];
    for (let i = 0; i < newArray.length; i++) {
        if (reg.startsWith("CJ")) {
            paarlList.push(reg)
            //regTownArr.push(paarlList) 
        }

    }
    //console.log(regTownArr)
return paarlList
}

function bellville() {
    bellvilleList = [];
    for (let i = 0; i < newArray.length; i++) {
        if (reg.startsWith("CY")) {
            bellvilleList.push(reg)
            //regTownArr.push(bellvilleList)
        }

    }
   // console.log(regTownArr);
    return bellvilleList;
}
function story() {
    // return greetedNames.length;
    //first part
    return Object.keys(newArray).length;
}

return {
    storeArray,
    filtero,
    cpt,
    paarl,
    bellville,
    story
}
};



    



 