function Season() {
    this.season = 'Spring'; //property

    //nextseason()
    this.nextseason = function () {
        this.season = 'Summer';
        return this.season;
    },
        //getnextseson()
        this.getnextseason = function () {
            return this.nextseason();
        }
};