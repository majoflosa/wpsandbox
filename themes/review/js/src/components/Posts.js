import BaseComponent from './BaseComponent';

export default class Posts extends BaseComponent {
    constructor( props = {} ) {
        super( props );

        this.posts = null;
        this.element = document.querySelector( '#primary' );

        this.onInit = this.onInit.bind( this );
        this.cacheDom = this.cacheDom.bind( this );
        this.bindEvents = this.bindEvents.bind( this );
        // this.handleClickPrimary = this.handleClickPrimary.bind( this );
        this.render = this.render.bind( this );
    }

    onInit() {
        this.http.getPosts()
            .then( response => {
                if ( response.error ) return this.contentFailed( response, this.element );
                
                this.posts = response;
                this.render();
                this.cacheDom();
                this.bindEvents();
                this.contentLoaded( this.element );
            })
            .catch( err => this.contentFailed( err, this.element ) )
    }

    cacheDom() {
        // this.DOM.firstArticle = document.querySelector( '.entry' );
    }

    bindEvents() {
        // this.DOM.firstArticle.addEventListener( 'click', (e) => this.handleClickPrimary(e) );
    }

    // handleClickPrimary( event ) {
    //     console.log( 'Primary clicked: ', event );
    // }

    render() {
        let content = '';

        if ( !this.posts ) {
            this.element.innerHTML = '<h1>Whoops! This page is broken...</h1>';
            return;
        }
        
        if ( this.posts && !this.posts.length ) {
            this.element.innerHTML = '<h1>There are currently no posts.</h1>';
            return;
        }

        this.posts.forEach( post => {
            content += `
                <article class="entry">
                    <header class="entry__header">
                        <h2 class="entry__title">
                            <a href="${post.link}" data-component="SinglePost" data-route="${post.slug}" data-endpoint="${post.id}?_embed">
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
