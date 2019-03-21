import Router from '../routing/Router';

export default class App {
    constructor() {
        this.router = new Router();
        this.element = document.querySelector( '#primary' );

        this.router.setRoute( 'home' );
    }
}