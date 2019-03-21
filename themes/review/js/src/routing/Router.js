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
        
        this.handleBrowserNav();
    }

    setRoute( route, component = 'Posts', endpoint ) {
        window.history.pushState( {}, '', `${this.baseUrl}/#/${route}` );
        this.location.hash = `/${route}`;
        
        this.setView( component, endpoint );

        this.browsingHistoryMap[route] = component;
    }

    setView( component, endpoint ) {
        this.currentView = component;

        new this.views[component]( this, endpoint );
    }

    handleBrowserNav() {
        window.addEventListener( 'hashchange', (e) => {
            console.log( e );
            const route = e.newURL.split('#/')[1];

            window.history.pushState( {}, '', `${this.baseUrl}/#/${route}` );
            this.setRoute( route, this.browsingHistoryMap[route] );
        });
    }
}