import BaseComponent from './BaseComponent';

export default class Posts extends BaseComponent {
    constructor( router, endpoint = 'posts') {
        super( router );

        this.apiUrl = `${router.baseUrl}/wp-json/wp/v2/${endpoint}`;
        this.posts = [];
        this.element = document.querySelector( '#primary' );

        this.render = this.render.bind( this );
        this.cacheDom = this.cacheDom.bind( this );
        this.bindEvents = this.bindEvents.bind( this );
        this.handleClickPrimary = this.handleClickPrimary.bind( this );
        this.getPosts = this.getPosts.bind( this );
        this.render = this.render.bind( this );

        this.getPosts();
    }

    cacheDom() {
        this.DOM.firstArticle = document.querySelector( '.entry' );
    }

    bindEvents() {
        this.DOM.firstArticle
            .addEventListener( 'click', (e) => this.handleClickPrimary(e) );
    }

    getPosts() {
        fetch( this.apiUrl )
            .then( response => response.json() )
            .then( response => {
                this.posts = response;
                this.render( this.posts );
                this.cacheDom();
                this.bindEvents();

                this.contentLoaded( this.element );
            })
            .catch( err => this.contentFailed(err, this.element) );
    }

    handleClickPrimary( event ) {
        console.log( 'Primary clicked: ', event );
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
