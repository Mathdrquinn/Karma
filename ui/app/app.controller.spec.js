describe("The appCtrl should", function() {
    var ctrl;

    beforeEach(angular.mock.module('Karma'));
    beforeEach(inject(function($controller) {
        ctrl = $controller('appCtrl', {});
    }));

    it("initialize with app info and counter equal to zero", function() {
        expect(ctrl).toBeDefined();
        expect(ctrl.name).toEqual('Karma, Webpack, and Angular');
        expect(ctrl.description).toEqual('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi dolore doloremque hic odio quaerat quo ratione! Ab ad, aliquid aperiam aut culpa eaque facilis modi non placeat quaerat saepe.');
        expect(ctrl.counter).toEqual(0);
    });

    it("increment counter when \'incrementCounter\' is called", function() {
        ctrl.incrementCounter();
        expect(ctrl.counter).toEqual(1);
        ctrl.incrementCounter();
        ctrl.incrementCounter();
        expect(ctrl.counter).toEqual(3);
    });
});