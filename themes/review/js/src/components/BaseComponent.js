import Rest from '../helpers/Rest';
import Router, { baseUrl } from '../routing/Router';

export default class BaseComponent {
    constructor( props = {} ) {
        // Rest should only be invoked once; placing it here means there's an instance for every component
        this.http = new Rest( `${baseUrl}/wp-json/wp/v2` );
        this.props = props;
        this.DOM = {};

        this.init = this.init.bind( this );
        this.mapLinkRoute = this.mapLinkRoute.bind( this );
        this.contentLoaded = this.contentLoaded.bind( this );
        this.cacheRouterLinks = this.cacheRouterLinks.bind( this );
        this.bindRouterEvents = this.bindRouterEvents.bind( this );

        this.onInit();
    }

    init() {}

    onInit() {
        console.log( 'BaseComponent init' );
    }

    contentLoaded( $element ) {
        this.cacheRouterLinks( $element );
        this.bindRouterEvents();
    }

    contentFailed( err, $element ) {
        console.error( 'contentFailed: ', err );
        $element.innerHTML = `<h1>${err}</h1>`
    }

    cacheRouterLinks( $element ) {
        this.DOM.routerLinks = [...$element.querySelectorAll( '[data-route]' )];
    }

    bindRouterEvents() {
        this.DOM.routerLinks.forEach( $link => {
            $link.addEventListener( 'click', (e) => this.mapLinkRoute(e) );
        });
    }

    mapLinkRoute( event ) {
        event.preventDefault();

        const { route, component, endpoint } = event.target.dataset;
        this.props.router.setRoute( route );
    }
}
