function numberReg(reg) {  // <= you can pass a value here that can be accessed by the rest of the functions within your code

    var newArray = reg || []; // or set , check whether reg has data and use that or else set an empty array 

    function storeArray(reg) {

        if (!newArray.includes(reg)) { // stores in and checking for duplucates
            newArray.push(reg)
        }
    }

    //local bring back data local and checks , on the list for 
    function filtero(location) {
        var regTownArr = [];

        // loop over reg then check then if it matches the locaL
        for (let i = 0; i < newArray.length; i++) {

            if (newArray[i].startsWith(location)) {    //filtering only Ca 
                regTownArr.push(newArray[i])
            }
        }

        return regTownArr;
    };

    function broughBackArray() {

        return newArray   // connected to top one and return the stored

    }
    function clear() {
        newArray = [];
    }

    return {
        storeArray,
        filtero,
        broughBackArray,
        clear
    }
};



