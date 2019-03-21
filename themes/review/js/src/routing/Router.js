import Posts from '../components/Posts';
import SinglePost from '../components/SinglePost';

export default class Router {
    constructor() {
        // get route from window.location
        this.baseUrl = 'http://localhost:8888/wpsandbox';
        this.location = window.location;

        this.currentView = 'Posts';
        this.views = {
            'Posts': Posts,
            'SinglePost': SinglePost
        };

        this.browsingHistoryMap = {};

        this.setRoute = this.setRoute.bind( this );
        this.handleBrowserNav = this.handleBrowserNav.bind( this );
        
        // this.handleBrowserNav();
        window.addEventListener( 'popstate', (e) => this.handleBrowserNav(e) );
    }

    setRoute( route, component = 'Posts', endpoint ) {
        if ( !this.browsingHistoryMap[route] )
            window.history.pushState( 
                {endpoint: endpoint}, 
                '', 
                `${this.baseUrl}/#/${route}` 
            );
        
        // console.log( window.history );
        this.location.hash = `/${route}`;
        this.setView( component, endpoint );
        this.browsingHistoryMap[route] = component;
    }

    setView( component, endpoint ) {
        this.currentView = component;
        new this.views[component]( this, endpoint );
    }

    handleBrowserNav( event ) {
        // window.addEventListener( 'hashchange', (e) => {
        //     const route = e.newURL.split('#/')[1];
        //     // window.history.pushState( {}, '', `${this.baseUrl}/#/${route}` );
        //     // if ( this.browsingHistoryMap[route] ) 
        //     this.setRoute( route, this.browsingHistoryMap[route] );
        // });
        // console.log( event );
        const route = event.path[0].location.hash.split('#/')[1];
        const endpoint = event.path[0].history.state.endpoint;
        this.setRoute( route, this.browsingHistoryMap[route], endpoint );
    }
}