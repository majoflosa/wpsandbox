import Router from '../routing/Router';
import Nav from './Nav';

export default class App {
    constructor() {
        this.router = new Router();
        this.element = document.querySelector( '#primary' );

        this.nav = new Nav( this.router );

        // this.initialComponent = this.router.getRoute() === 'home' ? 'Posts' : 'Not Found';
        // this.initialEndpoint = this.router.getRoute() === 'home' ? 'posts' : null;
        // this.router.setRoute( this.router.getRoute(), this.initialComponent, this.initialEndpoint );

        // SANDBOX Component
        this.router.setRoute( 'sandbox', 'Sandbox', '' );
    }
}