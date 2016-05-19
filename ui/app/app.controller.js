export default class appCtrl {
    constructor() {
        "ngInject";
        this.name = 'Karma, Webpack, and Angular';
        this.description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi dolore doloremque hic odio quaerat quo ratione! Ab ad, aliquid aperiam aut culpa eaque facilis modi non placeat quaerat saepe."
        this.counter = 0;
    }

    incrementCounter() {
        this.counter++;
    }
}