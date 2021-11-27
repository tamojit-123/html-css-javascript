describe("spyOn demo season", function () {

    it("should be summer", function () {
        var str = new Season(); //creating an object of constructor function

        spyOn(str, 'nextseason').and.callThrough(); //spyOn is a built-in function. 'nextseason' is a method that is spied on.

        str.getnextseason(); //with the object of str we are calling the season behavior

        expect(str.season).toEqual('Summer');
    });

});