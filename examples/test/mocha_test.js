describe('tested thing', function () {
    it('should pass', function () { });

    it ('should pass medium speed', function (done) {
        setTimeout(done, 50);
    });

    it('should pass slow speed', function (done) {
        setTimeout(done, 200);
    });

    describe('another thing', function () {
        it('should pass', function () { });

        it('should fail', function () {
            throw new Error('Threw an error');
        });
    });

    describe('yet another thing', function () {
        it('should pass', function () { });

        it('should fail', function () {
            throw new Error('Threw an error');
        });
    });
});
