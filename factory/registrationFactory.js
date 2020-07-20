function numberReg(reg) {  // <= you can pass a value here that can be accessed by the rest of the functions within your code
    // alert(numberReg);
    
    var newArray = reg || {}; // or set , check whether reg has data and use that or else set an empty array 
    
    
    //var greetedNames = strings || []
    function storeArray(reg) {

        if (!newArray.includes(reg)) {
            newArray.push(reg)
        }
    }
//local bring back data local and checks , on the list for 
    function filtero(location) {
        var regTownArr = [];
        var bringBack = Object.keys(reg);

        //var townsValue = dropy.value
        // loop over reg then check then if it matches the locaL
        for (let i = 0; i < bringBack.length; i++) {

            if (bringBack[i].startsWith(location)) {
                regTownArr.push(bringBack[i])
            }
        }
        //console.log(regTownArr)
        return regTownArr;
    };
    




//function allReadtExists() {



//var alredyIn = []

//}


    //function allTown(reg) {
     //   var vilter = [];
     //   for (let i = 0; i < newArray.length; i++) {
         //   if (reg.startsWith("CA") || reg.startsWith("CJ") || reg.startsWith("CY")) {
          //      vilter.push(reg)
                //regTownArr.push(cptList)  
            //}

       // }
        //console.log(vilter)
        //return vilter;
    //}


    /*function cpt(reg) {
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
    }*/
    //function story() {
        // return greetedNames.length;
        //first part
    // return Object.keys(newArray);
  //  }

    return {
        storeArray,
        filtero,
      //  allReadtExists
      //  allTown,
       // story
        //cpt,
        // paarl,
        // bellville,

    }
};



