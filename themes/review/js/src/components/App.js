import Router from '../routing/Router';
import Nav from './Nav';

export default class App {
    constructor() {
        this.router = new Router();
        this.element = document.querySelector( '#primary' );

        this.nav = new Nav( this.router );
        this.router.setRoute( this.router.getRoute() );
    }
}