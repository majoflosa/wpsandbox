export default class BaseComponent {
    constructor( router ) {
        this.init = this.init.bind( this );
        this.mapLinkRoute = this.mapLinkRoute.bind( this );
        this.contentLoaded = this.contentLoaded.bind( this );
        this.cacheRouterLinks = this.cacheRouterLinks.bind( this );
        this.bindRouterEvents = this.bindRouterEvents.bind( this );

        this.init( router );
    }

    init( router ) {
        this.router = router;
        this.DOM = {};
    }

    contentLoaded( $element ) {
        this.cacheRouterLinks( $element );
        this.bindRouterEvents();
    }

    contentFailed( err, $element ) {
        console.log( err.response );
        $element.innerHTML = '<h1>Whoops! Something went wrong...</h1>'
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
        this.router.setRoute( route, component, endpoint );
    }
}
