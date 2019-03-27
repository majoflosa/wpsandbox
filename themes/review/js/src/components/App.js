import Router from '../routing/Router';
import Nav from './Nav';

export default class App {
    constructor() {
        this.router = new Router();
        this.element = document.querySelector( '#primary' );

        this.nav = new Nav();

        // this.initialComponent = this.router.getRoute() === 'home' ? 'Posts' : 'Not Found';
        // this.initialEndpoint = this.router.getRoute() === 'home' ? 'posts' : null;
        console.log( this.router.getRoute() );
        this.router.setRoute( this.router.getRoute() );

        // SANDBOX Component
        // this.router.setRoute( 'sandbox', 'Sandbox', '' );
    }
}