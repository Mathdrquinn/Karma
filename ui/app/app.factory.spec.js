describe("The appFactory should", function() {
    var factory;

    beforeEach(angular.mock.module('Karma'));
    beforeEach(inject(function(_appFactory_) {
        factory = _appFactory_;
    }));

    it("says Hello to me", function() {
        expect(factory.getGreeting("Dave")).toEqual("Hello Dave");
    });
});