import Sandbox from '../components/Sandbox';
import Posts from '../components/Posts';
import SinglePost from '../components/SinglePost';
import Page from '../components/Page';
import Error404 from '../components/Error404';

export default class Router {
    constructor() {
        this.baseUrl = 'http://localhost:8888/wpsandbox';
        this.location = window.location;

        this.currentView = 'Posts';
        this.views = {
            'Sandbox': Sandbox,
            'Posts': Posts,
            'SinglePost': SinglePost,
            'Page': Page,
            'Not Found': Error404
        };

        this.browsingHistoryMap = {};

        this.setRoute = this.setRoute.bind( this );
        this.getRoute = this.getRoute.bind( this );
        this.setView = this.setView.bind( this );
        this.getView = this.getView.bind( this );
        this.handleBrowserNav = this.handleBrowserNav.bind( this );
        
        window.addEventListener( 'popstate', (e) => this.handleBrowserNav(e) );
    }

    setRoute( route, component = 'Not Found', endpoint ) {
        if ( !this.browsingHistoryMap[route] )
            window.history.pushState( 
                {endpoint: endpoint}, 
                '', 
                `${this.baseUrl}/#/${route}` 
            );
        
        this.location.hash = `/${route}`;
        this.setView( component, endpoint );
        this.browsingHistoryMap[route] = component;
    }

    getRoute() {
        return this.location.hash 
            ? this.location.hash.split('#/')[1] || 'home'
            : 'home';
    }

    setView( component, endpoint ) {
        const props = { router: this, endpoint: endpoint };

        this.currentView = component;
        this.currentViewInstance = new this.views[component]( props );
        this.currentViewInstance.element.innerHTML = '<h1>Loading new page...</h1>';
    }

    getView() {
        return this.currentView;
    }

    handleBrowserNav( event ) {
        const route = event.path[0].location.hash.split('#/')[1];
        const props = { router: this, endpoint: event.path[0].history.state.endpoint };
        this.setRoute( route, this.browsingHistoryMap[route], props );
    }
}

export const baseUrl = 'http://localhost:8888/wpsandbox';