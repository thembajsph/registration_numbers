describe("The Registration numbers widget factory function", function () {

    it("should be able set in text input the number of the registration", function () {
        let instance = numberReg();

        instance.storeArray()

        instance.storeArray("CA 123 556");
        instance.storeArray("CY 456 325");
        instance.storeArray("CJ 147 816");


        // #FEW SIDE NOTES ====>
        // #TESTING => ANSWER
        // assert.something(what i what to test; second block what the answer should or what it should Return)
        // basically matching/checjing what i'm testing and what it should Return
        //Error, Expected(return) to equal this answer insted of what you put in

        assert.deepInclude(["CA 123 556", "CY 456 325", "CJ 147 816"], "CA 123 556");
        assert.deepInclude(["CA 123 556", "CY 456 325", "CJ 147 816"], "CJ 147 816");
        assert.deepInclude(["CA 123 556", "CY 456 325", "CJ 147 816"], "CY 456 325");
    });

    it("should be able get the number of the registration from storage", function () {
        let instance = numberReg()
        instance.broughBackArray()

        instance.storeArray("CA 123 456")
        instance.storeArray("CY 456 789")
        instance.storeArray("CJ 147 756")

        assert.deepEqual(["CA 123 456", "CY 456 789", "CJ 147 756"], instance.broughBackArray());

    });

    it("should be able take in a filter based on town and return town's registration number", function () {
        let instance = numberReg()
        instance.filtero();

        var capeTown = instance.broughBackArray("CA 123 456")
        var bellville = instance.broughBackArray("CY 456 789")
        var paarl = instance.broughBackArray("CJ 147 756")

        assert.deepEqual(capeTown, instance.filtero("CA"));
        assert.deepEqual(bellville, instance.filtero("CY"));
        assert.deepEqual(paarl, instance.filtero("CJ"));



    });

});
