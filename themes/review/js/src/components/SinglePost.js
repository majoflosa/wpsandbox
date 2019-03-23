import BaseComponent from './BaseComponent';

export default class SinglePost extends BaseComponent {
    constructor( props = {} ) {
        super( props );
        
        this.element = document.querySelector( '#primary' );
        this.post = null;
        
        this.onInit = this.onInit.bind( this );
    }

    onInit() {
        this.http.getPost( this.props.endpoint )
            .then( response => {
                if ( response.error ) return this.contentFailed( response, this.element );
                
                this.post = response;
                this.render();
                this.cacheDom();
                this.bindEvents();
                this.contentLoaded( this.element );
            })
            .catch( err => this.contentFailed( err, this.element ) )
    }

    cacheDom() {}

    bindEvents() {}

    render() {
        if ( !this.post ) {
            this.element.innerHTML = '<h1>Whoops! This page is broken...</h1>';
            return;
        }

        this.element.innerHTML = `
            <article class="entry">
                <header class="entry__header">
                    <h2 class="entry__title">
                        <a href="${this.post.link}" data-component="SinglePost" data-route="${this.post.slug}" data-endpoint="posts/${this.post.id}">
                            ${this.post.title.rendered}
                        </a>
                    </h2>
                </header>
                <main class="entry__body">${this.post.content.rendered}</main>
            </article>
        `;
    }
}