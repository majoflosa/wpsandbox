export default class Posts {
    constructor( router, endpoint = 'posts') {
        this.apiUrl = `${router.baseUrl}/wp-json/wp/v2/${endpoint}`;
        this.posts = [];
        this.element = document.querySelector( '#primary' );
        this.router = router;

        this.render = this.render.bind( this );
        this.cacheDom = this.cacheDom.bind( this );
        this.bindEvents = this.bindEvents.bind( this );
        this.mapLinkRoute = this.mapLinkRoute.bind( this );
        this.getPosts = this.getPosts.bind( this );
        this.render = this.render.bind( this );

        this.getPosts();
    }

    cacheDom() {
        this.routerLinks = [...document.querySelectorAll( '[data-route]' )];
    }

    bindEvents() {
        this.routerLinks.forEach( link => link.addEventListener('click', (e) => this.mapLinkRoute(e)) );
    }

    mapLinkRoute( event ) {
        event.preventDefault();
        this.router.setRoute( 
            event.target.dataset.route, 
            event.target.dataset.component, 
            event.target.dataset.endpoint 
        );
    }

    getPosts() {
        fetch( this.apiUrl )
            .then( response => response.json() )
            .then( response => {
                this.posts = response;
                this.render( this.posts );

                this.cacheDom();
                this.bindEvents();
            })
            .catch( err => console.log(err) );
    }

    render( posts ) {
        let content = '';
        posts.forEach( post => {
            content += `
                <article class="entry">
                    <header class="entry__header">
                        <h2 class="entry__title">
                            <a href="${post.link}" data-component="SinglePost" data-route="${post.slug}" data-endpoint="posts/${post.id}">
                                ${post.title.rendered}
                            </a>
                        </h2>
                    </header>
                    <main class="entry__body">${post.excerpt.rendered}</main>
                </article>
            `;
            this.element.innerHTML = content;
        });
    }
}