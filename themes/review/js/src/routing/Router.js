import Sandbox from '../components/Sandbox';
import Posts from '../components/Posts';
import SinglePost from '../components/SinglePost';
import Page from '../components/Page';
import Error404 from '../components/Error404';

export default class Router {
    constructor() {
        this.baseUrl = 'http://localhost:8888/wpsandbox';
        this.location = window.location;

        this.routes = {
            '/': {
                component: Posts,
                id: null,
                query: null
            },
        };

        wpSettings.routes.forEach( route => {
            let slug = route.url.replace( this.baseUrl, '' );
            // NOTE: Custom post types, attachments, and others are not being considered here
            let component = route.type === 'post' ? SinglePost : Page;
            this.routes[slug] = {
                component: component,
                id: route.id,
                query: null
            };
        });
        console.log( this.routes );

        // this.currentView = 'Posts';
        // this.views = {
        //     'Sandbox': Sandbox,
        //     'Posts': Posts,
        //     'SinglePost': SinglePost,
        //     'Page': Page,
        //     'Not Found': Error404
        // };

        this.browsingHistoryMap = {};

        this.setRoute = this.setRoute.bind( this );
        this.getRoute = this.getRoute.bind( this );
        this.setView = this.setView.bind( this );
        this.getView = this.getView.bind( this );
        this.handleBrowserNav = this.handleBrowserNav.bind( this );
        
        window.addEventListener( 'popstate', (e) => this.handleBrowserNav(e) );
    }

    setRoute( route = '/' ) {
        // if ( !this.browsingHistoryMap[route] )
            window.history.pushState( 
                // {endpoint: endpoint}, 
                {}, 
                '', 
                `${this.baseUrl}${route === '/' ? route : '/' + route}` 
            );
        
        // this.location.hash = `/${route}`;
        // this.location.pathname = `/wpsandbox${route}`;
        this.setView( route );
        // this.browsingHistoryMap[route] = component;
    }

    getRoute() {
        return this.location.path || '/';
        // return this.location.hash 
        //     ? this.location.hash.split('#/')[1] || 'home'
        //     : 'home';
    }

    setView( route ) {
        route = route === '/' ? route : `/${route}/`;
        const props = { router: this, endpoint: this.routes[route].id };
        console.log( route );

        // this.currentView = component;
        this.currentViewInstance = new this.routes[route].component( props );
        this.currentViewInstance.element.innerHTML = '<h1>Loading new page...</h1>';
    }

    getView() {
        return this.currentView;
    }

    handleBrowserNav( event ) {
        // const route = event.path[0].location.hash.split('#/')[1];
        // const props = { router: this, endpoint: event.path[0].history.state.endpoint };
        // this.setRoute( route, this.browsingHistoryMap[route], props );
        const { location } = event.path[0];
        const route = `${location.href.replace(this.baseUrl, '')}`;
        console.log( route );

        const props = { router: this, endpoint: this.routes[route].id  }


        this.currentViewInstance = new this.routes[route].component( props );
        this.currentViewInstance.element.innerHTML = '<h1>Loading new page...</h1>';
    }
}

export const baseUrl = 'http://localhost:8888/wpsandbox';